import type { Middleware, Action as UnknownAction } from "@reduxjs/toolkit";
import { AlertSeverity } from "../../../shared/enums";
import { showSnackBar } from "../../../shared/slices/snackBarSlice";
import type { AppState } from "..";
import { auctionDonationsSlice } from "../slices/donationsSlice.ts";
import { updateLot } from "../slices/lotsSlice";

const { removeDonation } = auctionDonationsSlice.actions;

const newDonationUpdateLotMiddleware: Middleware<unknown, AppState> =
	(store) => (next) => (action) => {
		const appAction = action as UnknownAction;
		const result = next(action);
		const nextState = store.getState();
		const newDonation = nextState.auctionDonationsState.donations.at(-1);
		const lots = nextState.lotsState.lots;
		const isStopped = nextState.auctionTimerState.isStopped;

		if (
			appAction.type === auctionDonationsSlice.actions.addDonation.type &&
			newDonation &&
			!isStopped
		) {
			const fastId = Number(newDonation?.text?.split("#").at(1));
			const lot = lots.find((lot) => lot.fastId === fastId);
			if (lot) {
				store.dispatch(
					showSnackBar({
						message: `+${newDonation.amount}      #${fastId}`,
						alertSeverity: AlertSeverity.success,
					}),
				);
				store.dispatch(
					updateLot({ ...lot, amount: (lot.amount ?? 0) + newDonation.amount }),
				);
				store.dispatch(removeDonation(newDonation));
			}
		}

		return result;
	};

export default newDonationUpdateLotMiddleware;
