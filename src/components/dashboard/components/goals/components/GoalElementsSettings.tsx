import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
	GoalProgressLayout,
	GoalTextPosition,
} from "../../../../../../shared/enums";
import getProgressBarLayoutText from "../../../../../helpers/getProgressBarLayoutText";
import { AppState } from "../../../../../store";
import { setGoal } from "../../../../../store/slices/goalsSlice";
import OnOffSwitch from "../../../../OnOffSwitch";
import styles from "../../settings/Settings.module.css";

const GoalElementsSettings = () => {
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
								<span>{t("goal.goal_title")}:</span>
							</div>
							<Select sx={{ width: 150 }} value={goal.goal_title_type}>
								{Object.values(GoalTextPosition).map((value) => {
									return (
										<MenuItem
											key={value}
											value={value}
											onClick={() => {
												dispatch(setGoal({ ...goal, goal_title_type: value }));
											}}
										>
											{t(`goal.${value}`)}
										</MenuItem>
									);
								})}
							</Select>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.goal_progress_bar")}:</span>
							</div>
							<Select sx={{ width: 150 }} value={goal.goal_progress_bar}>
								{Object.values(GoalTextPosition).map((value) => {
									return (
										<MenuItem
											key={value}
											value={value}
											onClick={() => {
												dispatch(
													setGoal({ ...goal, goal_progress_bar: value }),
												);
											}}
										>
											{t(`goal.${value}`)}
										</MenuItem>
									);
								})}
							</Select>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.progress_bar_layout")}:</span>
							</div>
							<Select sx={{ width: 150 }} value={goal.progress_bar_layout}>
								{Object.values(GoalProgressLayout).map((value) => {
									return (
										<MenuItem
											key={value}
											value={value}
											onClick={() => {
												dispatch(
													setGoal({ ...goal, progress_bar_layout: value }),
												);
											}}
										>
											{getProgressBarLayoutText({
												layout: value,
												currentAmount: Math.floor(goal.amount_raise / 2),
												amountRaise: goal.amount_raise,
												currentAmountPercent: 50,
											})}
										</MenuItem>
									);
								})}
							</Select>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.remaining_time")}:</span>
							</div>
							<Select sx={{ width: 150 }} value={goal.remaining_time}>
								{Object.values(GoalTextPosition).map((value) => {
									return (
										<MenuItem
											key={value}
											value={value}
											onClick={() => {
												dispatch(setGoal({ ...goal, remaining_time: value }));
											}}
										>
											{t(`goal.${value}`)}
										</MenuItem>
									);
								})}
							</Select>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.goal_amount_limits")}:</span>
							</div>
							<OnOffSwitch
								checked={goal.goal_amount_limits}
								onChange={() => {
									dispatch(
										setGoal({
											...goal,
											goal_amount_limits: !goal.goal_amount_limits,
										}),
									);
								}}
							/>
						</div>
						{/* <div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.widget_background")}:</span>
							</div>
							<OnOffSwitch
								checked={goal.widget_background}
								onChange={() => {
									dispatch(
										setGoal({
											...goal,
											widget_background: !goal.widget_background,
										}),
									);
								}}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.background_color")}:</span>
							</div>
							<ColorPicker
								initialColor={goal.widget_background_color}
								onChange={(value) => {
									dispatch(
										setGoal({ ...goal, widget_background_color: value }),
									);
								}}
							/>
						</div> */}
					</div>
				</div>
			)}
		</>
	);
};
export default GoalElementsSettings;
