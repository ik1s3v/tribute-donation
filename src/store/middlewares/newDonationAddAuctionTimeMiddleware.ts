import type { Action as UnknownAction, Middleware } from "@reduxjs/toolkit";
import type { AppState } from "..";
import isDonationAddTime from "../../helpers/isDonationAddTime";
import { auctionTimerSlice } from "../slices/timerSlice";
import { auctionMessagesSlice } from "../slices/messagesSlice";

const { addTime } = auctionTimerSlice.actions;

const newDonationAddAuctionTimeMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const appAction = action as UnknownAction;
		const result = next(action);
		const nextState = store.getState();
		const auctionSettings = nextState.auctionState.auctionSettings;
		const time = nextState.auctionTimerState.time;

		if (
			appAction.type === auctionMessagesSlice.actions.addMessage.type &&
			auctionSettings?.is_new_donation_adding_time &&
			isDonationAddTime({
				is_greater_timer_adding_time:
					auctionSettings.is_greater_timer_adding_time,
				timer_adding_time: auctionSettings.timer_adding_time,
				time,
			})
		) {
			store.dispatch(addTime(auctionSettings.new_donation_adding_time));
		}

		return result;
	};

export default newDonationAddAuctionTimeMiddleware;
