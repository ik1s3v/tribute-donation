import { AppEvent } from "../../shared/enums";
import HotReload from "../../shared/services/hotReload";
import Subscriptions from "../../shared/services/subscriptions";
import { setPlayingAlertId } from "../../shared/slices/alertsSlice";
import {
	setPausedMediaId,
	setPlayingMediaId,
} from "../../shared/slices/mediaSlice";
import type {
	IEventMessage,
	IMessage,
	IWebsocketService,
} from "../../shared/types";
import { messagesApi } from "../api/messagesApi";
import { store } from "../store";

export class WebSocketService
	extends Subscriptions
	implements IWebsocketService
{
	socket: WebSocket | null;
	url: string;
	hotReload: HotReload | null;

	constructor(url: string) {
		super();
		this.url = url;
		this.socket = null;
		this.hotReload = null;
	}

	connect() {
		if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
			this.socket = new WebSocket(this.url);
			this.hotReload = new HotReload(this.socket);

			this.socket.onopen = () => {
				const url = new URL(location.href);
				const groupId = url.searchParams.get("group_id");
				this.send({
					event: AppEvent.AlertConnected,
					data: groupId,
				});
			};

			this.socket.onmessage = (message) => {
				const websocketMessage: IEventMessage<unknown> = JSON.parse(
					message.data,
				);

				this.notifySubscribers(websocketMessage.event, websocketMessage.data);
			};

			this.socket.onclose = () => {
				setTimeout(() => this.connect(), 1000);
			};

			this.subscribe<IMessage>(AppEvent.Message, (message) => {
				store.dispatch(
					messagesApi.util.updateQueryData(
						"getMessages",
						undefined,
						(draft) => {
							draft.pages[0].unshift(message);
							const lastPageParam = draft.pageParams.at(-1);
							if (lastPageParam) {
								lastPageParam.offset = lastPageParam.offset + 1;
							}
						},
					),
				);
			});

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
		}
	}

	disconnect() {
		if (this.socket) {
			this.socket.close();
			this.socket = null;
		}
	}
	send<T>(message: IEventMessage<T>) {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			try {
				this.socket.send(JSON.stringify(message));
			} catch (error) {
				console.error(error);
			}
		}
	}
}
