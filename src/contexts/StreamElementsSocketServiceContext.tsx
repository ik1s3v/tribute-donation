import { type Context, createContext } from "react";
import type StreamElementsSocketService from "../services/streamElementsSocketService";

export const StreamElementsSocketServiceContext = createContext(
	null,
) as Context<StreamElementsSocketService | null>;
