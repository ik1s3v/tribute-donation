import { Context, createContext } from "react";
import { IWebsocketService } from "../types";

export const WebsocketContext = createContext(
	null,
) as unknown as Context<IWebsocketService>;
