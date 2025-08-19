import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { AppState, store } from "./store";
import "../shared/i18n/i18n";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { appLocalDataDir } from "@tauri-apps/api/path";
import { BrowserRouter } from "react-router";
import { AppEvent } from "../shared/enums";
import type { IAucFighterMatchWinner, IMessage } from "../shared/types";
import { aucFighterApi } from "./api/aucFighterApi";
import { messagesApi } from "./api/messagesApi";
import updateAucFighterTeamAmount from "./helpers/updateAucFighterTeamAmount";
import { listenerService } from "./services/listenerService";
import {
	addConnectedAlert,
	setPlayingAlertId,
} from "./store/slices/alertsSlice";
import {
	setGameWinner,
	setPausedMatchId,
	setPlayingMatchId,
	updateMatch,
} from "./store/slices/aucFighterSlice";
import { setAppDataDir } from "./store/slices/mainSlice";
import { setPausedMediaId, setPlayingMediaId } from "./store/slices/mediaSlice";
import {
	auctionMessagesSlice,
	maptionMessagesSlice,
} from "./store/slices/messagesSlice";
import { dark } from "./theme/default";

appLocalDataDir().then((path) => store.dispatch(setAppDataDir(path)));

const { addMessage: addAuctionMessage } = auctionMessagesSlice.actions;
const { addMessage: addMaptionMessage } = maptionMessagesSlice.actions;

listenerService.subscribe<IMessage>(AppEvent.Message, (message) => {
	updateAucFighterTeamAmount(message);
	store.dispatch(addAuctionMessage(message));
	store.dispatch(addMaptionMessage(message));
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

listenerService.subscribe<string>(AppEvent.AlertPlaying, (id) => {
	store.dispatch(setPlayingAlertId(id));
});
listenerService.subscribe<string>(AppEvent.MediaPlaying, (id) => {
	store.dispatch(setPausedMediaId(""));
	store.dispatch(setPlayingMediaId(id));
});

listenerService.subscribe<string>(AppEvent.MediaPaused, (id) => {
	store.dispatch(setPausedMediaId(id));
});
listenerService.subscribe<string>(AppEvent.AlertConnected, (group_id) => {
	store.dispatch(addConnectedAlert(group_id));
});

listenerService.subscribe<string>(AppEvent.AlertPlayed, (_) => {
	store.dispatch(setPlayingAlertId(""));
});
listenerService.subscribe<string>(AppEvent.MediaPlayed, (_) => {
	store.dispatch(setPlayingMediaId(""));
	store.dispatch(setPausedMediaId(""));
});

listenerService.subscribe<string>(AppEvent.AucFighterMatchPlaying, (id) => {
	store.dispatch(setPausedMatchId(""));
	store.dispatch(setPlayingMatchId(id));
});
listenerService.subscribe<string>(AppEvent.AucFighterMatchPaused, (id) => {
	store.dispatch(setPausedMatchId(id));
});

listenerService.subscribe<IAucFighterMatchWinner>(
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
					store.dispatch(
						aucFighterApi.endpoints.startAucFighterMatch.initiate({
							data: newMatch,
						}),
					);
				} else if (match.is_final) {
					store.dispatch(setGameWinner(winner));
				}
			}
		}
	},
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={createTheme(dark)}>
				<Provider store={store}>
					<CssBaseline />
					<App />
				</Provider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
