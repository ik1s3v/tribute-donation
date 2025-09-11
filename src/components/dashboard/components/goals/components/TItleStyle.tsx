import { useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { setTitleStyle } from "../../../../../store/slices/goalsSlice";
import TextStyle from "../../../../TextStyle";

const TItleStyle = () => {
	const { goal } = useSelector((state: AppState) => state.goalsState);

	return (
		goal && (
			<TextStyle textStyle={goal.title_style} setTextStyle={setTitleStyle} />
		)
	);
};
export default TItleStyle;
