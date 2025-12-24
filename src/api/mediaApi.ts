import type { IMediaSettings } from "../../shared/types";
import { api } from ".";

export const mediaApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getMediaSettings: builder.query<IMediaSettings, void>({
			query: () => ({
				command: "get_media_settings",
			}),
			providesTags: ["Media-Settings"],
		}),
		updateMediaSettings: builder.mutation<
			void,
			{ mediaSettings: IMediaSettings }
		>({
			query: (args) => ({
				command: "update_media_settings",
				args,
			}),
			invalidatesTags: ["Media-Settings"],
		}),
	}),
});
export const { useGetMediaSettingsQuery, useUpdateMediaSettingsMutation } =
	mediaApi;
