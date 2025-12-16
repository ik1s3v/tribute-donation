import WebSocket from "@tauri-apps/plugin-websocket";
import { MessageType } from "./../../shared/enums";
import { AppEvent, ServiceType } from "../../shared/enums";
import Subscriptions from "../../shared/services/subscriptions";
import { setPlayingAlertId } from "../../shared/slices/alertsSlice";
import {
	setPausedMediaId,
	setPlayingMediaId,
} from "../../shared/slices/mediaSlice";
import type {
	IAucFighterMatchWinner,
	IClientMessage,
	IEventMessage,
	IService,
	ITwitchEventPayload,
	ITwitchIntegrationSettings,
	ITwitchRedemptionEvent,
	IWebsocketService,
} from "../../shared/types";
import { messagesApi } from "../api/messagesApi.ts";
import { servicesApi } from "../api/servicesApi.ts";
import { settingsApi } from "../api/settingsApi.ts";
import twitchRedemptionToDonation from "../helpers/twitchRedemptionToDonation";
import updateAucFighterTeamAmount from "../helpers/updateAucFighterTeamAmount";
import { AppState, store } from "../store";
import {
	setGameWinner,
	setPausedMatchId,
	setPlayingMatchId,
	updateMatch,
} from "../store/slices/aucFighterSlice";
import {
	auctionDonationsSlice,
	maptionDonationsSlice,
} from "../store/slices/donationsSlice.ts";

const { addDonation: addAuctionDonation } = auctionDonationsSlice.actions;
const { addDonation: addMaptionDonation } = maptionDonationsSlice.actions;

export class WebSocketService
	extends Subscriptions
	implements IWebsocketService
{
	socket: WebSocket | null;
	url: string;
	connected: boolean = false;

	constructor(url: string) {
		super();
		this.url = url;
		this.socket = null;
		this.subscribe<IClientMessage>(AppEvent.Message, (message) => {
			const state = store.getState() as AppState;
			const { services } = state.servicesState;
			if (message.type === MessageType.Donation && message.donation) {
				if (services[message.donation.service].active) {
					store.dispatch(addAuctionDonation(message.donation));
				}
				updateAucFighterTeamAmount(message.donation, this);
				store.dispatch(addMaptionDonation(message.donation));
			}

			store.dispatch(
				messagesApi.util.updateQueryData("getMessages", undefined, (draft) => {
					draft.pages[0].unshift(message);
					const lastPageParam = draft.pageParams.at(-1);
					if (lastPageParam) {
						lastPageParam.offset = lastPageParam.offset + 1;
					}
				}),
			);
		});

		this.subscribe<ITwitchEventPayload<ITwitchRedemptionEvent>>(
			AppEvent.TwitchRewardRedemptionAdd,
			async (payload) => {
				const state = store.getState() as AppState;
				const { services } = state.servicesState;
				const { data: settings } = await store.dispatch(
					settingsApi.endpoints.getSettings.initiate(undefined, {
						forceRefetch: true,
					}),
				);
				const { data } = await store.dispatch(
					servicesApi.endpoints.getServiceById.initiate(
						{
							id: ServiceType.Twitch,
						},
						{ forceRefetch: true },
					),
				);
				const service = data as IService<unknown, ITwitchIntegrationSettings>;

				if (services[ServiceType.Twitch].active && settings && service) {
					store.dispatch(
						addAuctionDonation(
							twitchRedemptionToDonation({
								payload,
								currency: settings.currency,
								ratio: service.settings.points_currency_ratio,
							}),
						),
					);
				}
			},
		);
		this.subscribe<string>(AppEvent.AlertPlaying, (id) => {
			store.dispatch(setPlayingAlertId(id));
		});
		this.subscribe<string>(AppEvent.MediaPlaying, (id) => {
			store.dispatch(setPausedMediaId(""));
			store.dispatch(setPlayingMediaId(id));
		});

		this.subscribe<string>(AppEvent.MediaPaused, (id) => {
			store.dispatch(setPausedMediaId(id));
		});

		this.subscribe<string>(AppEvent.AlertPlayed, (_) => {
			store.dispatch(setPlayingAlertId(""));
		});
		this.subscribe<string>(AppEvent.MediaPlayed, (_) => {
			store.dispatch(setPlayingMediaId(""));
			store.dispatch(setPausedMediaId(""));
		});

		this.subscribe<string>(AppEvent.AucFighterMatchPlaying, (id) => {
			store.dispatch(setPausedMatchId(""));
			store.dispatch(setPlayingMatchId(id));
		});
		this.subscribe<string>(AppEvent.AucFighterMatchPaused, (id) => {
			store.dispatch(setPausedMatchId(id));
		});

		this.subscribe<IAucFighterMatchWinner>(
			AppEvent.AucFighterMatchEnd,
			(matchWinner) => {
				const state = store.getState() as AppState;
				const game = state.aucFighterState.game;
				if (game) {
					store.dispatch(setPlayingMatchId(""));
					const matchIndex = game.matches.findIndex(
						(match) => match.id === matchWinner.matchId,
					);
					if (matchIndex !== -1) {
						const match = game.matches[matchIndex];
						const winner = match.teams[matchWinner.winnerIndex];

						const updatedTeams = match.teams.map((team, index) => {
							if (index === matchWinner.winnerIndex) {
								return { ...team, is_winner: true };
							}
							return { ...team, is_winner: false };
						});
						store.dispatch(
							updateMatch({ ...match, teams: updatedTeams, is_ended: true }),
						);
						const nextMatch = game.matches[matchIndex + 1];
						if (nextMatch) {
							const newMatch = {
								...nextMatch,
								teams: [
									nextMatch.teams[0],
									{
										...winner,
										is_winner: false,
										amount: nextMatch.teams[1].amount,
									},
								],
							};
							store.dispatch(updateMatch(newMatch));
							this.send({
								event: AppEvent.StartAucFighterMatch,
								data: newMatch,
							});
						} else if (match.is_final) {
							store.dispatch(setGameWinner(winner));
						}
					}
				}
			},
		);
	}

	async connect() {
		if (!this.socket && !this.connected) {
			this.connected = true;
			this.socket = await WebSocket.connect(this.url);
			this.socket.addListener((message) => {
				const websocketMessage: IEventMessage<unknown> = JSON.parse(
					message.data as string,
				);

				this.notifySubscribers(websocketMessage.event, websocketMessage.data);
			});
		}
	}

	async disconnect() {
		if (this.socket) {
			await this.socket.disconnect();
			this.socket = null;
			this.connected = false;
		}
	}

	send<T>(message: IEventMessage<T>) {
		if (this.socket) {
			try {
				this.socket.send(JSON.stringify(message));
			} catch (error) {
				console.error(error);
			}
		}
	}
}
