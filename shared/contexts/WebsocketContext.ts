import { Context, createContext } from "react";
import { IWebsocketService } from "../types";

export const WebsocketContext = createContext(
	null,
) as Context<IWebsocketService | null>;
