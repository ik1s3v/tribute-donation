import { AlertVariationConditions } from "../../shared/enums";
import type { IAlert, IClientMessage } from "../../shared/types";

const getAlertByMessage = ({
	alerts,
	message,
}: {
	alerts: IAlert[];
	message: IClientMessage;
}): IAlert | undefined => {
	const urlParams = new URLSearchParams(window.location.search);
	const group_id = urlParams.get("group_id");
	const onAlerts = alerts.filter(
		(alert) => alert.status && alert.group_id === group_id,
	);
	const randomAlerts = onAlerts.filter(
		(alert) => alert.variation_conditions === AlertVariationConditions.Random,
	);
	const amount = message.donation?.amount;

	if (amount) {
		const greaterAlerts = onAlerts
			.filter(
				(alert) =>
					alert.variation_conditions ===
					AlertVariationConditions.AmountIsGreater,
			)
			.sort((a, b) => b.amount - a.amount);

		const equalAlerts = onAlerts.filter(
			(alert) =>
				alert.variation_conditions === AlertVariationConditions.AmountIsEqual,
		);
		const equalAlert = equalAlerts.find((alert) => alert.amount === amount);
		if (equalAlert) return equalAlert;
		const greaterAlert = greaterAlerts.find((alert) => alert.amount < amount);
		if (greaterAlert) return greaterAlert;
	}
	if (!randomAlerts.length) return;
	return randomAlerts[Math.floor(Math.random() * randomAlerts.length)];
};
export default getAlertByMessage;
