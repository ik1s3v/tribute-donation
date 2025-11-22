import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import "../shared/i18n/i18n";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { appLocalDataDir } from "@tauri-apps/api/path";
import { BrowserRouter } from "react-router";
import { WebsocketContext } from "../shared/contexts/WebsocketContext";
import WebsocketProvider from "../shared/providers/WebsocketProvider";
import { StreamElementsSocketServiceContext } from "./contexts/StreamElementsSocketServiceContext";
import StreamElementsSocketServiceProvider from "./providers/StreamElementsSocketServiceProvider";
import StreamElementsSocketService from "./services/streamElementsSocketService";
import { WebSocketService } from "./services/websocketService";
import { setAppDataDir } from "./store/slices/mainSlice";
import { dark } from "./theme/default";

appLocalDataDir().then((path) => store.dispatch(setAppDataDir(path)));

const websocketService = new WebSocketService("ws://127.0.0.1:12553/ws");
const streamElementsSocketService = new StreamElementsSocketService();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<StreamElementsSocketServiceProvider
			context={StreamElementsSocketServiceContext}
			streamElementsSocketService={streamElementsSocketService}
		>
			<WebsocketProvider
				context={WebsocketContext}
				webSocketService={websocketService}
			>
				<BrowserRouter>
					<ThemeProvider theme={createTheme(dark)}>
						<Provider store={store}>
							<CssBaseline />
							<App />
						</Provider>
					</ThemeProvider>
				</BrowserRouter>
			</WebsocketProvider>
		</StreamElementsSocketServiceProvider>
	</React.StrictMode>,
);
