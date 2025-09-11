import GoalView from "../../../shared/components/GoalView";
import useGoal from "../../hooks/useGoal";

const Goal = () => {
	const { goal } = useGoal();
	return (
		goal && (
			<GoalView
				goal={goal}
				width={window.innerWidth}
				height={window.innerHeight}
				currentAmount={goal.current_amount + goal.start_raising}
			/>
		)
	);
};
export default Goal;
