import StopIcon from "@mui/icons-material/Stop";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Button } from "@mui/material";
import { convertFileSrc } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { BaseDirectory, readFile, writeFile } from "@tauri-apps/plugin-fs";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../../../../../shared/slices/alertsSlice";
import type { AppState } from "../../../../../store";
import getFilenameFromPath from "../../../../../utils/getFilenameFromPath";
import InputSlider from "../../../../InputSlider";
import styles from "../../settings/Settings.module.css";

const AudioSettings = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const { alert } = useSelector((state: AppState) => state.alertsState);
	const dispatch = useDispatch();
	const { appDataDir } = useSelector((state: AppState) => state.mainState);
	const audioUrl = convertFileSrc(`${appDataDir}/static/${alert?.audio}`);
	const alertAudioRef = useRef(new Audio(audioUrl));
	const { t } = useTranslation();

	useEffect(() => {
		if (alertAudioRef.current && alert) {
			alertAudioRef.current.volume = alert.audio_volume / 100;
		}
	}, [alert]);

	useEffect(() => {
		return () => alertAudioRef.current.pause();
	}, []);

	useEffect(() => {
		alertAudioRef.current.onended = () => setIsPlaying(false);
		alertAudioRef.current.onerror = () => setIsPlaying(false);

		return () => {
			alertAudioRef.current.onended = null;
			alertAudioRef.current.onerror = null;
		};
	}, []);

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
										if (isPlaying) {
											setIsPlaying(false);
											alertAudioRef.current.pause();
										}
										alertAudioRef.current.src = convertFileSrc(
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
							if (alertAudioRef.current.paused) {
								alertAudioRef.current.play();
								setIsPlaying(true);
							} else {
								alertAudioRef.current.pause();
								alertAudioRef.current.currentTime = 0;
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
