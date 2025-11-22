import type { Middleware, Action as UnknownAction } from "@reduxjs/toolkit";
import { AlertSeverity } from "../../../shared/enums";
import { showSnackBar } from "../../../shared/slices/snackBarSlice";
import calculateMaptionDistance from "../../helpers/calculateMaptionDistance";
import type { AppState } from "..";
import { maptionDonationsSlice } from "../slices/donationsSlice.ts";
import { down, left, right, up } from "../slices/maptionSlice";

const newDonationUpdateMaptionPositionMiddleware: Middleware<
	unknown,
	AppState
> = (store) => (next) => (action) => {
	const appAction = action as UnknownAction;
	const result = next(action);
	const nextState = store.getState();
	const newDonation = nextState.maptionDonationsState.donations.at(-1);
	const { isPointSet, maptionSettings } = nextState.maptionState;
	const isStopped = nextState.maptionTimerState.isStopped;

	if (
		appAction.type === maptionDonationsSlice.actions.addDonation.type &&
		maptionSettings &&
		newDonation &&
		isPointSet &&
		!isStopped
	) {
		switch (newDonation.text?.toLowerCase()) {
			case "up":
				store.dispatch(
					up(
						calculateMaptionDistance({
							price_for_meter: maptionSettings.price_for_meter,
							amount: newDonation.amount,
						}),
					),
				);
				store.dispatch(
					showSnackBar({
						message: `+${newDonation.amount}      Up`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				break;
			case "down":
				store.dispatch(
					down(
						calculateMaptionDistance({
							price_for_meter: maptionSettings.price_for_meter,
							amount: newDonation.amount,
						}),
					),
				);
				store.dispatch(
					showSnackBar({
						message: `+${newDonation.amount}      Down`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				break;
			case "left":
				store.dispatch(
					left(
						calculateMaptionDistance({
							price_for_meter: maptionSettings.price_for_meter,
							amount: newDonation.amount,
						}),
					),
				);
				store.dispatch(
					showSnackBar({
						message: `+${newDonation.amount}      Left`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				break;
			case "right":
				store.dispatch(
					right(
						calculateMaptionDistance({
							price_for_meter: maptionSettings.price_for_meter,
							amount: newDonation.amount,
						}),
					),
				);
				store.dispatch(
					showSnackBar({
						message: `+${newDonation.amount}      Right`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				break;

			default:
				break;
		}
	}

	return result;
};

export default newDonationUpdateMaptionPositionMiddleware;
