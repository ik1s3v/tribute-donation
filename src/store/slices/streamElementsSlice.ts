import { createSlice } from "@reduxjs/toolkit";

interface StreamElementsState {
	isConnected: boolean;
	isAuthenticated: boolean;
}

const initialState: StreamElementsState = {
	isConnected: false,
	isAuthenticated: false,
};

export const streamElementsSlice = createSlice({
	name: "streamElements",
	initialState,
	reducers: {
		setIsConnected: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isConnected = action.payload;
		},
		setIsAuthenticated: (
			state,
			action: {
				payload: boolean;
			},
		) => {
			state.isAuthenticated = action.payload;
		},
	},
});

export const { setIsConnected, setIsAuthenticated } =
	streamElementsSlice.actions;
