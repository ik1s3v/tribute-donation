import { useTranslation } from "react-i18next";
import type { IAlert, ITextStyle } from "../../../../../../shared/types";
import styles from "../../settings/Settings.module.css";
import OnOffSwitch from "../../../../OnOffSwitch";
import ColorPicker from "../../../../ColorPicker";
import InputSlider from "../../../../InputSlider";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import AlertView from "../../../../../../shared/components/AlertView";
import type { AppState } from "../../../../../store";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Currency } from "../../../../../../shared/enums";
const TextStyle = ({
	textStyle,
	setTextStyle,
}: {
	textStyle: ITextStyle;
	setTextStyle:
		| ActionCreatorWithPayload<ITextStyle, "alerts/setTitleStyle">
		| ActionCreatorWithPayload<ITextStyle, "alerts/setMessageStyle">;
}) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const alert = useSelector((state: AppState) => state.alertsState.alert);
	const appDataDir = useSelector(
		(state: AppState) => state.mainState.appDataDir,
	);
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
							<span>{t("text.font_size")}:</span>
						</div>
						<InputSlider
							sliderValue={textStyle.font_size}
							inputValue={textStyle.font_size}
							onChange={(value) => {
								dispatch(setTextStyle({ ...textStyle, font_size: value }));
							}}
							min={0}
							sliderMax={100}
							inputMax={100}
							adornmentText={"%"}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("text.text_color")}:</span>
						</div>

						<ColorPicker
							initialColor={textStyle.text_color}
							onChange={(value) => {
								dispatch(setTextStyle({ ...textStyle, text_color: value }));
							}}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("text.bold")}:</span>
						</div>

						<OnOffSwitch
							checked={textStyle.bold}
							onChange={() => {
								dispatch(setTextStyle({ ...textStyle, bold: !textStyle.bold }));
							}}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("text.italics")}:</span>
						</div>

						<OnOffSwitch
							checked={textStyle.italics}
							onChange={() => {
								dispatch(
									setTextStyle({ ...textStyle, italics: !textStyle.italics }),
								);
							}}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("text.underline")}:</span>
						</div>

						<OnOffSwitch
							checked={textStyle.underline}
							onChange={() => {
								dispatch(
									setTextStyle({
										...textStyle,
										underline: !textStyle.underline,
									}),
								);
							}}
						/>
					</div>

					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("text.letter_spacing")}:</span>
						</div>
						<InputSlider
							sliderValue={textStyle.letter_spacing}
							inputValue={textStyle.letter_spacing}
							onChange={(value) => {
								dispatch(setTextStyle({ ...textStyle, letter_spacing: value }));
							}}
							min={0}
							sliderMax={100}
							inputMax={100}
							adornmentText={"%"}
						/>
					</div>
					<div className={styles.settings}>
						<div className={styles.label}>
							<span>{t("text.word_spacing")}:</span>
						</div>
						<InputSlider
							sliderValue={textStyle.word_spacing}
							inputValue={textStyle.word_spacing}
							onChange={(value) => {
								dispatch(setTextStyle({ ...textStyle, word_spacing: value }));
							}}
							min={0}
							sliderMax={100}
							inputMax={100}
							adornmentText={"%"}
						/>
					</div>
				</div>
				<div style={{ margin: 20 }}>
					<AlertView
						width={400}
						height={300}
						alert={alert as IAlert}
						backgroundColor="green"
						message={{
							id: "1",
							user_name: t("text.name"),
							amount: 100,
							text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
							telegram_message_id: "1",
							created_at: 1,
							played: false,
							currency: Currency.EUR,
						}}
						imageSrc={convertFileSrc(`${appDataDir}/static/${alert?.image}`)}
					/>
				</div>
			</div>
		</>
	);
};
export default TextStyle;
