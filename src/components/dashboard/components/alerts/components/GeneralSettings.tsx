import { MenuItem, Select, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import {
	AlertVariationConditions,
	MessageType,
} from "../../../../../../shared/enums";
import { setAlert } from "../../../../../../shared/slices/alertsSlice";
import type { AppState } from "../../../../../store";
import OnOffSwitch from "../../../../OnOffSwitch";
import styles from "../../settings/Settings.module.css";

const GeneralSettings = () => {
	const { t } = useTranslation();
	const { alert } = useSelector((state: AppState) => state.alertsState);
	const dispatch = useDispatch();
	return (
		<>
			{alert && (
				<div
					style={{
						display: "grid",
						placeItems: "center",
					}}
				>
					<div className={styles.settingsContainer}>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("alert.variant_title")}:</span>
							</div>
							<TextField
								value={alert.name}
								onChange={(e) => {
									dispatch(setAlert({ ...alert, name: e.target.value }));
								}}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("alert.variant_group")}:</span>
							</div>
							<Select sx={{ width: 150 }} value={alert.group_id}>
								{new Array(6).fill(0).map((_, index) => {
									const group_id = String(index + 1);
									return (
										<MenuItem
											key={group_id}
											value={group_id}
											onClick={() => {
												dispatch(setAlert({ ...alert, group_id }));
											}}
										>
											{t("alert.group")} {group_id}
										</MenuItem>
									);
								})}
							</Select>
						</div>

						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("alert.status")}:</span>
							</div>

							<OnOffSwitch
								checked={alert.status}
								onChange={() =>
									dispatch(setAlert({ ...alert, status: !alert.status }))
								}
							/>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("alert.type")}:</span>
							</div>
							<div style={{ display: "flex", gap: 5 }}>
								<Select sx={{ width: 170 }} value={alert.type}>
									{Object.values(MessageType).map((value) => (
										<MenuItem
											key={value}
											value={value}
											onClick={() => {
												dispatch(
													setAlert({
														...alert,
														type: value,
														variation_conditions:
															AlertVariationConditions.Random,
													}),
												);
											}}
										>
											{t(`alert.${value}`)}
										</MenuItem>
									))}
								</Select>
							</div>
						</div>
						<div className={styles.settings}>
							<div className={styles.label}>
								<span>{t("alert.variation_condition")}:</span>
							</div>
							<div style={{ display: "flex", gap: 5 }}>
								<Select
									sx={{ width: 170 }}
									value={alert.variation_conditions}
									disabled={alert.type !== MessageType.Donation}
								>
									{Object.values(AlertVariationConditions).map((value) => (
										<MenuItem
											key={value}
											value={value}
											onClick={() => {
												dispatch(
													setAlert({ ...alert, variation_conditions: value }),
												);
											}}
										>
											{t(`alert.${value}`)}
										</MenuItem>
									))}
								</Select>
								{alert.variation_conditions !==
									AlertVariationConditions.Random && (
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
											dispatch(setAlert({ ...alert, amount: value }));
										}}
										value={alert.amount}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default GeneralSettings;
