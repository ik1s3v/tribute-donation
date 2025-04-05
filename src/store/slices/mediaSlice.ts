import { createSlice } from "@reduxjs/toolkit";
import type {
	IMediaPlatformSettings,
	IMediaSettings,
} from "../../../shared/types";
interface MediaState {
	mediaSettings: IMediaSettings | null;
}

const initialState: MediaState = {
	mediaSettings: null,
};

export const mediaSlice = createSlice({
	name: "media",
	initialState,
	reducers: {
		setMediaSettings: (
			state,
			action: {
				payload: IMediaSettings;
			},
		) => {
			state.mediaSettings = action.payload;
		},
		setYoutubeSettings: (
			state,
			action: {
				payload: IMediaPlatformSettings;
			},
		) => {
			if (state.mediaSettings) {
				state.mediaSettings.youtube = action.payload;
			}
		},
		setTwitchSettings: (
			state,
			action: {
				payload: IMediaPlatformSettings;
			},
		) => {
			if (state.mediaSettings) {
				state.mediaSettings.twitch = action.payload;
			}
		},
		setTikTokSettings: (
			state,
			action: {
				payload: IMediaPlatformSettings;
			},
		) => {
			if (state.mediaSettings) {
				state.mediaSettings.tiktok = action.payload;
			}
		},
	},
});

export const {
	setMediaSettings,
	setYoutubeSettings,
	setTwitchSettings,
	setTikTokSettings,
} = mediaSlice.actions;
