import DonationMessageTile from "../../shared/components/DonationMessageTile";
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

		default:
			return <div></div>;
	}
};
export default getMessageComponentByMessageType;
