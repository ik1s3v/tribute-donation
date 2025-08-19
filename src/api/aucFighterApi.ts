import type { IAucFighterMatch, IAucFighterSettings } from "../../shared/types";
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
		startAucFighterMatch: builder.mutation<void, { data: IAucFighterMatch }>({
			query: (args) => ({
				command: "start_auc_fighter_match",
				args,
			}),
		}),
		updateAucFighterMatch: builder.mutation<void, { data: IAucFighterMatch }>({
			query: (args) => ({
				command: "update_auc_fighter_match",
				args,
			}),
		}),
		cancelAucFighterMatch: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "cancel_auc_fighter_match",
				args,
			}),
		}),

		pauseAucFighterMatch: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "pause_auc_fighter_match",
				args,
			}),
		}),
		resumeAucFighterMatch: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "resume_auc_fighter_match",
				args,
			}),
		}),
	}),
});
export const {
	useStartAucFighterMatchMutation,
	usePauseAucFighterMatchMutation,
	useResumeAucFighterMatchMutation,
	useUpdateAucFighterMatchMutation,
	useCancelAucFighterMatchMutation,
	useGetAucFighterSettingsQuery,
	useUpdateAucFighterSettingsMutation,
} = aucFighterApi;
