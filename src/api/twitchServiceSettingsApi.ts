import type { ISettings, ITwitchIntegrationSettings } from "../../shared/types";
import { api } from ".";

export const twitchServiceSettingsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		updateTwitchServiceSettings: builder.mutation<
			ISettings,
			{ settings: ITwitchIntegrationSettings }
		>({
			query: (args) => ({
				command: "update_twitch_service_settings",
				args,
			}),
		}),
	}),
});
export const { useUpdateTwitchServiceSettingsMutation } =
	twitchServiceSettingsApi;
