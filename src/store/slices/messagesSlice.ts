import { createSlice } from "@reduxjs/toolkit";
import type { IMessage } from "../../../shared/types";

interface MessagesState {
	messages: IMessage[];
}

const initialState: MessagesState = {
	messages: [],
};

const createMessagesSlice = (name: string) =>
	createSlice({
		name,
		initialState,
		reducers: {
			addMessage: (
				state,
				action: {
					payload: IMessage;
				},
			) => {
				state.messages.push(action.payload);
			},
			removeMessage: (
				state,
				action: {
					payload: IMessage;
				},
			) => {
				state.messages = state.messages.filter(
					(message) => message.id !== action.payload.id,
				);
			},
			setMessages: (
				state,
				action: {
					payload: IMessage[];
				},
			) => {
				state.messages = action.payload;
			},
		},
	});

export const auctionMessagesSlice = createMessagesSlice("auction-messages");

export const maptionMessagesSlice = createMessagesSlice("maption-messages");

export type MessagesSlice = ReturnType<typeof createMessagesSlice>;
