import type { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import type { ILot } from "../../shared/types";
import { WheelVariant } from "../../shared/enums";

export type WheelDataWithFastId = WheelData & {
	fastId: number;
	name?: string;
	color: string;
};

const wheelDataFromLots = (
	lots: ILot[],
	wheelVariant: WheelVariant,
): WheelDataWithFastId[] => {
	if (!lots.length) {
		return [{ option: "", fastId: 0, color: "#ffff" }];
	}
	switch (wheelVariant) {
		case WheelVariant.normal:
			return lots.map((lot) => ({
				fastId: lot.fastId,
				optionSize: lot.normalOptionSize,
				name: lot.name,
				color: lot.color,
			}));

		case WheelVariant.dropout:
			return lots.map((lot) => ({
				fastId: lot.fastId,
				name: lot.name,
				optionSize: lot.eliminationOptionSize,
				color: lot.color,
			}));
	}
};
export default wheelDataFromLots;
