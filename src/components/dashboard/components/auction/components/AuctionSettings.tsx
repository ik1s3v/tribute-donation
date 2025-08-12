import { useTranslation } from "react-i18next";
import styles from "../../settings/Settings.module.css";
import OnOffSwitch from "../../../../OnOffSwitch";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useUpdateAuctionSettingsMutation } from "../../../../../api/auctionApi";
import { showSnackBar } from "../../../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../../../shared/enums";
import type { SerializedError } from "@reduxjs/toolkit";
import InputSwitch from "../../../../InputSwitch";
import { setAuctionSettings } from "../../../../../store/slices/auctionSlice";
import { NumericFormat } from "react-number-format";

const AuctionSettings = () => {
	const { t } = useTranslation();
	const { auctionSettings } = useSelector(
		(state: AppState) => state.auctionState,
	);
	const [updateAuctionSettings] = useUpdateAuctionSettingsMutation();
	const dispatch = useDispatch();

	return (
		auctionSettings && (
			<div style={{ display: "grid", placeItems: "center" }}>
				<div className={styles.settingsContainer}>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("auction_settings.leader_change")}:</span>
						</div>
						<InputSwitch
							checked={auctionSettings.is_leader_change_adding_time}
							onSwitchChange={() => {
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										is_leader_change_adding_time:
											!auctionSettings.is_leader_change_adding_time,
									}),
								);
							}}
							onChange={(value) => {
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										leader_change_adding_time: value * 1000,
									}),
								);
							}}
							inputValue={auctionSettings.leader_change_adding_time / 1000}
							min={0}
							inputMax={3000000000}
							adornmentText={t("settings.sec")}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("auction_settings.new_lot")}:</span>
						</div>
						<InputSwitch
							checked={auctionSettings.is_new_lot_adding_time}
							onSwitchChange={() => {
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										is_new_lot_adding_time:
											!auctionSettings.is_new_lot_adding_time,
									}),
								);
							}}
							onChange={(value) => {
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										new_lot_adding_time: value * 1000,
									}),
								);
							}}
							inputValue={auctionSettings.new_lot_adding_time / 1000}
							min={0}
							inputMax={3000000000}
							adornmentText={t("settings.sec")}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("auction_settings.new_donation")}:</span>
						</div>
						<InputSwitch
							checked={auctionSettings.is_new_donation_adding_time}
							onSwitchChange={() => {
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										is_new_donation_adding_time:
											!auctionSettings.is_new_donation_adding_time,
									}),
								);
							}}
							onChange={(value) => {
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										new_donation_adding_time: value * 1000,
									}),
								);
							}}
							inputValue={auctionSettings.new_donation_adding_time / 1000}
							min={0}
							inputMax={3000000000}
							adornmentText={t("settings.sec")}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("auction_settings.show_odds")}:</span>
						</div>
						<OnOffSwitch
							checked={auctionSettings.is_show_odds}
							onChange={() =>
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										is_show_odds: !auctionSettings.is_show_odds,
									}),
								)
							}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("auction_settings.show_total_sum")}:</span>
						</div>
						<OnOffSwitch
							checked={auctionSettings.is_show_total_sum}
							onChange={() =>
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										is_show_total_sum: !auctionSettings.is_show_total_sum,
									}),
								)
							}
						/>
					</div>
					<div style={{ textAlign: "center" }}>
						<Typography
							sx={(theme) => ({
								fontSize: 20,
								color: theme.palette.primary.main,
							})}
						>
							{t("auction_settings.not_add_time_if")}
						</Typography>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("auction_settings.greater_timer_adding_time")}:</span>
						</div>
						<OnOffSwitch
							checked={auctionSettings.is_greater_timer_adding_time}
							onChange={() =>
								dispatch(
									setAuctionSettings({
										...auctionSettings,
										is_greater_timer_adding_time:
											!auctionSettings.is_greater_timer_adding_time,
									}),
								)
							}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
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
									setAuctionSettings({
										...auctionSettings,
										timer_adding_time: value * 1000,
									}),
								);
							}}
							value={auctionSettings.timer_adding_time / 1000}
						/>
					</div>
					<div style={{ display: "flex", placeContent: "center" }}>
						<Button
							variant="contained"
							onClick={async () => {
								try {
									await updateAuctionSettings({ auctionSettings }).unwrap();
									dispatch(
										showSnackBar({
											message: t("success"),
											alertSeverity: AlertSeverity.success,
										}),
									);
								} catch (error) {
									const err = error as SerializedError;
									dispatch(
										showSnackBar({
											message: err.message as string,
											alertSeverity: AlertSeverity.error,
										}),
									);
								}
							}}
						>
							{t("save")}
						</Button>
					</div>
				</div>
			</div>
		)
	);
};
export default AuctionSettings;
