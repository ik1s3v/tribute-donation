import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { snackBarSlice } from "./slices/snackBarSlice";
import { mainSlice } from "./slices/mainSlice";
import { api } from "../api";
import { alertsSlice } from "./slices/alertsSlice";
import { settingsSlice } from "./slices/settingsSlice";

export const rootReducer = combineReducers({
	snackBarState: snackBarSlice.reducer,
	mainState: mainSlice.reducer,
	alertsState: alertsSlice.reducer,
	settingsState: settingsSlice.reducer,
	[api.reducerPath]: api.reducer,
});

export const setupStore = (preloadedState?: Partial<AppState>) => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(api.middleware),
		preloadedState,
		devTools: process.env.NODE_ENV !== "production",
	});
};

export const store = setupStore();
export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
