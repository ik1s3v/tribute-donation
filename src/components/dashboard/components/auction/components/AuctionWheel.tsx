import {
	Button,
	Card,
	styled,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";
import { memo, useCallback, useRef, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useTranslation } from "react-i18next";
import { WheelVariant } from "../../../../../../shared/enums";
import type { ILot } from "../../../../../../shared/types";
import getRandomWinnerIndex from "../../../../../../shared/utils/getRandomWinnerIndex";
import calculateLotProbability from "../../../../../helpers/calculateLotProbability";
import findLotsMinMaxAmount from "../../../../../helpers/findLotsMinMaxAmount";
import lotsTotalAmount from "../../../../../helpers/lotsTotalAmount";
import wheelDataFromLots, {
	type WheelDataWithFastId,
} from "../../../../../helpers/wheelDataFromLots";
import InputSlider from "../../../../InputSlider";
import AuctionWheelLots from "./AuctionWheelLots";

const WheelContainer = styled("div")({
	width: "65vh",
	height: "65vh",
	minHeight: 300,
	minWidth: 300,
	justifySelf: "center",
	"& > div": {
		height: "100%",
		width: "100%",
		maxHeight: "unset",
		maxWidth: "unset",
	},
});

const AuctionWheel = ({ lots }: { lots: ILot[] }) => {
	const { t } = useTranslation();
	const [wheelVariant, setWheelVariant] = useState(WheelVariant.normal);
	const dropoutLotsRef = useRef(lots);
	const [wheelData, setWheelData] = useState<WheelDataWithFastId[]>(
		wheelDataFromLots(lots, wheelVariant),
	);
	const [spinDuration, setSpinDuration] = useState(50);
	const [isSpinning, setIsSpinning] = useState(false);
	const [isShowWinner, setIsShowWinner] = useState(false);
	const [winnerIndex, setWinnerNumber] = useState(
		getRandomWinnerIndex(wheelData.map((data) => data.optionSize ?? 0)),
	);
	const [winner, setWinner] = useState(wheelData[winnerIndex]);

	const handleSpinClick = useCallback(() => {
		if (!isSpinning) {
			setIsShowWinner(false);
			const index = getRandomWinnerIndex(
				wheelData.map((data) => data.optionSize ?? 0),
			);
			setWinnerNumber(index);
			setWinner(wheelData[index]);
			setIsSpinning(true);
		}
	}, [isSpinning, wheelData]);

	return (
		<div
			style={{
				display: "grid",
				gap: 10,
				gridAutoFlow: "column",
				gridTemplateColumns: "1fr 1fr 1fr",
				justifyItems: "end",
				alignItems: "start",
			}}
		>
			<AuctionWheelLots
				lots={lots}
				wheelDataIds={wheelData.map((data) => data.fastId)}
			/>
			<div
				style={{
					position: "relative",
					display: "flex",
					placeItems: "center",
				}}
			>
				{isShowWinner && (
					<Card
						style={{
							display: "grid",
							placeItems: "center",
							gap: 5,
							position: "absolute",
							width: "65vh",
							height: 100,
							minWidth: 300,
							backgroundColor: lots[winnerIndex].color,
							zIndex: 6,
							fontSize: 30,
							overflow: "hidden",
							textShadow: "1px 1px 4px black",
						}}
					>
						<span>#{winner?.fastId}</span>
						<span>{winner?.name}</span>
					</Card>
				)}
				<WheelContainer>
					<Wheel
						mustStartSpinning={isSpinning}
						prizeNumber={winnerIndex}
						data={wheelData}
						spinDuration={spinDuration / 100}
						backgroundColors={wheelData.map((data) => data.color)}
						outerBorderColor="white"
						radiusLineColor="white"
						outerBorderWidth={3}
						radiusLineWidth={3}
						onStopSpinning={() => {
							setIsShowWinner(true);
							if (wheelVariant === WheelVariant.dropout) {
								if (dropoutLotsRef.current.length === 1) {
									setIsSpinning(false);
									return;
								}
								dropoutLotsRef.current = dropoutLotsRef.current.filter(
									(_, index) => index !== winnerIndex,
								);
								const totalAmount = lotsTotalAmount(dropoutLotsRef.current);
								const { max, min } = findLotsMinMaxAmount(
									dropoutLotsRef.current,
								);
								dropoutLotsRef.current = dropoutLotsRef.current.map((lot) => {
									return {
										...lot,
										...calculateLotProbability({
											amount: lot.amount,
											maxAmount: max?.amount,
											minAmount: min?.amount,
											totalAmount,
										}),
									};
								});
								setWheelData(
									wheelDataFromLots(dropoutLotsRef.current, wheelVariant),
								);
							}
							setIsSpinning(false);
						}}
					/>
				</WheelContainer>
			</div>

			<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
				<div style={{ display: "flex", gap: 40 }}>
					<Button
						variant="contained"
						onClick={handleSpinClick}
						disabled={!lots.length || isSpinning}
					>
						{t("wheel.spin")}
					</Button>
					<div>
						<div>
							<span>{t("wheel.speed")}:</span>
						</div>
						<InputSlider
							disabled={isSpinning}
							sliderValue={spinDuration}
							inputValue={spinDuration}
							onChange={(value) => {
								setSpinDuration(value);
							}}
							min={0}
							sliderMax={100}
							inputMax={100}
							adornmentText={"%"}
						/>
					</div>
				</div>
				<ToggleButtonGroup
					disabled={isSpinning}
					color="primary"
					value={wheelVariant}
					exclusive
					onChange={(_, value: null | WheelVariant) => {
						if (value) {
							setIsShowWinner(false);
							let newWheelData: WheelDataWithFastId[];
							if (value === WheelVariant.dropout) {
								newWheelData = wheelDataFromLots(dropoutLotsRef.current, value);
								setWheelData(newWheelData);
							} else {
								newWheelData = wheelDataFromLots(lots, value);
								setWheelData(newWheelData);
							}
							setWheelVariant(value);
							const index = getRandomWinnerIndex(
								newWheelData.map((data) => data.optionSize ?? 0),
							);
							setWinner(newWheelData[index]);
							setWinnerNumber(index);
						}
					}}
				>
					<ToggleButton value={WheelVariant.normal}>
						{t("wheel.normal")}
					</ToggleButton>
					<ToggleButton value={WheelVariant.dropout}>
						{t("wheel.dropout")}
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</div>
	);
};
export default memo(AuctionWheel);
