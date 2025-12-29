import GoalView from "../../../shared/components/GoalView";
import useGoal from "../../hooks/useGoal";

const Goal = () => {
	const { goal, settings } = useGoal();
	return (
		goal && (
			<GoalView
				goal={goal}
				width={window.innerWidth}
				height={window.innerHeight}
				currentAmount={goal.current_amount + goal.start_raising}
				currency={settings?.currency}
			/>
		)
	);
};
export default Goal;
