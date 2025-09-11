import { useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { setLimitsStyle } from "../../../../../store/slices/goalsSlice";
import TextStyle from "../../../../TextStyle";

const LimitsStyle = () => {
	const { goal } = useSelector((state: AppState) => state.goalsState);

	return (
		goal && (
			<TextStyle textStyle={goal.limits_style} setTextStyle={setLimitsStyle} />
		)
	);
};
export default LimitsStyle;
