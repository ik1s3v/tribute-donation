import { useTranslation } from "react-i18next";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { invoke } from "@tauri-apps/api/core";
import type { ISettings } from "../../../../../shared/types";
import styles from "./Settings.module.css";
import OnOffSwitch from "../../../OnOffSwitch";
import { useDispatch, useSelector } from "react-redux";
import { showSnackBar } from "../../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../../shared/enums";

import InputSlider from "../../../InputSlider";
import type { AppState } from "../../../../store";
import {
	setDuration,
	setSettings,
} from "../../../../store/slices/settingsSlice";
import { languages } from "../../../../../shared/i18n/languages";
import { useEffect } from "react";

const Settings = () => {
	const { t, i18n } = useTranslation();
	const settings = useSelector(
		(state: AppState) => state.settingsState.settings,
	);
	const duration = useSelector(
		(state: AppState) => state.settingsState.duration,
	);
	const dispatch = useDispatch();
	useEffect(() => {
		invoke<ISettings>("get_settings")
			.then((settings) => {
				i18n.changeLanguage(settings.language);
				dispatch(setSettings(settings));
				dispatch(setDuration(settings.moderation_duration / 1000));
			})
			.catch((error) => {
				dispatch(
					showSnackBar({
						message: error,
						alertSeverity: AlertSeverity.error,
					}),
				);
			});
	}, [dispatch, i18n]);
	return (
		settings && (
			<>
				<h1>{t("settings.title")}</h1>

				<div style={{ display: "grid", placeItems: "center" }}>
					<div className={styles.settingsContainer}>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("settings.language")}:</span>
							</div>

							<Select sx={{ width: 150 }} value={settings.language}>
								{languages.map((language) => (
									<MenuItem
										value={language.locale}
										key={language.locale}
										onClick={() => {
											i18n.changeLanguage(language.locale);
											dispatch(
												setSettings({
													...settings,
													language: language.locale,
												}),
											);
										}}
									>
										{language.name}
									</MenuItem>
								))}
							</Select>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("settings.pause")}:</span>
							</div>

							<OnOffSwitch
								checked={settings.alert_paused}
								onChange={() =>
									dispatch(
										setSettings({
											...settings,
											alert_paused: !settings.alert_paused,
										}),
									)
								}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("sound_volume")}:</span>
							</div>
							<InputSlider
								sliderValue={settings.tts_volume}
								inputValue={settings.tts_volume}
								onChange={(value) => {
									dispatch(
										setSettings({
											...settings,
											tts_volume: value,
										}),
									);
								}}
								min={0}
								sliderMax={100}
								inputMax={100}
								adornmentText={"%"}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("settings.moderation_duration")}:</span>
							</div>
							<InputSlider
								sliderValue={settings.moderation_duration}
								inputValue={duration}
								onChange={(value) => {
									dispatch(setDuration((value as number) / 1000));
									dispatch(
										setSettings({
											...settings,
											moderation_duration: value as number,
										}),
									);
								}}
								min={0}
								sliderMax={300000}
								inputMax={300}
								adornmentText={t("settings.sec")}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("settings.remove_links")}:</span>
							</div>
							<OnOffSwitch
								checked={settings.remove_links}
								onChange={() =>
									dispatch(
										setSettings({
											...settings,
											remove_links: !settings.remove_links,
										}),
									)
								}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("settings.black_list")}:</span>
							</div>
							<TextField
								variant="outlined"
								value={settings.black_list}
								style={{ width: "100%" }}
								multiline
								minRows={6}
								maxRows={6}
								onChange={(e) => {
									dispatch(
										setSettings({
											...settings,
											black_list: e.target.value,
										}),
									);
								}}
							/>
						</div>

						<div style={{ display: "flex", placeContent: "center" }}>
							<Button
								variant="contained"
								onClick={() => {
									invoke("update_settings", {
										settings,
									})
										.then(() =>
											dispatch(
												dispatch(
													showSnackBar({
														message: t("success"),
														alertSeverity: AlertSeverity.success,
													}),
												),
											),
										)
										.catch((error) => {
											dispatch(
												showSnackBar({
													message: error,
													alertSeverity: AlertSeverity.error,
												}),
											);
										});
								}}
							>
								{t("save")}
							</Button>
						</div>
					</div>
				</div>
			</>
		)
	);
};
export default Settings;
