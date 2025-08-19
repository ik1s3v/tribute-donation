import type { Middleware, UnknownAction } from "@reduxjs/toolkit";
import { auctionTimerSlice } from "../../../shared/slices/timerSlice";
import isDonationAddTime from "../../helpers/isDonationAddTime";
import type { AppState } from "..";
import { lotsSlice } from "../slices/lotsSlice";

const { addTime } = auctionTimerSlice.actions;

const newLotAddAuctionTimeMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const appAction = action as UnknownAction;
		const result = next(action);
		const nextState = store.getState();
		const auctionSettings = nextState.auctionState.auctionSettings;
		const time = nextState.auctionTimerState.time;

		if (
			appAction.type === lotsSlice.actions.addLot.type &&
			auctionSettings?.is_new_lot_adding_time &&
			isDonationAddTime({
				is_greater_timer_adding_time:
					auctionSettings.is_greater_timer_adding_time,
				timer_adding_time: auctionSettings.timer_adding_time,
				time,
			})
		) {
			store.dispatch(addTime(auctionSettings.new_lot_adding_time));
		}

		return result;
	};

export default newLotAddAuctionTimeMiddleware;
