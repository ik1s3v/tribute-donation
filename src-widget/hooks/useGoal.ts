import { useEffect, useState } from "react";
import { AppEvent } from "../../shared/enums";
import useWebSocket from "../../shared/hooks/useWebSocket";
import type { IGoal, IMessage } from "../../shared/types";

const useGoal = () => {
	const websocketService = useWebSocket();
	const [goal, setGoal] = useState<IGoal>();

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IMessage>(
			AppEvent.Message,
			(message) => {
				setGoal((goal) => {
					if (!goal) return;
					return {
						...goal,
						current_amount: goal.current_amount + message.amount,
					};
				});
			},
		);

		return () => unsubscribe();
	}, []);

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
