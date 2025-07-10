import { api } from ".";
import type { IMediaSettings, IMessage } from "../../shared/types";

export const mediaApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getMediaSettings: builder.query<IMediaSettings, void>({
			query: () => ({
				command: "get_media_settings",
			}),
		}),
		updateMediaSettings: builder.mutation<
			void,
			{ mediaSettings: IMediaSettings }
		>({
			query: (args) => ({
				command: "update_media_settings",
				args,
			}),
		}),
		replayMedia: builder.mutation<void, { message: IMessage }>({
			query: (args) => ({
				command: "replay_media",
				args,
			}),
		}),
		playMedia: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "play_media",
				args,
			}),
		}),
		pauseMedia: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "pause_media",
				args,
			}),
		}),
		skipMedia: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "skip_media",
				args,
			}),
		}),
	}),
});
export const {
	useGetMediaSettingsQuery,
	useUpdateMediaSettingsMutation,
	useReplayMediaMutation,
	usePauseMediaMutation,
	usePlayMediaMutation,
	useSkipMediaMutation,
} = mediaApi;
