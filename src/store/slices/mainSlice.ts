import { createSlice } from "@reduxjs/toolkit";

interface MainState {
	appDataDir: string;
}

const initialState: MainState = {
	appDataDir: "string",
};

export const mainSlice = createSlice({
	name: "main",
	initialState,
	reducers: {
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

export const { setAppDataDir } = mainSlice.actions;
