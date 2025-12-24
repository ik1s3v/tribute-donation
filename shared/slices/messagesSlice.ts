import { createSlice } from "@reduxjs/toolkit";
import { IMessagesFilter } from "../types";

interface MessagesState {
	filter: IMessagesFilter;
}

const initialState: MessagesState = {
	filter: {
		exclude_donations: false,
		exclude_follows: false,
		exclude_subscriptions: false,
		exclude_raids: false,
	},
};

export const messagesSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		setFilter: (
			state,
			action: {
				payload: IMessagesFilter;
			},
		) => {
			state.filter = action.payload;
		},
	},
});

export const { setFilter } = messagesSlice.actions;
