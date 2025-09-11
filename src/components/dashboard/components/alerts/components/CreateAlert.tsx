import { SerializedError } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import {
	useCreateAlertMutation,
	useGetAlertsQuery,
} from "../../../../../api/alertsApi";
import { AppState } from "../../../../../store";
import AlertSettings from "../AlertSettings";

const CreateAlert = () => {
	const { refetch } = useGetAlertsQuery();
	const { t } = useTranslation();
	const [createAlert] = useCreateAlertMutation();
	const { alert } = useSelector((state: AppState) => state.alertsState);
	const dispatch = useDispatch();

	return (
		<AlertSettings
			name={t("alert.new_variant").toUpperCase()}
			isDefault={false}
			onSave={async () => {
				if (!alert) return;
				try {
					await createAlert({ alert }).unwrap();
					refetch();
					dispatch(
						showSnackBar({
							message: t("success"),
							alertSeverity: AlertSeverity.success,
						}),
					);
				} catch (error) {
					const err = error as SerializedError;
					dispatch(
						showSnackBar({
							message: err.message as string,
							alertSeverity: AlertSeverity.error,
						}),
					);
				}
			}}
		/>
	);
};
export default CreateAlert;
