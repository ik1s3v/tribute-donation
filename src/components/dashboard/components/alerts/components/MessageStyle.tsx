import { useSelector } from "react-redux";
import { setMessageStyle } from "../../../../../store/slices/alertsSlice";
import TextStyle from "./TextStyle";
import type { AppState } from "../../../../../store";

const MessageStyle = () => {
	const alert = useSelector((state: AppState) => state.alertsState.alert);
	return (
		alert && (
			<TextStyle
				textStyle={alert.message_style}
				setTextStyle={setMessageStyle}
			/>
		)
	);
};
export default MessageStyle;
