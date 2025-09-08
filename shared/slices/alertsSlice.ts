import { createSlice } from "@reduxjs/toolkit";
import { IAlert, ITextStyle } from "../types";

interface AlertsState {
	alert: IAlert | null;
	playingAlertId: string;
	connectedAlerts: string[];
}

const initialState: AlertsState = {
	alert: null,
	playingAlertId: "",
	connectedAlerts: [],
};

export const alertsSlice = createSlice({
	name: "alerts",
	initialState,
	reducers: {
		addConnectedAlert: (
			state,
			action: {
				payload: string;
			},
		) => {
			if (!state.connectedAlerts.includes(action.payload)) {
				state.connectedAlerts.push(action.payload);
			}
		},
		setAlert: (
			state,
			action: {
				payload: IAlert;
			},
		) => {
			state.alert = action.payload;
		},
		setTitleStyle: (
			state,
			action: {
				payload: ITextStyle;
			},
		) => {
			if (state.alert) {
				state.alert.title_style = action.payload;
			}
		},
		setMessageStyle: (
			state,
			action: {
				payload: ITextStyle;
			},
		) => {
			if (state.alert) {
				state.alert.message_style = action.payload;
			}
		},
		setPlayingAlertId: (
			state,
			action: {
				payload: string;
			},
		) => {
			state.playingAlertId = action.payload;
		},
	},
});

export const {
	setAlert,
	setTitleStyle,
	setMessageStyle,
	setPlayingAlertId,
	addConnectedAlert,
} = alertsSlice.actions;
