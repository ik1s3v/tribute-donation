import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_TIMER_DURATION } from "../../constants";

interface TimerState {
	time: number;
	currentIntervalId: NodeJS.Timeout | undefined;
	isStopped: boolean;
}

const initialState: TimerState = {
	time: DEFAULT_TIMER_DURATION,
	currentIntervalId: undefined,
	isStopped: true,
};

export const createTimerSlice = (name: string) =>
	createSlice({
		name,
		initialState,
		reducers: {
			setIsStopped: (
				state,
				action: {
					payload: boolean;
				},
			) => {
				state.isStopped = action.payload;
			},

			setTime: (
				state,
				action: {
					payload: number;
				},
			) => {
				state.time = action.payload;
			},
			addTime: (
				state,
				action: {
					payload: number;
				},
			) => {
				state.time = state.time + action.payload;
			},
			subtractTime: (
				state,
				action: {
					payload: number;
				},
			) => {
				const time = state.time - action.payload;
				if (time >= 0) {
					state.time = time;
				} else {
					state.time = 0;
					state.isStopped = true;
					clearInterval(state.currentIntervalId);
				}
			},
			setCurrentIntervalId: (
				state,
				action: {
					payload: NodeJS.Timeout;
				},
			) => {
				state.currentIntervalId = action.payload;
			},
		},
	});

export const auctionTimerSlice = createTimerSlice("auction-timer");

export const maptionTimerSlice = createTimerSlice("maption-timer");

export type TimerSlice = ReturnType<typeof createTimerSlice>;
