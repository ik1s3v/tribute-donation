import { createSlice } from "@reduxjs/toolkit";

interface MainState {
	isClientAuthorized: boolean;
	isInit: boolean;
	appDataDir: string;
}

const initialState: MainState = {
	isClientAuthorized: false,
	isInit: false,
	appDataDir: "string",
};

export const mainSlice = createSlice({
	name: "main",
	initialState,
	reducers: {
		setIsClientAuthorized: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isClientAuthorized = action.payload;
		},
		setIsInit: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isInit = action.payload;
		},
		setAppDataDir: (
			state,
			action: {
				payload: string;
			},
		) => {
			state.appDataDir = action.payload;
		},
	},
});

export const { setIsClientAuthorized, setIsInit, setAppDataDir } =
	mainSlice.actions;
