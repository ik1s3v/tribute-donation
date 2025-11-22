import dayjs from "../dayjs";
import type { IClientDonation } from "../types";

const MessageDate = ({ donation }: { donation: IClientDonation }) => {
	const date = dayjs(donation.created_at * 1000);
	return (
		<span style={{ fontSize: 12 }}>{date.format("YYYY-MM-DD HH:mm:ss")}</span>
	);
};
export default MessageDate;
