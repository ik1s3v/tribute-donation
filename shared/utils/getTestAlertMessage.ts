import {
	AlertVariationConditions,
	Currency,
	MessageType,
	ServiceType,
} from "../enums";
import { IAlert, IClientMessage } from "../types";

const getTestAlertMessage = ({
	alert,
	userName,
	text,
	type,
}: {
	alert: IAlert | null | undefined;
	userName: string;
	text: string;
	type: MessageType;
}) => {
	if (!alert) return;
	const messageId = crypto.randomUUID();
	const testMessage: IClientMessage = {
		id: messageId,
		type,
		created_at: Math.round(new Date().getTime() / 1000),
		donation: {
			service_id: crypto.randomUUID(),
			amount:
				alert.variation_conditions === AlertVariationConditions.AmountIsEqual
					? alert.amount
					: alert.amount + 1,
			user_name: userName,
			played: false,
			text,
			currency: Currency.EUR,
			exchanged_amount: 1,
			exchanged_currency: Currency.EUR,
			created_at: Math.round(new Date().getTime() / 1000),
			service: ServiceType.TributeBot,
			id: crypto.randomUUID(),
			message_id: messageId,
		},
		follow: {
			user_name: userName,
			id: crypto.randomUUID(),
			service_id: crypto.randomUUID(),
			message_id: messageId,
			service: ServiceType.Twitch,
			played: false,
			followed_at: Math.round(new Date().getTime() / 1000),
			user_id: "1",
		},
		subscription: {
			id: crypto.randomUUID(),
			service_id: crypto.randomUUID(),
			user_name: userName,
			user_id: "1",
			message_id: messageId,
			played: false,
			is_gift: false,
			is_anonymous: false,
			service: ServiceType.Twitch,
			tier: "1000",
			cumulative_total: 1,
			total: 1,
			subscribed_at: Math.round(new Date().getTime() / 1000),
		},
	};
	return testMessage;
};
export default getTestAlertMessage;
