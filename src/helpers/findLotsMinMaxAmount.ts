import type { ILot } from "../../shared/types";

const findLotsMinMaxAmount = (lots: ILot[]) => {
	const sorted = lots
		.slice()
		.filter((lot) => lot.amount)
		.sort((a, b) => (b.amount ?? 0) - (a.amount ?? 0));
	return { max: sorted.at(0), min: sorted.at(-1) };
};

export default findLotsMinMaxAmount;
