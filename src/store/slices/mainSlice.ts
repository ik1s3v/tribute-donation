import { createSlice } from "@reduxjs/toolkit";
import generateUniqueColors from "../../helpers/generateUniqueColors";

interface MainState {
	appDataDir: string;
	colors: string[];
}

const initialState: MainState = {
	appDataDir: "string",
	colors: generateUniqueColors(10000),
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
