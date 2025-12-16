import dayjs from "../../shared/dayjs";
import { Currency, ServiceType } from "../../shared/enums";
import {
	IDonation,
	ITwitchEventPayload,
	ITwitchRedemptionEvent,
} from "../../shared/types";

const twitchRedemptionToDonation = ({
	payload,
	currency,
	ratio,
}: {
	payload: ITwitchEventPayload<ITwitchRedemptionEvent>;
	currency: Currency;
	ratio: number;
}): IDonation => {
	const amount = payload.event.reward.cost * ratio;
	return {
		service_id: payload.event.id,
		amount: amount,
		user_name: payload.event.user_name,
		played: false,
		text: payload.event.reward.prompt,
		service: ServiceType.Twitch,
		currency: currency,
		exchanged_amount: amount,
		exchanged_currency: currency,
		created_at: dayjs(payload.subscription.created_at).unix(),
		id: crypto.randomUUID(),
		message_id: payload.subscription.id,
	};
};
export default twitchRedemptionToDonation;
