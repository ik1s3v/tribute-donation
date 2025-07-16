import type { Middleware, UnknownAction } from "@reduxjs/toolkit";
import type { AppState } from "..";
import isAuctionAddTime from "../../helpers/isAuctionAddTime";
import { auctionTimerSlice } from "../slices/timerSlice";
import { lotsSlice } from "../slices/lotsSlice";

const { addTime } = auctionTimerSlice.actions;

const newLotAddTimeMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const appAction = action as UnknownAction;
		const result = next(action);
		const nextState = store.getState();
		const auctionSettings = nextState.auctionState.auctionSettings;
		const time = nextState.auctionTimerState.time;

		if (
			appAction.type === lotsSlice.actions.addLot.type &&
			auctionSettings?.is_new_lot_adding_time &&
			isAuctionAddTime(auctionSettings, time)
		) {
			store.dispatch(addTime(auctionSettings.new_lot_adding_time));
		}

		return result;
	};

export default newLotAddTimeMiddleware;
