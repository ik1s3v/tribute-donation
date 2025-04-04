import { createSlice } from "@reduxjs/toolkit";
import { AlertSeverity } from "../../../shared/enums";

interface SnackBarState {
	isShowSnackBar: boolean;
	snackBarMessage: string;
	alertSeverity: AlertSeverity;
}
const initialState: SnackBarState = {
	isShowSnackBar: false,
	snackBarMessage: "",
	alertSeverity: AlertSeverity.info,
};
export const snackBarSlice = createSlice({
	name: "snackBar",
	initialState,
	reducers: {
		showSnackBar: (
			state,
			action: {
				payload: { message: string; alertSeverity: AlertSeverity };
			},
		) => {
			state.alertSeverity = action.payload.alertSeverity;
			state.isShowSnackBar = true;
			state.snackBarMessage = action.payload.message;
		},
		hideSnackBar: (state) => {
			state.isShowSnackBar = false;
		},
	},
});

export const { showSnackBar, hideSnackBar } = snackBarSlice.actions;
