import { useTranslation } from "react-i18next";
import { MessageType } from "../enums";
import type {
	IAlert,
	IClientMessage,
	IDonation,
	IFollow,
	ISubscription,
} from "../types";
import getCurrencySymbol from "../utils/getCurrencySymbol";
import Alert from "./Alert";

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
	const { t } = useTranslation();

	switch (message.type) {
		case MessageType.Donation: {
			const donation = message.donation as IDonation;

			return (
				<Alert
					alert={alert}
					text={donation.text}
					imageSrc={imageSrc}
					width={width}
					height={height}
					backgroundColor={backgroundColor}
				>
					{donation.user_name} {t("message.donate")}{" "}
					{getCurrencySymbol(donation.currency)}
					{donation.amount}
				</Alert>
			);
		}
		case MessageType.Follow: {
			const follow = message.follow as IFollow;

			return (
				<Alert
					alert={alert}
					imageSrc={imageSrc}
					width={width}
					height={height}
					backgroundColor={backgroundColor}
				>
					{follow.user_name} {t("message.follow")}
				</Alert>
			);
		}
		case MessageType.Subscription: {
			const subscription = message.subscription as ISubscription;

			return (
				<Alert
					alert={alert}
					imageSrc={imageSrc}
					width={width}
					height={height}
					backgroundColor={backgroundColor}
				>
					{subscription.user_name} {t("message.subscription")}
				</Alert>
			);
		}

		default:
			return <div></div>;
	}
};
export default AlertView;
