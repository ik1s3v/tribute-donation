import dayjs from "../dayjs";
import type { IMessage } from "../types";

const MessageDate = ({ message }: { message: IMessage }) => {
	const date = dayjs(message.created_at * 1000);
	return (
		<>
			<span style={{ fontSize: 12 }}>{date.format("YYYY-MM-DD HH:mm:ss")}</span>
		</>
	);
};
export default MessageDate;
