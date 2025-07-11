import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "../shared/i18n/i18n";
import { BrowserRouter } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { dark } from "./theme/default";
import { createTheme } from "@mui/material";

import { appLocalDataDir } from "@tauri-apps/api/path";
import { setAppDataDir } from "./store/slices/mainSlice";
import { listenerService } from "./services/listenerService";
import type { IMessage } from "../shared/types";
import { AppEvent } from "../shared/enums";
import { messagesApi } from "./api/messagesApi";
import {
	addConnectedAlert,
	setPlayingAlertId,
} from "./store/slices/alertsSlice";
import { setPausedMediaId, setPlayingMediaId } from "./store/slices/mediaSlice";

appLocalDataDir().then((path) => store.dispatch(setAppDataDir(path)));

listenerService.subscribe<IMessage>(AppEvent.Message, (message) => {
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

listenerService.subscribe<string>(AppEvent.MediaPaused, (id) => {
	store.dispatch(setPausedMediaId(id));
});

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
