import { useTranslation } from "react-i18next";
import { MessageType } from "../enums";
import type {
	IAlert,
	IClientMessage,
	IDonation,
	IFollow,
	IRaid,
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
					{t("message.donated", {
						user_name: donation.user_name,
						currency: getCurrencySymbol(donation.currency),
						amount: donation.amount,
					})}
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
					{t("message.followed", { user_name: follow.user_name })}
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
					{!subscription.is_gift
						? t("message.subscribed", { user_name: subscription.user_name })
						: t("message.gifted_subscriptions", {
								user_name: subscription.user_name,
								total: subscription.total,
							})}
				</Alert>
			);
		}
		case MessageType.Raid: {
			const raid = message.raid as IRaid;

			return (
				<Alert
					alert={alert}
					imageSrc={imageSrc}
					width={width}
					height={height}
					backgroundColor={backgroundColor}
				>
					{t("message.raided_with", {
						viewers: raid.viewers,
						user_name: raid.from_broadcaster_user_name,
					})}
				</Alert>
			);
		}

		default:
			return <div></div>;
	}
};
export default AlertView;
