import type { Action as UnknownAction, Middleware } from "@reduxjs/toolkit";
import type { AppState } from "..";
import { showSnackBar } from "../slices/snackBarSlice";
import { AlertSeverity } from "../../../shared/enums";
import { maptionMessagesSlice } from "../slices/messagesSlice";
import { down, left, right, up } from "../slices/maptionSlice";
import calculateMaptionDistance from "../../helpers/calculateMaptionDistance";

const newDonationUpdateMaptionPositionMiddleware: Middleware<
	unknown,
	AppState
> = (store) => (next) => (action) => {
	const appAction = action as UnknownAction;
	const result = next(action);
	const nextState = store.getState();
	const newMessage = nextState.maptionMessagesState.messages.at(-1);
	const { isPointSet, maptionSettings } = nextState.maptionState;
	const isStopped = nextState.maptionTimerState.isStopped;

	if (
		appAction.type === maptionMessagesSlice.actions.addMessage.type &&
		maptionSettings &&
		newMessage &&
		isPointSet &&
		!isStopped
	) {
		switch (newMessage.text?.toLowerCase()) {
			case "up":
				store.dispatch(
					up(
						calculateMaptionDistance({
							price_for_meter: maptionSettings.price_for_meter,
							amount: newMessage.amount,
						}),
					),
				);
				store.dispatch(
					showSnackBar({
						message: `+${newMessage.amount}      Up`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				break;
			case "down":
				store.dispatch(
					down(
						calculateMaptionDistance({
							price_for_meter: maptionSettings.price_for_meter,
							amount: newMessage.amount,
						}),
					),
				);
				store.dispatch(
					showSnackBar({
						message: `+${newMessage.amount}      Down`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				break;
			case "left":
				store.dispatch(
					left(
						calculateMaptionDistance({
							price_for_meter: maptionSettings.price_for_meter,
							amount: newMessage.amount,
						}),
					),
				);
				store.dispatch(
					showSnackBar({
						message: `+${newMessage.amount}      Left`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				break;
			case "right":
				store.dispatch(
					right(
						calculateMaptionDistance({
							price_for_meter: maptionSettings.price_for_meter,
							amount: newMessage.amount,
						}),
					),
				);
				store.dispatch(
					showSnackBar({
						message: `+${newMessage.amount}      Right`,
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
