import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import { websocketService } from "./websocket/websocket_service";
import { CssBaseline } from "@mui/material";
import "../shared/i18n/i18n";
websocketService.connect();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<CssBaseline />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
