import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import groupAlertsByGroupId from "../../../../utils/groupAlertsByGroupId";
import AlertsGroup from "./AlertsGroup";
import { useEffect } from "react";
import { showSnackBar } from "../../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../../shared/enums";
import { useGetAlertsQuery } from "../../../../api/alertsApi";

const Alerts = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { data, error } = useGetAlertsQuery();

	useEffect(() => {
		if (error) {
			dispatch(
				showSnackBar({
					message: error.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [dispatch, error]);
	return (
		<>
			<h1>{t("alerts.title")}</h1>
			{groupAlertsByGroupId(data ?? []).map((alertsGroup) => (
				<AlertsGroup alertsGroup={alertsGroup} key={alertsGroup.group_id} />
			))}
		</>
	);
};
export default Alerts;
