import { createSlice } from "@reduxjs/toolkit";
import type { IMaptionSettings } from "../../../shared/types";

const startPosition = {
	lat: 0,
	lng: 0,
};

interface MaptionState {
	amount: number;

	currentPosition: google.maps.LatLngLiteral;
	startPosition: google.maps.LatLngLiteral;
	currentPath: google.maps.LatLngLiteral[];
	isPointSet: boolean;
	maptionSettings: IMaptionSettings | null;
}

const initialState: MaptionState = {
	amount: 100,
	currentPath: [startPosition],
	currentPosition: startPosition,
	startPosition,
	isPointSet: false,
	maptionSettings: null,
};

export const maptionSlice = createSlice({
	name: "maption",
	initialState,
	reducers: {
		setMaptionSettings: (
			state,
			action: {
				payload: IMaptionSettings;
			},
		) => {
			if (!state.maptionSettings) {
				state.startPosition = {
					lat: Number(action.payload.latitude),
					lng: Number(action.payload.longitude),
				};
			}
			state.maptionSettings = action.payload;
		},
		setAmount: (
			state,
			action: {
				payload: number;
			},
		) => {
			state.amount = action.payload;
		},
		setPoint: (state) => {
			if (!state.maptionSettings) return;
			const newPosition = {
				lat: Number(state.maptionSettings.latitude),
				lng: Number(state.maptionSettings.longitude),
			};
			state.currentPosition = newPosition;
			state.startPosition = newPosition;
			state.currentPath = [newPosition];
			state.isPointSet = true;
		},
		up: (
			state,
			action: {
				payload: number;
			},
		) => {
			const newPosition = { ...state.currentPosition };
			newPosition.lat += action.payload;
			state.currentPosition = newPosition;
			state.currentPath.push(newPosition);
		},
		down: (
			state,
			action: {
				payload: number;
			},
		) => {
			const newPosition = { ...state.currentPosition };
			newPosition.lat -= action.payload;
			state.currentPosition = newPosition;
			state.currentPath.push(newPosition);
		},
		left: (
			state,
			action: {
				payload: number;
			},
		) => {
			const newPosition = { ...state.currentPosition };
			newPosition.lng -= action.payload;
			state.currentPosition = newPosition;
			state.currentPath.push(newPosition);
		},
		right: (
			state,
			action: {
				payload: number;
			},
		) => {
			const newPosition = { ...state.currentPosition };
			newPosition.lng += action.payload;
			state.currentPosition = newPosition;
			state.currentPath.push(newPosition);
		},
		undoLastStep: (state) => {
			if (state.currentPath.length > 1) {
				state.currentPath.pop();
				state.currentPosition = state.currentPath[state.currentPath.length - 1];
			}
		},
	},
});

export const {
	setMaptionSettings,
	up,
	down,
	left,
	right,
	undoLastStep,
	setPoint,
	setAmount,
} = maptionSlice.actions;
