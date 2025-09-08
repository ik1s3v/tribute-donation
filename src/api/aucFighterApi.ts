import type { IAucFighterSettings } from "../../shared/types";
import { api } from ".";

export const aucFighterApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAucFighterSettings: builder.query<IAucFighterSettings, void>({
			query: () => ({
				command: "get_auc_fighter_settings",
			}),
		}),
		updateAucFighterSettings: builder.mutation<
			void,
			{ aucFighterSettings: IAucFighterSettings }
		>({
			query: (args) => ({
				command: "update_auc_fighter_settings",
				args,
			}),
		}),
	}),
});
export const {
	useGetAucFighterSettingsQuery,
	useUpdateAucFighterSettingsMutation,
} = aucFighterApi;
