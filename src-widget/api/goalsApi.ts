import { GoalType } from "../../shared/enums";
import type { IGoal } from "../../shared/types";
import { api } from ".";

export const goalsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getNotEndedGoal: builder.query<IGoal, { type: GoalType }>({
			query: (args) => ({
				params: { ...args },
				url: "/goals",
			}),
		}),
	}),
});
export const { useGetNotEndedGoalQuery } = goalsApi;
