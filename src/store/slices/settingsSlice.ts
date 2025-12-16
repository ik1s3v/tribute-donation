import { createSlice } from "@reduxjs/toolkit";
import type { ISettings } from "../../../shared/types";

interface SettingsState {
	duration: number;
	settings: ISettings | null;
}

const initialState: SettingsState = {
	duration: 0,
	settings: null,
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setSettings: (
			state,
			action: {
				payload: ISettings;
			},
		) => {
			state.settings = action.payload;
		},
		setDuration: (
			state,
			action: {
				payload: number;
			},
		) => {
			state.duration = action.payload;
		},
	},
});

export const { setSettings, setDuration } = settingsSlice.actions;
