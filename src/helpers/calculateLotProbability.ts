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
	const eliminationAmount = (maxAmount ?? 0) / (!amount ? 1 : amount);
	const maxEliminationAmount =
		(maxAmount ?? 0) / (!minAmount || minAmount === 0 ? 1 : minAmount);
	const eliminationRatio = 1 / maxEliminationAmount;
	const winChance = winProbability * 100;
	const winChancePercent = winChance.toFixed(1);
	const normalOptionSize = Math.round(winChance);
	const eliminationOptionSize = Math.round(
		eliminationRatio * eliminationAmount * 100,
	);

	return {
		eliminationAmount,
		winChancePercent,
		normalOptionSize,
		eliminationOptionSize,
	};
};
export default calculateLotProbability;
