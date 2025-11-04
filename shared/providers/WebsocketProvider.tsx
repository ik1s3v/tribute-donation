import type { Context, ReactNode } from "react";
import type { IWebsocketService } from "../types";

const WebsocketProvider = ({
	children,
	context,
	webSocketService,
}: {
	children: ReactNode;
	context: Context<any>;
	webSocketService: IWebsocketService;
}) => {
	return (
		<context.Provider value={webSocketService}>{children}</context.Provider>
	);
};

export default WebsocketProvider;
