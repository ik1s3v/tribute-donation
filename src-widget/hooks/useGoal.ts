import { useEffect, useState } from "react";
import { AppEvent, GoalType } from "../../shared/enums";
import useWebSocket from "../../shared/hooks/useWebSocket";
import type { IGoal } from "../../shared/types";
import { useGetNotEndedGoalQuery } from "../api/goalsApi";

const useGoal = () => {
	const websocketService = useWebSocket();
	const [goal, setGoal] = useState<IGoal>();
	const urlParams = new URLSearchParams(window.location.search);
	const type = urlParams.get("type") as GoalType;
	const { data } = useGetNotEndedGoalQuery({ type: type }, { skip: !type });

	useEffect(() => {
		if (data) {
			setGoal(data);
		}
	}, [data]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IGoal>(
			AppEvent.Goal,
			(goal) => {
				if (data && goal.id === data.id) {
					setGoal(goal);
				}
			},
		);

		return () => unsubscribe();
	}, [data]);

	return {
		goal,
	};
};
export default useGoal;
