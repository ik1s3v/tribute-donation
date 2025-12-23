import type { IMaptionSettings } from "../../shared/types";
import { api } from ".";

export const maptionApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getMaptionSettings: builder.query<IMaptionSettings, void>({
			query: () => ({
				command: "get_maption_settings",
			}),
			providesTags: ["Maption-Settings"],
		}),
		updateMaptionSettings: builder.mutation<
			void,
			{ maptionSettings: IMaptionSettings }
		>({
			query: (args) => ({
				command: "update_maption_settings",
				args,
			}),
			invalidatesTags: ["Maption-Settings"],
		}),
	}),
});
export const { useGetMaptionSettingsQuery, useUpdateMaptionSettingsMutation } =
	maptionApi;
