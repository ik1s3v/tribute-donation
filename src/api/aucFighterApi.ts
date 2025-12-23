import type { IAucFighterSettings } from "../../shared/types";
import { api } from ".";

export const aucFighterApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAucFighterSettings: builder.query<IAucFighterSettings, void>({
			query: () => ({
				command: "get_auc_fighter_settings",
			}),
			providesTags: ["Auc-Filters"],
		}),
		updateAucFighterSettings: builder.mutation<
			void,
			{ aucFighterSettings: IAucFighterSettings }
		>({
			query: (args) => ({
				command: "update_auc_fighter_settings",
				args,
			}),
			invalidatesTags: ["Auc-Filters"],
		}),
	}),
});
export const {
	useGetAucFighterSettingsQuery,
	useUpdateAucFighterSettingsMutation,
} = aucFighterApi;
