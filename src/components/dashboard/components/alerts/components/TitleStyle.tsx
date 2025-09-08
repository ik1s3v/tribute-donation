import { useSelector } from "react-redux";
import { setTitleStyle } from "../../../../../../shared/slices/alertsSlice";
import type { AppState } from "../../../../../store";
import TextStyle from "./TextStyle";

const TitleStyle = () => {
	const { alert } = useSelector((state: AppState) => state.alertsState);

	return (
		alert && (
			<TextStyle textStyle={alert.title_style} setTextStyle={setTitleStyle} />
		)
	);
};
export default TitleStyle;
