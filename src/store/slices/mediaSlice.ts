import { createSlice } from "@reduxjs/toolkit";
import type {
	IMediaPlatformSettings,
	IMediaSettings,
} from "../../../shared/types";

interface MediaState {
	mediaSettings: IMediaSettings | null;
	playingMediaId: string;
	pausedMediaId: string;
}

const initialState: MediaState = {
	mediaSettings: null,
	playingMediaId: "",
	pausedMediaId: "",
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
		setPlayingMediaId: (
			state,
			action: {
				payload: string;
			},
		) => {
			state.playingMediaId = action.payload;
		},
		setPausedMediaId: (
			state,
			action: {
				payload: string;
			},
		) => {
			state.pausedMediaId = action.payload;
		},
	},
});

export const {
	setMediaSettings,
	setYoutubeSettings,
	setTwitchSettings,
	setTikTokSettings,
	setPlayingMediaId,
	setPausedMediaId,
} = mediaSlice.actions;
