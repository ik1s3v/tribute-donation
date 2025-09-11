import { useSelector } from "react-redux";
import { setMessageStyle } from "../../../../../../shared/slices/alertsSlice";
import type { AppState } from "../../../../../store";
import TextStyle from "../../../../TextStyle";

const MessageStyle = () => {
	const { alert } = useSelector((state: AppState) => state.alertsState);

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
