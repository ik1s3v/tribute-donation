import { GoalProgressLayout } from "../../shared/enums";

const getProgressBarLayoutText = ({
	layout,
	currentAmount,
	amountRaise,
	currentAmountPercent,
}: {
	layout: GoalProgressLayout;
	currentAmount: number;
	amountRaise: number;
	currentAmountPercent: number;
}) => {
	switch (layout) {
		case GoalProgressLayout.Percent:
			return `${currentAmountPercent}%`;
		case GoalProgressLayout.CurrentAmount:
			return `${currentAmount}`;
		case GoalProgressLayout.CurrentAmountPercent:
			return `${currentAmount} (${currentAmountPercent}%)`;
		case GoalProgressLayout.CurrentAmountRemainingAmount:
			return `${currentAmount}/${amountRaise}`;
		case GoalProgressLayout.CurrentAmountRemainingAmountPercent:
			return `${currentAmount}/${amountRaise} (${currentAmountPercent}%)`;
	}
};
export default getProgressBarLayoutText;
