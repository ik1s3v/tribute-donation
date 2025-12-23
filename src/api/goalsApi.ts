import type { IGoal, IPageParm } from "../../shared/types";
import { api } from ".";

export const goalsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getGoals: builder.infiniteQuery<IGoal[], void, IPageParm>({
			infiniteQueryOptions: {
				initialPageParam: {
					offset: 0,
					limit: 100,
				},
				getNextPageParam: (
					lastPage,
					_allPages,
					lastPageParam,
					_allPageParams,
				) => {
					const nextOffset = lastPageParam.offset + lastPageParam.limit;

					if (lastPage?.length < lastPageParam.limit) {
						return undefined;
					}

					return {
						...lastPageParam,
						offset: nextOffset,
					};
				},
			},
			query: ({ pageParam }) => ({
				command: "get_goals",
				args: { ...pageParam },
			}),
			providesTags: ["Goals"],
		}),
		updateGoalSettings: builder.mutation<void, { goal: IGoal }>({
			query: (args) => ({
				command: "update_goal_settings",
				args,
			}),
			invalidatesTags: ["Goals"],
		}),
		createGoal: builder.mutation<void, { goal: IGoal }>({
			query: (args) => ({
				command: "create_goal",
				args,
			}),
			invalidatesTags: ["Goals"],
		}),
		getGoalById: builder.query<void, { id: string | undefined }>({
			query: (args) => ({
				command: "get_goal_by_id",
				args,
			}),
			providesTags: ["Goals"],
		}),
		getNotEndedGoal: builder.query<IGoal | null, void>({
			query: () => ({
				command: "get_not_ended_goal",
				args: undefined,
			}),
			providesTags: ["Goals"],
		}),
		finishGoal: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "finish_goal",
				args,
			}),
			invalidatesTags: ["Goals"],
		}),
	}),
});
export const {
	useCreateGoalMutation,
	useUpdateGoalSettingsMutation,
	useGetGoalsInfiniteQuery,
	useGetGoalByIdQuery,
	useGetNotEndedGoalQuery,
	useFinishGoalMutation,
} = goalsApi;
