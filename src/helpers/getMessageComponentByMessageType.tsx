import DonationMessageTile from "../../shared/components/DonationMessageTile";
import FollowMessageTile from "../../shared/components/FollowMessageTile";
import RaidMessageTile from "../../shared/components/RaidMessageTile";
import SubscriptionMessageTile from "../../shared/components/SubscriptionMessageTile";
import { MessageType } from "../../shared/enums";
import type { IClientMessage } from "../../shared/types";

const getMessageComponentByMessageType = ({
	message,
	isAlertPlaying,
	isMediaPlaying,
}: {
	message: IClientMessage;
	isAlertPlaying: boolean;
	isMediaPlaying: boolean;
}) => {
	switch (message.type) {
		case MessageType.Donation:
			return (
				<DonationMessageTile
					message={message}
					isAlertPlaying={isAlertPlaying}
					isMediaPlaying={isMediaPlaying}
				/>
			);
		case MessageType.Follow:
			return (
				<FollowMessageTile message={message} isAlertPlaying={isAlertPlaying} />
			);
		case MessageType.Subscription:
			return (
				<SubscriptionMessageTile
					message={message}
					isAlertPlaying={isAlertPlaying}
				/>
			);
		case MessageType.Raid:
			return (
				<RaidMessageTile message={message} isAlertPlaying={isAlertPlaying} />
			);

		default:
			return <div></div>;
	}
};
export default getMessageComponentByMessageType;
