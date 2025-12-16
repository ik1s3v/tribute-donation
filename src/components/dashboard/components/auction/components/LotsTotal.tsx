import { useTranslation } from "react-i18next";
import type { ILot } from "../../../../../../shared/types";

const LotsTotal = ({ lots }: { lots: ILot[] }) => {
	const { t } = useTranslation();

	return (
		<>
			{t("lots.total")}:{" "}
			{lots.reduce((acc, lot) => acc + (lot.amount ?? 0), 0).toFixed(2)}
		</>
	);
};
export default LotsTotal;
