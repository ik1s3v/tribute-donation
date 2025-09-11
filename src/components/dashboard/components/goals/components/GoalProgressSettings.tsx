import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store";
import { setGoal } from "../../../../../store/slices/goalsSlice";
import ColorPicker from "../../../../ColorPicker";
import InputSlider from "../../../../InputSlider";
import styles from "../../settings/Settings.module.css";

const GoalProgressSettings = () => {
	const { goal } = useSelector((state: AppState) => state.goalsState);
	const { t } = useTranslation();
	const dispatch = useDispatch();

	return (
		<>
			{goal && (
				<div
					style={{
						display: "grid",
						placeItems: "center",
					}}
				>
					<div className={styles.settingsContainer}>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.bar_height")}:</span>
							</div>
							<InputSlider
								sliderValue={goal.bar_height}
								inputValue={goal.bar_height}
								onChange={(value) => {
									dispatch(setGoal({ ...goal, bar_height: value }));
								}}
								min={0}
								sliderMax={100}
								inputMax={100}
								adornmentText={"%"}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.rounding_radius")}:</span>
							</div>
							<InputSlider
								sliderValue={goal.rounding_radius}
								inputValue={goal.rounding_radius}
								onChange={(value) => {
									dispatch(setGoal({ ...goal, rounding_radius: value }));
								}}
								min={0}
								sliderMax={100}
								inputMax={100}
								adornmentText={"%"}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.bar_stroke_thickness")}:</span>
							</div>
							<InputSlider
								sliderValue={goal.bar_stroke_thickness}
								inputValue={goal.bar_stroke_thickness}
								onChange={(value) => {
									dispatch(setGoal({ ...goal, bar_stroke_thickness: value }));
								}}
								min={0}
								sliderMax={100}
								inputMax={100}
								adornmentText={"%"}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.background_bar_color")}:</span>
							</div>
							<ColorPicker
								initialColor={goal.background_bar_color}
								onChange={(value) => {
									dispatch(setGoal({ ...goal, background_bar_color: value }));
								}}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.progress_bar_color")}:</span>
							</div>
							<ColorPicker
								initialColor={goal.progress_bar_color}
								onChange={(value) => {
									dispatch(setGoal({ ...goal, progress_bar_color: value }));
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default GoalProgressSettings;
