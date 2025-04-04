import { createSlice } from "@reduxjs/toolkit";
import type { IAlert, ITextStyle } from "../../../shared/types";
interface AlertsState {
	alerts: IAlert[];
	alert: IAlert | null;
	playingAlertId: string;
	connectedAlerts: string[];
}

const initialState: AlertsState = {
	alerts: [],
	alert: null,
	playingAlertId: "",
	connectedAlerts: [],
};

export const alertsSlice = createSlice({
	name: "alerts",
	initialState,
	reducers: {
		setAlerts: (
			state,
			action: {
				payload: IAlert[];
			},
		) => {
			state.alerts = action.payload;
		},
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
	setAlerts,
	setAlert,
	setTitleStyle,
	setMessageStyle,
	setPlayingAlertId,
	addConnectedAlert,
} = alertsSlice.actions;
