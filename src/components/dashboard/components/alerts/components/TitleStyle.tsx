import { useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { setTitleStyle } from "../../../../../store/slices/alertsSlice";
import TextStyle from "./TextStyle";

const TitleStyle = () => {
	const alert = useSelector((state: AppState) => state.alertsState.alert);
	return (
		alert && (
			<TextStyle textStyle={alert.title_style} setTextStyle={setTitleStyle} />
		)
	);
};
export default TitleStyle;
