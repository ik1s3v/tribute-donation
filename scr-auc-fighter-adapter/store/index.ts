import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fighterTimerSlice } from "../../shared/slices/timerSlice";
import { mainSlice } from "./slices/mainSlice";

export const rootReducer = combineReducers({
	mainState: mainSlice.reducer,
	fighterTimerState: fighterTimerSlice.reducer,
});

export const setupStore = (preloadedState?: Partial<AppState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		devTools: process.env.NODE_ENV !== "production",
	});
};

export const store = setupStore();
export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
