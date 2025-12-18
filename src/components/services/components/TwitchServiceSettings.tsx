import { Button, TextField, useTheme } from "@mui/material";
import type { SerializedError } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { AlertSeverity, ServiceType } from "../../../../shared/enums";
import { showSnackBar } from "../../../../shared/slices/snackBarSlice";
import type { ITwitchIntegrationSettings } from "../../../../shared/types";
import {
	useGetServiceByIdQuery,
	useUpdateServiceSettingsMutation,
} from "../../../api/servicesApi";
import styles from "../../dashboard/components/settings/Settings.module.css";
import RewardCard from "./RewardCard";

const TwitchServiceSettings = () => {
	const theme = useTheme();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { data, refetch } = useGetServiceByIdQuery({ id: ServiceType.Twitch });

	const [updateServiceSettings] = useUpdateServiceSettingsMutation();

	const [settings, setSettings] = useState<ITwitchIntegrationSettings>();

	useEffect(() => {
		if (data) {
			setSettings(data.settings as ITwitchIntegrationSettings);
		}
	}, [data]);

	return (
		settings && (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					placeItems: "center",
				}}
			>
				<h1>{t("twitch_service_settings.title")}</h1>
				<div style={{ display: "grid", placeItems: "center" }}>
					<div className={styles.settingsContainer}>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>
									{t("twitch_service_settings.points_currency_ratio")}:
								</span>
							</div>
							<NumericFormat
								style={{ width: 100 }}
								inputMode="decimal"
								autoComplete="off"
								allowNegative={false}
								valueIsNumericString
								customInput={TextField}
								onValueChange={(e) => {
									setSettings((prevSettings) => {
										if (prevSettings) {
											return {
												...prevSettings,
												points_currency_ratio: Number(e.floatValue),
											};
										}
									});
								}}
								value={settings.points_currency_ratio}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("twitch_service_settings.rewards_name")}:</span>
							</div>
							<TextField
								value={settings.rewards_name}
								onChange={(e) => {
									setSettings((prevSettings) => {
										if (prevSettings) {
											return {
												...prevSettings,
												rewards_name: e.target.value,
											};
										}
									});
								}}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("twitch_service_settings.rewards_list")}:</span>
							</div>
						</div>
						<div>
							{settings.rewards.map((reward) => (
								<div style={{ marginBottom: 5 }} key={reward.id}>
									<RewardCard reward={reward} setSettings={setSettings} />
								</div>
							))}
							<Button
								onClick={() => {
									setSettings((prevSettings) => {
										if (prevSettings) {
											return {
												...prevSettings,
												rewards: [
													...prevSettings.rewards,
													{
														id: crypto.randomUUID(),
														reward_id: null,
														cost: 100,
														color: theme.palette.primary.main,
													},
												],
											};
										}
									});
								}}
							>
								{t("twitch_service_settings.add_reward")}
							</Button>
						</div>
						<div style={{ display: "flex", placeContent: "center" }}>
							<Button
								variant="contained"
								onClick={async () => {
									try {
										await updateServiceSettings({
											settings: settings,
											id: ServiceType.Twitch,
										}).unwrap();
										refetch();
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
			</div>
		)
	);
};
export default TwitchServiceSettings;
