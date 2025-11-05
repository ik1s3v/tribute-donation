import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { WebSocketService } from "./services/websocketService";
import "../shared/i18n/i18n";
import { Provider } from "react-redux";
import { WebsocketContext } from "../shared/contexts/WebsocketContext";
import WebsocketProvider from "../shared/providers/WebsocketProvider";
import { store } from "./store";

const webSocketService = new WebSocketService("ws://localhost:12553/ws");

webSocketService.connect();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<WebsocketProvider
			context={WebsocketContext}
			webSocketService={webSocketService}
		>
			<Provider store={store}>
				<BrowserRouter>
					<CssBaseline />
					<App />
				</BrowserRouter>
			</Provider>
		</WebsocketProvider>
	</React.StrictMode>,
);
