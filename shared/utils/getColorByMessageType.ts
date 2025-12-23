import { MessageType } from "./../enums";

const getColorByMessageType = (type: MessageType) => {
	switch (type) {
		case MessageType.Donation:
			return "#ffca28";
		case MessageType.Subscription:
			return "#FF4500";
		case MessageType.Follow:
			return "#B2DFDB";
	}
};
export default getColorByMessageType;
