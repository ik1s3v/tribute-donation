import { useEffect, useState } from "react";
import { AppEvent } from "../../shared/enums";
import useWebSocket from "../../shared/hooks/useWebSocket";
import type { IGoal } from "../../shared/types";

const useGoal = () => {
	const websocketService = useWebSocket();
	const [goal, setGoal] = useState<IGoal>();

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IGoal>(
			AppEvent.Goal,
			(goal) => setGoal(goal),
		);

		return () => unsubscribe();
	}, []);

	return {
		goal,
	};
};
export default useGoal;
