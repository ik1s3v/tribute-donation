import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { alertsSlice } from "../../shared/slices/alertsSlice";
import { mediaSlice } from "../../shared/slices/mediaSlice";
import { servicesSlice } from "../../shared/slices/servicesSlice";
import { api } from "../api";

export const rootReducer = combineReducers({
	mediaState: mediaSlice.reducer,
	alertsState: alertsSlice.reducer,
	servicesState: servicesSlice.reducer,
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
