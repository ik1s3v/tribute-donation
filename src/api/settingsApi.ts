import { api } from ".";
import type { ISettings } from "../../shared/types";

export const settingsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getSettings: builder.query<ISettings, void>({
			query: () => ({
				command: "get_settings",
			}),
		}),
		updateSettings: builder.mutation<void, { settings: ISettings }>({
			query: (args) => ({
				command: "update_settings",
				args,
			}),
		}),
	}),
});
export const { useGetSettingsQuery, useUpdateSettingsMutation } = settingsApi;
