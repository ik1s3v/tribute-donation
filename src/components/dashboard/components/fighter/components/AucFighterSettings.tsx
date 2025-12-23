import { Button, InputAdornment, TextField } from "@mui/material";
import type { SerializedError } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import {
	useGetAucFighterSettingsQuery,
	useUpdateAucFighterSettingsMutation,
} from "../../../../../api/aucFighterApi";
import type { AppState } from "../../../../../store";
import { setAucFighterSettings } from "../../../../../store/slices/aucFighterSlice";
import OnOffSwitch from "../../../../OnOffSwitch";
import styles from "../../settings/Settings.module.css";

const AucFighterSettings = () => {
	const { aucFighterSettings } = useSelector(
		(state: AppState) => state.aucFighterState,
	);
	const { data, error } = useGetAucFighterSettingsQuery();
	const [updateAucFighterSettings] = useUpdateAucFighterSettingsMutation();
	const dispatch = useDispatch();
	const { t } = useTranslation();

	useEffect(() => {
		if (data) {
			dispatch(setAucFighterSettings(data));
		}
	}, [dispatch, data]);

	useEffect(() => {
		if (error) {
			dispatch(
				showSnackBar({
					message: error.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [error, dispatch]);

	return (
		aucFighterSettings && (
			<div style={{ display: "grid", placeItems: "center" }}>
				<div className={styles.settingsContainer}>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("auc_fighter_settings.round_duration")}:</span>
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
									setAucFighterSettings({
										...aucFighterSettings,
										round_duration: value * 1000,
									}),
								);
							}}
							value={aucFighterSettings.round_duration / 1000}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("auc_fighter_settings.add_players")}:</span>
						</div>
						<OnOffSwitch
							checked={aucFighterSettings.is_add_players}
							onChange={() =>
								dispatch(
									setAucFighterSettings({
										...aucFighterSettings,
										is_add_players: !aucFighterSettings.is_add_players,
									}),
								)
							}
						/>
					</div>
					<div style={{ display: "flex", placeContent: "center" }}>
						<Button
							variant="contained"
							onClick={async () => {
								try {
									await updateAucFighterSettings({
										aucFighterSettings,
									}).unwrap();
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
export default AucFighterSettings;
