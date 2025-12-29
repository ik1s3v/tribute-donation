import { Currency, GoalProgressLayout } from "../../shared/enums";

const getProgressBarLayoutText = ({
	layout,
	currentAmount,
	amountRaise,
	currentAmountPercent,
	currency,
}: {
	layout: GoalProgressLayout;
	currentAmount: number;
	amountRaise: number;
	currentAmountPercent: number;
	currency?: Currency;
}) => {
	switch (layout) {
		case GoalProgressLayout.Percent:
			return `${currentAmountPercent}%`;
		case GoalProgressLayout.CurrentAmount:
			return `${currentAmount} ${currency ?? ""}`;
		case GoalProgressLayout.CurrentAmountPercent:
			return `${currentAmount} ${currency ?? ""} (${currentAmountPercent}%)`;
		case GoalProgressLayout.CurrentAmountRemainingAmount:
			return `${currentAmount}/${amountRaise} ${currency ?? ""}`;
		case GoalProgressLayout.CurrentAmountRemainingAmountPercent:
			return `${currentAmount}/${amountRaise} ${currency ?? ""} (${currentAmountPercent}%)`;
	}
};
export default getProgressBarLayoutText;
