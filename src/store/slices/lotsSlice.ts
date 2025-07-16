import { createSlice } from "@reduxjs/toolkit";
import type { ILot } from "../../../shared/types";

interface LotsState {
	lots: ILot[];
	currentId: number;
	searchPattern: string;
}

const initialState: LotsState = {
	lots: [],
	currentId: 1,
	searchPattern: "",
};

export const lotsSlice = createSlice({
	name: "lots",
	initialState,
	reducers: {
		setSearchPattern: (
			state,
			action: {
				payload: string;
			},
		) => {
			state.searchPattern = action.payload;
		},

		addLot: (
			state,
			action: {
				payload: ILot;
			},
		) => {
			state.lots.push(action.payload);
			state.currentId++;
		},
		updateLot: (
			state,
			action: {
				payload: ILot;
			},
		) => {
			state.lots = state.lots.map((lot) => {
				if (lot.fastId === action.payload.fastId) {
					return action.payload;
				}
				return lot;
			});
		},
		removeLot: (
			state,
			action: {
				payload: ILot;
			},
		) => {
			state.lots = state.lots.filter(
				(lot) => lot.fastId !== action.payload.fastId,
			);
		},
		setLots: (
			state,
			action: {
				payload: ILot[];
			},
		) => {
			state.lots = action.payload;
		},
	},
});

export const { addLot, setSearchPattern, setLots, removeLot, updateLot } =
	lotsSlice.actions;
