import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardContent, IconButton, TextField } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";
import type {
	ITwitchIntegrationReward,
	ITwitchIntegrationSettings,
} from "../../../../shared/types";
import ColorPicker from "../../ColorPicker";

const RewardCard = ({
	reward,
	setSettings,
}: {
	reward: ITwitchIntegrationReward;
	setSettings: Dispatch<SetStateAction<ITwitchIntegrationSettings | undefined>>;
}) => {
	const { t } = useTranslation();

	return (
		<Card>
			<CardContent>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignContent: "start",
					}}
				>
					<div>
						<div>
							<span>{t("twitch_service_settings.cost")}</span>
						</div>
						<NumericFormat
							style={{ width: 100 }}
							inputMode="decimal"
							autoComplete="off"
							allowNegative={false}
							valueIsNumericString
							decimalScale={0}
							min={1}
							customInput={TextField}
							isAllowed={({ floatValue }) =>
								floatValue === undefined || floatValue !== 0
							}
							onValueChange={(e) => {
								setSettings((prevSettings) => {
									if (prevSettings) {
										const rewards = prevSettings.rewards.map((prevReward) => {
											if (prevReward.id === reward.id) {
												return { ...prevReward, cost: Number(e.floatValue) };
											}
											return prevReward;
										});

										return {
											...prevSettings,
											rewards,
										};
									}
								});
							}}
							value={reward.cost}
						/>
					</div>

					<div>
						<div>
							<span>{t("twitch_service_settings.color")}</span>
						</div>
						<ColorPicker
							initialColor={reward.color}
							onChange={(value) => {
								setSettings((prevSettings) => {
									if (prevSettings) {
										return {
											...prevSettings,
											rewards: prevSettings.rewards.map((prevReward) => {
												if (prevReward.id === reward.id) {
													return { ...prevReward, color: value };
												}
												return prevReward;
											}),
										};
									}
								});
							}}
						></ColorPicker>
					</div>
					<div style={{ display: "grid", placeContent: "center" }}>
						<IconButton
							onClick={() => {
								setSettings((prevSettings) => {
									if (prevSettings) {
										if (prevSettings.rewards.length === 1) return prevSettings;

										return {
											...prevSettings,
											rewards: prevSettings.rewards.filter(
												(prevReward) => prevReward.id !== reward.id,
											),
										};
									}
								});
							}}
						>
							<DeleteIcon />
						</IconButton>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
export default RewardCard;
