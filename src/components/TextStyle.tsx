import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import type { ITextStyle } from "../../shared/types";
import ColorPicker from "./ColorPicker";
import styles from "./dashboard/components/settings/Settings.module.css";
import InputSlider from "./InputSlider";
import OnOffSwitch from "./OnOffSwitch";

const TextStyle = ({
	textStyle,
	setTextStyle,
}: {
	textStyle: ITextStyle;
	setTextStyle:
		| ActionCreatorWithPayload<ITextStyle, "alerts/setTitleStyle">
		| ActionCreatorWithPayload<ITextStyle, "alerts/setMessageStyle">
		| ActionCreatorWithPayload<ITextStyle, "goals/setTitleStyle">
		| ActionCreatorWithPayload<ITextStyle, "goals/setProgressStyle">
		| ActionCreatorWithPayload<ITextStyle, "goals/setLimitsStyle">;
}) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	return (
		<div
			style={{
				display: "flex",
				placeContent: "center",
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
		</div>
	);
};
export default TextStyle;
