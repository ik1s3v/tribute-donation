import type { IMessage } from "../../../../../../shared/types";
import { format } from "date-fns";

const MessageDate = ({ message }: { message: IMessage }) => {
	const date = format(
		new Date(message.created_at * 1000),
		"yyyy-MM-dd HH:mm:ss",
	);
	return (
		<>
			<span style={{ fontSize: 12 }}>{date}</span>
		</>
	);
};
export default MessageDate;
