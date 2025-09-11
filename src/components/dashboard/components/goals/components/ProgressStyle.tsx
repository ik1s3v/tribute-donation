import { useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { setProgressStyle } from "../../../../../store/slices/goalsSlice";
import TextStyle from "../../../../TextStyle";

const ProgressStyle = () => {
	const { goal } = useSelector((state: AppState) => state.goalsState);

	return (
		goal && (
			<TextStyle
				textStyle={goal.progress_style}
				setTextStyle={setProgressStyle}
			/>
		)
	);
};
export default ProgressStyle;
