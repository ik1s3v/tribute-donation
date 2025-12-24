import { MessageType } from "../enums";

const getColorByMessageType = (type: MessageType) => {
	switch (type) {
		case MessageType.Donation:
			return "#ffca28";
		case MessageType.Subscription:
			return "#FF4500";
		case MessageType.Follow:
			return "#B2DFDB";
		case MessageType.Raid:
			return "#00ffbfff";
	}
};
export default getColorByMessageType;
