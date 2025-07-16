import type { ILot } from "../../shared/types";

const lotsTotalAmount = (lots: ILot[]) => {
	return lots.reduce((a, v) => a + (v.amount ?? 0), 0);
};
export default lotsTotalAmount;
