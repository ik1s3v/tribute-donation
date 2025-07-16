import type { IMessage } from "../../../../../../shared/types";
import dayjs from "../../../../../dayjs";

const MessageDate = ({ message }: { message: IMessage }) => {
	const date = dayjs(message.created_at * 1000);
	return (
		<>
			<span style={{ fontSize: 12 }}>{date.format("YYYY-MM-DD HH:mm:ss")}</span>
		</>
	);
};
export default MessageDate;
