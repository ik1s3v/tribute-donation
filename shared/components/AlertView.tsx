import { AlertType } from "../enums";
import type { IAlert, IClientMessage, IDonation } from "../types";
import DonationAlert from "./DonationAlert";

const AlertView = ({
	alert,
	message,
	imageSrc,
	width,
	height,
	backgroundColor,
}: {
	alert: IAlert;
	message: IClientMessage;
	imageSrc: string;
	width: number;
	height: number;
	backgroundColor?: string;
}) => {
	switch (alert.type) {
		case AlertType.Donation:
			return (
				<DonationAlert
					alert={alert}
					donation={message.donation as IDonation}
					imageSrc={imageSrc}
					width={width}
					height={height}
					backgroundColor={backgroundColor}
				/>
			);

		default:
			return <div></div>;
	}
};
export default AlertView;
