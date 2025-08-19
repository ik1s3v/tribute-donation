import { createSlice } from "@reduxjs/toolkit";
import { IAucFighterMatch, IAucFighterSettings } from "../../../shared/types";

interface MainState {
	isGameStarted: boolean;
	isNewRoundStart: boolean;
	isShowAnnouncer: boolean;
	isShowMatchWinner: boolean;
	winnerIndex: number | null;
	match: IAucFighterMatch | null;
	aucFighterSettings: IAucFighterSettings | null;
}

const initialState: MainState = {
	isGameStarted: false,
	isNewRoundStart: false,
	isShowAnnouncer: false,
	isShowMatchWinner: false,
	winnerIndex: null,
	match: null,
	aucFighterSettings: null,
};

export const mainSlice = createSlice({
	name: "main",
	initialState,
	reducers: {
		setAucFighterSettings: (
			state,
			action: {
				payload: IAucFighterSettings;
			},
		) => {
			state.aucFighterSettings = action.payload;
		},
		setIsShowMatchWinner: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isShowMatchWinner = action.payload;
		},
		setIsShowAnnouncer: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isShowAnnouncer = action.payload;
		},
		setAucFighterMatch: (
			state,
			action: {
				payload: IAucFighterMatch;
			},
		) => {
			state.match = action.payload;
		},
		updateAucFighterMatch: (
			state,
			action: {
				payload: IAucFighterMatch;
			},
		) => {
			state.match = action.payload;
		},
		setIsGameStarted: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isGameStarted = action.payload;
		},
		setWinnerIndex: (
			state,
			action: {
				payload: number;
			},
		) => {
			state.winnerIndex = action.payload;
		},
		setIsNewRoundStart: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isNewRoundStart = action.payload;
		},
	},
});

export const {
	setAucFighterSettings,
	setIsGameStarted,
	setIsNewRoundStart,
	setWinnerIndex,
	setAucFighterMatch,
	updateAucFighterMatch,
	setIsShowAnnouncer,
	setIsShowMatchWinner,
} = mainSlice.actions;
