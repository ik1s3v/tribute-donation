import type { SerializedError } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AlertSeverity } from "../../../../../shared/enums";
import { setAlert } from "../../../../../shared/slices/alertsSlice";
import { showSnackBar } from "../../../../../shared/slices/snackBarSlice";
import {
	useGetAlertByIdQuery,
	useUpdateAlertSettingsMutation,
} from "../../../../api/alertsApi";
import type { AppState } from "../../../../store";
import AlertSettings from "./AlertSettings";

const UpdateAlertSettings = () => {
	const { t } = useTranslation();
	const { id } = useParams();
	const dispatch = useDispatch();
	const { alert } = useSelector((state: AppState) => state.alertsState);
	const { data, error: getAlertByIdError } = useGetAlertByIdQuery(
		{ id },
		{ skip: !id },
	);
	const [updateAlertSettings] = useUpdateAlertSettingsMutation();

	useEffect(() => {
		if (getAlertByIdError) {
			dispatch(
				showSnackBar({
					message: getAlertByIdError.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [getAlertByIdError, dispatch]);

	useEffect(() => {
		if (data) {
			dispatch(setAlert(data));
		}
	}, [data, dispatch]);

	return (
		alert && (
			<AlertSettings
				name={alert.name.toUpperCase()}
				isDefault={alert.id === "default"}
				onSave={async () => {
					try {
						await updateAlertSettings({ alert }).unwrap();
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
			></AlertSettings>
		)
	);
};
export default UpdateAlertSettings;
