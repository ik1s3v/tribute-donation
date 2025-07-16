import type { Middleware } from "@reduxjs/toolkit";
import type { AppState } from "..";
import isAuctionAddTime from "../../helpers/isAuctionAddTime";
import { auctionTimerSlice } from "../slices/timerSlice";
import findLotsMinMaxAmount from "../../helpers/findLotsMinMaxAmount";

const { addTime } = auctionTimerSlice.actions;

const lotsLeaderChangeAddTimeMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const prevState = store.getState();
		const prevLots = prevState.lotsState.lots;
		const { max: prevLeader } = findLotsMinMaxAmount(prevLots);

		const result = next(action);

		const nextState = store.getState();
		const nextLots = nextState.lotsState.lots;
		const { max: nextLeader } = findLotsMinMaxAmount(nextLots);
		const auctionSettings = nextState.auctionState.auctionSettings;
		const time = nextState.auctionTimerState.time;

		if (
			prevLeader &&
			nextLeader &&
			prevLeader.fastId !== nextLeader.fastId &&
			auctionSettings?.is_leader_change_adding_time &&
			isAuctionAddTime(auctionSettings, time)
		) {
			store.dispatch(addTime(auctionSettings.leader_change_adding_time));
		}

		return result;
	};

export default lotsLeaderChangeAddTimeMiddleware;
