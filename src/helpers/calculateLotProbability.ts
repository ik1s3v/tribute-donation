const calculateLotProbability = ({
	amount,
	totalAmount,
	maxAmount,
	minAmount,
}: {
	amount: number | undefined;
	totalAmount: number;
	maxAmount: number | undefined;
	minAmount: number | undefined;
}) => {
	const winProbability = !totalAmount ? 0 : (amount ?? 0) / totalAmount;
	const dropoutAmount = (maxAmount ?? 0) / (!amount ? 1 : amount);
	const maxDropoutAmount =
		(maxAmount ?? 0) / (!minAmount || minAmount === 0 ? 1 : minAmount);
	const dropoutRatio = 1 / maxDropoutAmount;
	const winChance = winProbability * 100;
	const winChancePercent = winChance.toFixed(1);
	const normalOptionSize = Math.round(winChance);
	const dropoutOptionSize = Math.round(dropoutRatio * dropoutAmount * 100);

	return {
		dropoutAmount,
		winChancePercent,
		normalOptionSize,
		dropoutOptionSize,
	};
};
export default calculateLotProbability;
