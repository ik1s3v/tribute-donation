import type {
	Middleware,
	SerializedError,
	UnknownAction,
} from "@reduxjs/toolkit";
import type { AppDispatch, AppState } from "..";
import { maptionSlice } from "../slices/maptionSlice";
import { maptionApi } from "../../api/maptionApi";
import { showSnackBar } from "../slices/snackBarSlice";
import { AlertSeverity } from "../../../shared/enums";

const updateMaptionSettingsMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const appAction = action as UnknownAction;
		const result = next(action);
		const nextState = store.getState();
		const maptionSettings = nextState.maptionState.maptionSettings;
		if (
			maptionSettings &&
			appAction.type === maptionSlice.actions.setMaptionSettings.type
		) {
			const result = (store.dispatch as AppDispatch)(
				maptionApi.endpoints.updateMaptionSettings.initiate({
					maptionSettings,
				}),
			);
			result.unwrap().catch((error) => {
				const err = error as SerializedError;
				store.dispatch(
					showSnackBar({
						message: err.message as string,
						alertSeverity: AlertSeverity.error,
					}),
				);
			});
		}

		return result;
	};

export default updateMaptionSettingsMiddleware;
