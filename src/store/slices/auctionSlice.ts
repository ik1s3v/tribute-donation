import { createSlice } from "@reduxjs/toolkit";
import type { IAuctionSettings } from "../../../shared/types";

interface AuctionSettingsState {
	auctionSettings: IAuctionSettings | null;
	isShowTributeMessages: boolean;
}

const initialState: AuctionSettingsState = {
	auctionSettings: null,
	isShowTributeMessages: false,
};

export const auctionSlice = createSlice({
	name: "auction",
	initialState,
	reducers: {
		setAuctionSettings: (
			state,
			action: {
				payload: IAuctionSettings;
			},
		) => {
			state.auctionSettings = action.payload;
		},
		setIsShowTributeMessages: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isShowTributeMessages = action.payload;
		},
	},
});

export const { setAuctionSettings, setIsShowTributeMessages } =
	auctionSlice.actions;
