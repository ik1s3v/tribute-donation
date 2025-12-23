import type { ISettings } from "../../shared/types";
import { api } from ".";

export const settingsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getSettings: builder.query<ISettings, void>({
			query: () => ({
				command: "get_settings",
			}),
			providesTags: ["Settings"],
		}),
		updateSettings: builder.mutation<void, { settings: ISettings }>({
			query: (args) => ({
				command: "update_settings",
				args,
			}),
			invalidatesTags: ["Settings"],
		}),
	}),
});
export const { useGetSettingsQuery, useUpdateSettingsMutation } = settingsApi;
