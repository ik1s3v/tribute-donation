import { MenuItem, Select, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Dayjs } from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "../../../../../../shared/dayjs";
import { GoalType } from "../../../../../../shared/enums";
import type { AppState } from "../../../../../store";
import { setGoal } from "../../../../../store/slices/goalsSlice";
import styles from "../../settings/Settings.module.css";

const GoalGeneralSettings = ({ isCreate }: { isCreate: boolean }) => {
	const { goal } = useSelector((state: AppState) => state.goalsState);
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [date, setDate] = useState<Dayjs>(dayjs(goal?.end_date! * 1000));

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
							<TextField
								value={goal.title}
								onChange={(e) => {
									dispatch(setGoal({ ...goal, title: e.target.value }));
								}}
							/>
						</div>
						{isCreate && (
							<div className={styles.settings}>
								<div className={styles.label}>
									<span>{t("goal.type")}:</span>
								</div>
								<div style={{ display: "flex", gap: 5 }}>
									<Select sx={{ width: 170 }} value={goal.type}>
										{Object.values(GoalType).map((value) => (
											<MenuItem
												key={value}
												value={value}
												onClick={() => {
													dispatch(
														setGoal({
															...goal,
															type: value,
														}),
													);
												}}
											>
												{t(`goal.${value}`)}
											</MenuItem>
										))}
									</Select>
								</div>
							</div>
						)}
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.amount_raise")}:</span>
							</div>
							<NumericFormat
								style={{ width: 100 }}
								inputMode="decimal"
								autoComplete="off"
								allowNegative={false}
								valueIsNumericString
								decimalScale={0}
								min={0}
								customInput={TextField}
								onChange={(e) => {
									const value = Number(e.target.value);
									dispatch(setGoal({ ...goal, amount_raise: value }));
								}}
								value={goal.amount_raise}
							/>
						</div>

						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.start_raising")}:</span>
							</div>
							<NumericFormat
								style={{ width: 100 }}
								inputMode="decimal"
								autoComplete="off"
								allowNegative={false}
								valueIsNumericString
								decimalScale={0}
								min={0}
								customInput={TextField}
								onChange={(e) => {
									const value = Number(e.target.value);
									dispatch(setGoal({ ...goal, start_raising: value }));
								}}
								value={goal.start_raising}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("goal.end_date")}:</span>
							</div>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateTimePicker
									minDate={dayjs(Date.now()).add(5, "minute")}
									defaultValue={date}
									onChange={(value) => {
										if (!value) return;
										dispatch(setGoal({ ...goal, end_date: value.unix() }));
										setDate(value);
									}}
								/>
							</LocalizationProvider>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default GoalGeneralSettings;
