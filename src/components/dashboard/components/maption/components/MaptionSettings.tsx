import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";
import Timer from "../../auction/components/Timer";
import { maptionTimerSlice } from "../../../../../store/slices/timerSlice";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import {
	down,
	left,
	right,
	setAmount,
	setMaptionSettings,
	setPoint,
	undoLastStep,
	up,
} from "../../../../../store/slices/maptionSlice";
import InputSwitch from "../../../../InputSwitch";
import OnOffSwitch from "../../../../OnOffSwitch";
import { useMemo, useState } from "react";
import calculateMaptionDistance from "../../../../../helpers/calculateMaptionDistance";
import isValidLatitude from "../../../../../helpers/isValidLatitude";
import isValidLongitude from "../../../../../helpers/isValidLongitude";

const MaptionSettings = () => {
	const [latError, setLatError] = useState(false);
	const [lngError, setLngError] = useState(false);
	const { t } = useTranslation();
	const { maptionSettings, amount } = useSelector(
		(state: AppState) => state.maptionState,
	);
	const dispatch = useDispatch();
	const distance = useMemo(
		() =>
			calculateMaptionDistance({
				price_for_meter: maptionSettings?.price_for_meter,
				amount,
			}),
		[maptionSettings?.price_for_meter, amount],
	);

	const handleLatChange = (value: number | undefined) => {
		if (!maptionSettings) return;
		if (isValidLatitude(value)) {
			setLatError(false);
			dispatch(
				setMaptionSettings({
					...maptionSettings,
					latitude: String(value),
				}),
			);
			return;
		}
		setLatError(true);
	};

	const handleLngChange = (value: number | undefined) => {
		if (!maptionSettings) return;
		if (isValidLongitude(value)) {
			setLngError(false);
			dispatch(
				setMaptionSettings({
					...maptionSettings,
					longitude: String(value),
				}),
			);
			return;
		}
		setLngError(true);
	};

	return (
		<>
			{maptionSettings && (
				<div
					style={{
						display: "grid",
						placeContent: "center",
						right: 0,
						padding: 10,
						width: 350,
						zIndex: 444,
						position: "absolute",
						height: "100%",
						background: "rgba(0, 0, 0, 0.15)",
						backdropFilter: "blur(10px)",
						borderRadius: 20,
						border: "1px solid hsla(0, 0%, 100%, 0.18)",
						boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
						overflow: "hidden",
					}}
				>
					<div style={{ display: "grid", gap: 10, placeItems: "center" }}>
						<div style={{ display: "flex", gap: 5 }}>
							<NumericFormat
								sx={{ width: 120 }}
								autoComplete="off"
								allowNegative
								value={maptionSettings.latitude}
								onValueChange={({ floatValue }) => {
									handleLatChange(floatValue);
								}}
								placeholder="40.712776"
								min={-90}
								max={90}
								decimalScale={6}
								customInput={TextField}
								error={latError}
								helperText={latError ? t("maption.lat_error") : ""}
							/>
							<NumericFormat
								sx={{ width: 120 }}
								autoComplete="off"
								allowNegative
								value={maptionSettings.longitude}
								onValueChange={({ floatValue }) => {
									handleLngChange(floatValue);
								}}
								placeholder="-74.005974"
								min={-180}
								max={180}
								decimalScale={6}
								customInput={TextField}
								error={lngError}
								helperText={lngError ? t("lng_error.lat_error") : ""}
							/>
						</div>
						<Button variant="contained" onClick={() => dispatch(setPoint())}>
							{t("maption.set_point")}
						</Button>
					</div>
					<Timer
						timerSlice={maptionTimerSlice}
						timerStateName={"maptionTimerState"}
						size={60}
						iconSize={35}
					/>

					<div>
						<div>
							<span>{t("auction_settings.new_donation")}:</span>
						</div>
						<InputSwitch
							checked={maptionSettings.is_new_donation_adding_time}
							onSwitchChange={() => {
								dispatch(
									setMaptionSettings({
										...maptionSettings,
										is_new_donation_adding_time:
											!maptionSettings.is_new_donation_adding_time,
									}),
								);
							}}
							onChange={(value) => {
								dispatch(
									setMaptionSettings({
										...maptionSettings,
										new_donation_adding_time: value * 1000,
									}),
								);
							}}
							inputValue={maptionSettings.new_donation_adding_time / 1000}
							min={0}
							inputMax={3000000000}
							adornmentText={t("settings.sec")}
						/>
					</div>
					<div>
						<div>
							<span>{t("auction_settings.greater_timer_adding_time")}:</span>
						</div>
						<OnOffSwitch
							checked={maptionSettings.is_greater_timer_adding_time}
							onChange={() =>
								dispatch(
									setMaptionSettings({
										...maptionSettings,
										is_greater_timer_adding_time:
											!maptionSettings.is_greater_timer_adding_time,
									}),
								)
							}
						/>
					</div>
					<div>
						<div>
							<span>{t("auction_settings.adding_time")}:</span>
						</div>
						<NumericFormat
							style={{ width: 100 }}
							inputMode="decimal"
							autoComplete="off"
							allowNegative={false}
							valueIsNumericString
							decimalScale={0}
							min={0}
							isAllowed={({ floatValue }) =>
								floatValue === undefined || floatValue <= 3000000000
							}
							customInput={TextField}
							slotProps={{
								input: {
									inputProps: {
										step: 1,
									},
									endAdornment: (
										<InputAdornment position="end">
											{t("settings.sec")}
										</InputAdornment>
									),
								},
							}}
							onChange={(e) => {
								const value = Number(e.target.value);
								dispatch(
									setMaptionSettings({
										...maptionSettings,
										timer_adding_time: value * 1000,
									}),
								);
							}}
							value={maptionSettings.timer_adding_time / 1000}
						/>
					</div>
					<div>
						<div>
							<span>{t("maption.meter_price")}:</span>
						</div>
						<NumericFormat
							placeholder="1"
							autoComplete="off"
							allowNegative={false}
							valueIsNumericString
							customInput={TextField}
							value={maptionSettings.price_for_meter}
							onChange={(e) => {
								dispatch(
									setMaptionSettings({
										...maptionSettings,
										price_for_meter: e.target.value,
									}),
								);
							}}
						/>
					</div>
					<div>
						<div>
							<span>{t("maption.amount")}:</span>
						</div>
						<NumericFormat
							placeholder="1"
							autoComplete="off"
							allowNegative={false}
							valueIsNumericString
							customInput={TextField}
							value={amount}
							onChange={(e) => {
								dispatch(setAmount(Number(e.target.value)));
							}}
						/>
					</div>

					<div style={{ display: "grid", placeItems: "center" }}>
						<IconButton
							onClick={() => {
								dispatch(up(distance));
							}}
						>
							<NorthIcon />
						</IconButton>

						<div>
							<IconButton
								onClick={() => {
									dispatch(left(distance));
								}}
							>
								<WestIcon />
							</IconButton>
							<IconButton
								onClick={() => {
									dispatch(undoLastStep());
								}}
							>
								<RefreshIcon />
							</IconButton>
							<IconButton
								onClick={() => {
									dispatch(right(distance));
								}}
							>
								<EastIcon />
							</IconButton>
						</div>
						<IconButton
							onClick={() => {
								dispatch(down(distance));
							}}
						>
							<SouthIcon />
						</IconButton>
					</div>
				</div>
			)}
		</>
	);
};
export default MaptionSettings;
