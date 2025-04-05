import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import type { IMediaPlatformSettings } from "../../../../../../shared/types";
import { useTranslation } from "react-i18next";
import styles from "../../settings/Settings.module.css";
import OnOffSwitch from "../../../../OnOffSwitch";
import MinInput from "./MinInput";
import InputSlider from "../../../../InputSlider";
import { useDispatch } from "react-redux";
const MediaPlatformSettings = ({
	mediaPlatformSettings,
	setMediaPlatformSettings,
}: {
	mediaPlatformSettings: IMediaPlatformSettings;
	setMediaPlatformSettings:
		| ActionCreatorWithPayload<
				IMediaPlatformSettings,
				"media/setYoutubeSettings"
		  >
		| ActionCreatorWithPayload<
				IMediaPlatformSettings,
				"media/setTwitchSettings"
		  >
		| ActionCreatorWithPayload<
				IMediaPlatformSettings,
				"media/setTikTokSettings"
		  >;
}) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	return (
		<>
			<div
				style={{
					display: "grid",
					placeItems: "center",
				}}
			>
				<div className={styles.settingsContainer}>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("media_settings.enabled")}:</span>
						</div>
						<OnOffSwitch
							checked={mediaPlatformSettings.enabled}
							onChange={() => {
								dispatch(
									setMediaPlatformSettings({
										...mediaPlatformSettings,
										enabled: !mediaPlatformSettings.enabled,
									}),
								);
							}}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("media_settings.min_amount_eur")}:</span>
						</div>
						<MinInput
							value={mediaPlatformSettings.min_amount_eur}
							onChange={(value) => {
								dispatch(
									setMediaPlatformSettings({
										...mediaPlatformSettings,
										min_amount_eur: value,
									}),
								);
							}}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("media_settings.min_amount_rub")}:</span>
						</div>
						<MinInput
							value={mediaPlatformSettings.min_amount_rub}
							onChange={(value) => {
								dispatch(
									setMediaPlatformSettings({
										...mediaPlatformSettings,
										min_amount_rub: value,
									}),
								);
							}}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("media_settings.video_volume")}:</span>
						</div>
						<InputSlider
							sliderValue={mediaPlatformSettings.video_volume}
							inputValue={mediaPlatformSettings.video_volume}
							onChange={(value) => {
								dispatch(
									setMediaPlatformSettings({
										...mediaPlatformSettings,
										video_volume: value,
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
							<span>{t("media_settings.min_views")}:</span>
						</div>
						<MinInput
							value={mediaPlatformSettings.min_views}
							onChange={(value) => {
								dispatch(
									setMediaPlatformSettings({
										...mediaPlatformSettings,
										min_views: value,
									}),
								);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default MediaPlatformSettings;
