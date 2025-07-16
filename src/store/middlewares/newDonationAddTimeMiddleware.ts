import type { Action as UnknownAction, Middleware } from "@reduxjs/toolkit";
import type { AppState } from "..";
import isAuctionAddTime from "../../helpers/isAuctionAddTime";
import { auctionTimerSlice } from "../slices/timerSlice";
import { auctionMessagesSlice } from "../slices/messagesSlice";

const { addTime } = auctionTimerSlice.actions;

const newDonationAddTimeMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const appAction = action as UnknownAction;
		const result = next(action);
		const nextState = store.getState();
		const auctionSettings = nextState.auctionState.auctionSettings;
		const time = nextState.auctionTimerState.time;

		if (
			appAction.type === auctionMessagesSlice.actions.addMessage.type &&
			auctionSettings?.is_new_donation_adding_time &&
			isAuctionAddTime(auctionSettings, time)
		) {
			store.dispatch(addTime(auctionSettings.new_donation_adding_time));
		}

		return result;
	};

export default newDonationAddTimeMiddleware;
