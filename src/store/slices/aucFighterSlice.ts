import { createSlice } from "@reduxjs/toolkit";
import {
	IAucFighterGame,
	IAucFighterMatch,
	IAucFighterSettings,
	IAucFighterTeam,
} from "../../../shared/types";

interface AucFighterState {
	game: IAucFighterGame | null;
	playingMatchId: string;
	pausedMatchId: string;
	isGameStarted: boolean;
	gameWinner: IAucFighterTeam | null;
	aucFighterSettings: IAucFighterSettings | null;
}

const initialState: AucFighterState = {
	game: null,
	playingMatchId: "",
	pausedMatchId: "",
	isGameStarted: false,
	gameWinner: null,
	aucFighterSettings: null,
};

export const aucFighterSlice = createSlice({
	name: "fighter",
	initialState,
	reducers: {
		setAucFighterGame: (
			state,
			action: {
				payload: IAucFighterGame | null;
			},
		) => {
			state.game = action.payload;
		},
		setAucFighterSettings: (
			state,
			action: {
				payload: IAucFighterSettings;
			},
		) => {
			state.aucFighterSettings = action.payload;
		},
		setIsGameStarted: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isGameStarted = action.payload;
		},
		setGameWinner: (
			state,
			action: {
				payload: IAucFighterTeam | null;
			},
		) => {
			state.gameWinner = action.payload;
		},
		setPlayingMatchId: (
			state,
			action: {
				payload: string;
			},
		) => {
			state.playingMatchId = action.payload;
		},
		setPausedMatchId: (
			state,
			action: {
				payload: string;
			},
		) => {
			state.pausedMatchId = action.payload;
		},
		updateMatch: (
			state,
			action: {
				payload: IAucFighterMatch;
			},
		) => {
			if (state.game) {
				state.game.matches = state.game.matches.map((match) => {
					if (match.id === action.payload.id) {
						return action.payload;
					}
					return match;
				});
			}
		},
		updateMatches: (
			state,
			action: {
				payload: IAucFighterMatch[];
			},
		) => {
			if (state.game) {
				state.game.matches = action.payload;
			}
		},
	},
});

export const {
	setAucFighterGame,
	setPlayingMatchId,
	setPausedMatchId,
	updateMatch,
	setAucFighterSettings,
	updateMatches,
	setIsGameStarted,
	setGameWinner,
} = aucFighterSlice.actions;
