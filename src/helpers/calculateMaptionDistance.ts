import { ONE_METER_IN_DEGREES } from "../constants";

const calculateMaptionDistance = ({
	price_for_meter,
	amount,
}: {
	price_for_meter: string | undefined;
	amount: number;
}) => {
	if (!price_for_meter) return 0;
	return (amount / Number(price_for_meter)) * ONE_METER_IN_DEGREES;
};
export default calculateMaptionDistance;
