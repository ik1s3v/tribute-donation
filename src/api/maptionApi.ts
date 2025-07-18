import { api } from ".";
import type { IMaptionSettings } from "../../shared/types";

export const maptionApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getMaptionSettings: builder.query<IMaptionSettings, void>({
			query: () => ({
				command: "get_maption_settings",
			}),
		}),
		updateMaptionSettings: builder.mutation<
			void,
			{ maptionSettings: IMaptionSettings }
		>({
			query: (args) => ({
				command: "update_maption_settings",
				args,
			}),
		}),
	}),
});
export const { useGetMaptionSettingsQuery, useUpdateMaptionSettingsMutation } =
	maptionApi;
