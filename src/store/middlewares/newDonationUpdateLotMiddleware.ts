import type { Action as UnknownAction, Middleware } from "@reduxjs/toolkit";
import type { AppState } from "..";
import { auctionMessagesSlice } from "../slices/messagesSlice";
import { updateLot } from "../slices/lotsSlice";
import { showSnackBar } from "../slices/snackBarSlice";
import { AlertSeverity } from "../../../shared/enums";

const { removeMessage } = auctionMessagesSlice.actions;

const newDonationUpdateLotMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const appAction = action as UnknownAction;
		const result = next(action);
		const nextState = store.getState();
		const newMessage = nextState.auctionMessagesState.messages.at(-1);
		const lots = nextState.lotsState.lots;
		const isStopped = nextState.auctionTimerState.isStopped;

		if (
			appAction.type === auctionMessagesSlice.actions.addMessage.type &&
			newMessage &&
			!isStopped
		) {
			const fastId = Number(newMessage?.text?.split("#").at(1));
			const lot = lots.find((lot) => lot.fastId === fastId);
			if (lot) {
				store.dispatch(
					showSnackBar({
						message: `+${newMessage.amount}      #${fastId}`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				store.dispatch(
					updateLot({ ...lot, amount: (lot.amount ?? 0) + newMessage.amount }),
				);
				store.dispatch(removeMessage(newMessage));
			}
		}

		return result;
	};

export default newDonationUpdateLotMiddleware;
