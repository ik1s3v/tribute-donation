import { createSlice } from "@reduxjs/toolkit";
import { IGoal, ITextStyle } from "../../../shared/types";

interface GoalsState {
	goal: IGoal | null;
}

const initialState: GoalsState = {
	goal: null,
};

export const goalsSlice = createSlice({
	name: "goals",
	initialState,
	reducers: {
		setGoal: (
			state,
			action: {
				payload: IGoal;
			},
		) => {
			state.goal = action.payload;
		},
		setTitleStyle: (
			state,
			action: {
				payload: ITextStyle;
			},
		) => {
			if (state.goal) {
				state.goal.title_style = action.payload;
			}
		},
		setProgressStyle: (
			state,
			action: {
				payload: ITextStyle;
			},
		) => {
			if (state.goal) {
				state.goal.progress_style = action.payload;
			}
		},
		setLimitsStyle: (
			state,
			action: {
				payload: ITextStyle;
			},
		) => {
			if (state.goal) {
				state.goal.limits_style = action.payload;
			}
		},
	},
});

export const { setGoal, setTitleStyle, setProgressStyle, setLimitsStyle } =
	goalsSlice.actions;
