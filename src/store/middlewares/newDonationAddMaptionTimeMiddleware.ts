import type { Action as UnknownAction, Middleware } from "@reduxjs/toolkit";
import type { AppState } from "..";
import isDonationAddTime from "../../helpers/isDonationAddTime";
import { maptionMessagesSlice } from "../slices/messagesSlice";
import { maptionTimerSlice } from "../slices/timerSlice";

const { addTime } = maptionTimerSlice.actions;

const newDonationAddMaptionTimeMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const appAction = action as UnknownAction;
		const result = next(action);
		const nextState = store.getState();
		const { maptionSettings, isPointSet } = nextState.maptionState;
		const time = nextState.maptionTimerState.time;

		if (
			appAction.type === maptionMessagesSlice.actions.addMessage.type &&
			isPointSet &&
			maptionSettings &&
			isDonationAddTime({
				is_greater_timer_adding_time:
					maptionSettings.is_greater_timer_adding_time,
				timer_adding_time: maptionSettings.timer_adding_time,
				time,
			})
		) {
			store.dispatch(addTime(maptionSettings.new_donation_adding_time));
		}

		return result;
	};

export default newDonationAddMaptionTimeMiddleware;
