import dayjs from "../dayjs";

const MessageDate = ({ createdAt }: { createdAt: number }) => {
	const date = dayjs(createdAt * 1000);
	return (
		<span style={{ fontSize: 12 }}>{date.format("YYYY-MM-DD HH:mm:ss")}</span>
	);
};
export default MessageDate;
