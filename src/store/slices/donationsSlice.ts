import { createSlice } from "@reduxjs/toolkit";
import type { IDonation } from "../../../shared/types";

interface DonationsState {
	donations: IDonation[];
}

const initialState: DonationsState = {
	donations: [],
};

const createDonationsSlice = (name: string) =>
	createSlice({
		name,
		initialState,
		reducers: {
			addDonation: (
				state,
				action: {
					payload: IDonation;
				},
			) => {
				state.donations.push(action.payload);
			},
			removeDonation: (
				state,
				action: {
					payload: IDonation;
				},
			) => {
				state.donations = state.donations.filter(
					(donation) => donation.id !== action.payload.id,
				);
			},
			setDonations: (
				state,
				action: {
					payload: IDonation[];
				},
			) => {
				state.donations = action.payload;
			},
		},
	});

export const auctionDonationsSlice = createDonationsSlice("auction-donations");

export const maptionDonationsSlice = createDonationsSlice("maption-donations");

export type DonationsSlice = ReturnType<typeof createDonationsSlice>;
