import type { InvokeArgs } from "@tauri-apps/api/core";
import { api } from ".";
import type { ISettings } from "../../shared/types";

export type UpdateSettingsArgs = InvokeArgs & { settings: ISettings };

export const settingsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getSettings: builder.query<ISettings, void>({
			query: () => ({
				command: "get_settings",
			}),
		}),
		updateSettings: builder.mutation<void, UpdateSettingsArgs>({
			query: (args) => ({
				command: "update_settings",
				args,
			}),
		}),
	}),
});
export const { useGetSettingsQuery, useUpdateSettingsMutation } = settingsApi;
