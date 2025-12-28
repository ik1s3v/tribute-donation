import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { alertsSlice } from "../../shared/slices/alertsSlice";
import { mediaSlice } from "../../shared/slices/mediaSlice";
import { messagesSlice } from "../../shared/slices/messagesSlice.ts";
import { servicesSlice } from "../../shared/slices/servicesSlice.ts";
import { snackBarSlice } from "../../shared/slices/snackBarSlice";
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
import { aucFighterSlice } from "./slices/aucFighterSlice";
import { auctionSlice } from "./slices/auctionSlice";
import {
	auctionDonationsSlice,
	maptionDonationsSlice,
} from "./slices/donationsSlice.ts";
import { goalsSlice } from "./slices/goalsSlice";
import { lotsSlice } from "./slices/lotsSlice";
import { mainSlice } from "./slices/mainSlice";
import { maptionSlice } from "./slices/maptionSlice";
import { settingsSlice } from "./slices/settingsSlice";

export const rootReducer = combineReducers({
	snackBarState: snackBarSlice.reducer,
	mainState: mainSlice.reducer,
	messagesState: messagesSlice.reducer,
	mediaState: mediaSlice.reducer,
	alertsState: alertsSlice.reducer,
	settingsState: settingsSlice.reducer,
	lotsState: lotsSlice.reducer,
	auctionState: auctionSlice.reducer,
	auctionTimerState: auctionTimerSlice.reducer,
	maptionTimerState: maptionTimerSlice.reducer,
	auctionDonationsState: auctionDonationsSlice.reducer,
	maptionDonationsState: maptionDonationsSlice.reducer,
	maptionState: maptionSlice.reducer,
	aucFighterState: aucFighterSlice.reducer,
	goalsState: goalsSlice.reducer,
	servicesState: servicesSlice.reducer,
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
