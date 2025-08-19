import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	auctionTimerSlice,
	maptionTimerSlice,
} from "../../shared/slices/timerSlice";
import { api } from "../api";
import calculateLotsProbabilityMiddleware from "./middlewares/calculateLotsProbabilityMiddleware";
import lotsLeaderChangeAddTimeMiddleware from "./middlewares/lotsLeaderChangeAddTimeMiddleware";
import newDonationAddAuctionTimeMiddleware from "./middlewares/newDonationAddAuctionTimeMiddleware";
import newDonationAddMaptionTimeMiddleware from "./middlewares/newDonationAddMaptionTimeMiddleware";
import newDonationUpdateLotMiddleware from "./middlewares/newDonationUpdateLotMiddleware";
import newDonationUpdateMaptionPositionMiddleware from "./middlewares/newDonationUpdateMaptionPositionMiddleware";
import newLotAddAuctionTimeMiddleware from "./middlewares/newLotAddAuctionTimeMiddleware";
import updateMaptionSettingsMiddleware from "./middlewares/updateMaptionSettingsMiddleware";
import { alertsSlice } from "./slices/alertsSlice";
import { aucFighterSlice } from "./slices/aucFighterSlice";
import { auctionSlice } from "./slices/auctionSlice";
import { lotsSlice } from "./slices/lotsSlice";
import { mainSlice } from "./slices/mainSlice";
import { maptionSlice } from "./slices/maptionSlice";
import { mediaSlice } from "./slices/mediaSlice";
import {
	auctionMessagesSlice,
	maptionMessagesSlice,
} from "./slices/messagesSlice";
import { settingsSlice } from "./slices/settingsSlice";
import { snackBarSlice } from "./slices/snackBarSlice";

export const rootReducer = combineReducers({
	snackBarState: snackBarSlice.reducer,
	mainState: mainSlice.reducer,
	mediaState: mediaSlice.reducer,
	alertsState: alertsSlice.reducer,
	settingsState: settingsSlice.reducer,
	lotsState: lotsSlice.reducer,
	auctionState: auctionSlice.reducer,
	auctionTimerState: auctionTimerSlice.reducer,
	maptionTimerState: maptionTimerSlice.reducer,
	auctionMessagesState: auctionMessagesSlice.reducer,
	maptionMessagesState: maptionMessagesSlice.reducer,
	maptionState: maptionSlice.reducer,
	aucFighterState: aucFighterSlice.reducer,
	[api.reducerPath]: api.reducer,
});

export const setupStore = (preloadedState?: Partial<AppState>) => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(api.middleware)
				.concat(lotsLeaderChangeAddTimeMiddleware)
				.concat(newLotAddAuctionTimeMiddleware)
				.concat(newDonationAddAuctionTimeMiddleware)
				.concat(calculateLotsProbabilityMiddleware)
				.concat(newDonationUpdateLotMiddleware)
				.concat(updateMaptionSettingsMiddleware)
				.concat(newDonationAddMaptionTimeMiddleware)
				.concat(newDonationUpdateMaptionPositionMiddleware),
		preloadedState,
		devTools: process.env.NODE_ENV !== "production",
	});
};

export const store = setupStore();
export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
