import type { IMediaSettings } from "../../shared/types";
import { api } from ".";

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
	}),
});
export const { useGetMediaSettingsQuery, useUpdateMediaSettingsMutation } =
	mediaApi;
