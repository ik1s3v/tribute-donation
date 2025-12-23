import type { SerializedError } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import { useCreateAlertMutation } from "../../../../../api/alertsApi";
import type { AppState } from "../../../../../store";
import AlertSettings from "../AlertSettings";

const CreateAlert = () => {
	const { t } = useTranslation();
	const [createAlert] = useCreateAlertMutation();
	const { alert } = useSelector((state: AppState) => state.alertsState);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<AlertSettings
			name={t("alert.new_variant").toUpperCase()}
			isDefault={false}
			onSave={async () => {
				if (!alert) return;
				try {
					await createAlert({ alert }).unwrap();
					dispatch(
						showSnackBar({
							message: t("success"),
							alertSeverity: AlertSeverity.success,
						}),
					);
					navigate(-1);
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
