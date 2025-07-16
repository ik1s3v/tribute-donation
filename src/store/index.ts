import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { snackBarSlice } from "./slices/snackBarSlice";
import { mainSlice } from "./slices/mainSlice";
import { api } from "../api";
import { alertsSlice } from "./slices/alertsSlice";
import { settingsSlice } from "./slices/settingsSlice";
import { mediaSlice } from "./slices/mediaSlice";
import { lotsSlice } from "./slices/lotsSlice";
import { auctionMessagesSlice } from "./slices/messagesSlice";
import { auctionTimerSlice } from "./slices/timerSlice";
import { auctionSlice } from "./slices/auctionSlice";
import lotsLeaderChangeAddTimeMiddleware from "./middlewares/lotsLeaderChangeAddTimeMiddleware";
import newLotAddTimeMiddleware from "./middlewares/newLotAddTimeMiddleware";
import newDonationAddTimeMiddleware from "./middlewares/newDonationAddTimeMiddleware";
import calculateLotsProbabilityMiddleware from "./middlewares/calculateLotsProbabilityMiddleware";
import newDonationUpdateLotMiddleware from "./middlewares/newDonationUpdateLotMiddleware";

export const rootReducer = combineReducers({
	snackBarState: snackBarSlice.reducer,
	mainState: mainSlice.reducer,
	mediaState: mediaSlice.reducer,
	alertsState: alertsSlice.reducer,
	settingsState: settingsSlice.reducer,
	lotsState: lotsSlice.reducer,
	auctionState: auctionSlice.reducer,
	auctionTimerState: auctionTimerSlice.reducer,
	auctionMessagesState: auctionMessagesSlice.reducer,
	[api.reducerPath]: api.reducer,
});

export const setupStore = (preloadedState?: Partial<AppState>) => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(api.middleware)
				.concat(lotsLeaderChangeAddTimeMiddleware)
				.concat(newLotAddTimeMiddleware)
				.concat(newDonationAddTimeMiddleware)
				.concat(calculateLotsProbabilityMiddleware)
				.concat(newDonationUpdateLotMiddleware),
		preloadedState,
		devTools: process.env.NODE_ENV !== "production",
	});
};

export const store = setupStore();
export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
