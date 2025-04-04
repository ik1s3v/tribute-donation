import { Button } from "@mui/material";
import { open } from "@tauri-apps/plugin-dialog";
import { readFile, writeFile, BaseDirectory } from "@tauri-apps/plugin-fs";
import type { AppState } from "../../../../../store";
import { convertFileSrc } from "@tauri-apps/api/core";
import { useDispatch, useSelector } from "react-redux";
import getFilenameFromPath from "../../../../../utils/getFilenameFromPath";
import { useEffect, useRef, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useTranslation } from "react-i18next";
import InputSlider from "../../../../InputSlider";
import styles from "../../settings/Settings.module.css";
import { setAlert } from "../../../../../store/slices/alertsSlice";
import StopIcon from "@mui/icons-material/Stop";
const AudioSettings = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const alert = useSelector((state: AppState) => state.alertsState.alert);
	const dispatch = useDispatch();
	const appDataDir = useSelector(
		(state: AppState) => state.mainState.appDataDir,
	);
	const audioUrl = convertFileSrc(`${appDataDir}/static/${alert?.audio}`);
	const soundRef = useRef(new Audio(audioUrl));
	const { t } = useTranslation();
	useEffect(() => {
		if (soundRef.current && alert) {
			soundRef.current.volume = alert.audio_volume / 100;
		}
	}, [alert]);
	return (
		alert && (
			<div style={{ display: "grid", placeContent: "center" }}>
				<div style={{ display: "flex", placeContent: "center" }}>
					<Button
						onClick={() => {
							open({
								multiple: false,
								directory: false,
								filters: [
									{
										name: "Audio",
										extensions: ["mp3", "wav", "ogg"],
									},
								],
							}).then((path) => {
								if (!path) return;
								const fileName = getFilenameFromPath(path);

								readFile(path).then((data) => {
									writeFile(`static/${getFilenameFromPath(path)}`, data, {
										baseDir: BaseDirectory.AppLocalData,
									}).then(() => {
										soundRef.current.src = convertFileSrc(
											`${appDataDir}/static/${fileName}`,
										);
										dispatch(setAlert({ ...alert, audio: fileName }));
									});
								});
							});
						}}
					>
						{alert.audio}
					</Button>
					<Button
						onClick={() => {
							if (soundRef.current.paused) {
								soundRef.current.play();
								setIsPlaying(true);
							} else {
								soundRef.current.pause();
								soundRef.current.currentTime = 0;
								setIsPlaying(false);
							}
						}}
					>
						<div style={{ display: "flex", placeItems: "center", gap: 3 }}>
							{isPlaying ? <StopIcon /> : <VolumeUpIcon />}
							{isPlaying ? t("audio.stop") : t("audio.play")}
						</div>
					</Button>
				</div>
				<div className={styles.settings}>
					<div className={styles.label}>
						<span>{t("sound_volume")}:</span>
					</div>

					<InputSlider
						sliderValue={alert.audio_volume}
						inputValue={alert.audio_volume}
						onChange={(value) => {
							dispatch(setAlert({ ...alert, audio_volume: value }));
						}}
						min={0}
						sliderMax={100}
						inputMax={100}
						adornmentText={"%"}
					/>
				</div>
			</div>
		)
	);
};
export default AudioSettings;
