import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../../../store";
import { useTranslation } from "react-i18next";
import groupAlertsByGroupId from "../../../../utils/groupAlertsByGroupId";
import AlertsGroup from "./AlertsGroup";
import { useEffect } from "react";
import type { IAlert } from "../../../../../shared/types";
import { setAlerts } from "../../../../store/slices/alertsSlice";
import { showSnackBar } from "../../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../../shared/enums";
import { invoke } from "@tauri-apps/api/core";
const Alerts = () => {
	const alerts = useSelector((state: AppState) => state.alertsState.alerts);
	const { t } = useTranslation();
	const dispatch = useDispatch();
	useEffect(() => {
		invoke<IAlert[]>("get_alerts")
			.then((alerts) => {
				dispatch(setAlerts(alerts));
			})
			.catch((error) => {
				dispatch(
					showSnackBar({
						message: error,
						alertSeverity: AlertSeverity.error,
					}),
				);
			});
	}, [dispatch]);
	return (
		<>
			<h1>{t("alerts.title")}</h1>
			{groupAlertsByGroupId(alerts).map((alertsGroup) => (
				<AlertsGroup alertsGroup={alertsGroup} key={alertsGroup.group_id} />
			))}
		</>
	);
};
export default Alerts;
