import type { Middleware, Action as UnknownAction } from "@reduxjs/toolkit";
import { maptionTimerSlice } from "../../../shared/slices/timerSlice";
import isDonationAddTime from "../../helpers/isDonationAddTime";
import type { AppState } from "..";
import { maptionMessagesSlice } from "../slices/messagesSlice";

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
