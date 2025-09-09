import { SerializedError } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { AlertSeverity } from "../../../shared/enums";
import { showSnackBar } from "../../../shared/slices/snackBarSlice";
import { useCreateAlertMutation, useGetAlertsQuery } from "../../api/alertsApi";
import { dashboardRouts } from "../../routes/dashboardRouts";
import { AppState } from "../../store";
import AlertSettings from "./components/alerts/AlertSettings";
import CreatedAlertSettings from "./components/alerts/CreatedAlertSettings";

const DashboardArticle = () => {
	const { refetch } = useGetAlertsQuery();
	const { t } = useTranslation();
	const [createAlert] = useCreateAlertMutation();
	const { alert } = useSelector((state: AppState) => state.alertsState);
	const dispatch = useDispatch();

	return (
		<>
			<article style={{ padding: 15, width: "100%" }}>
				<Routes>
					{dashboardRouts.map((navItem) => (
						<Route
							path={navItem.path}
							element={navItem.element}
							key={navItem.path}
						/>
					))}
					<Route path="alerts/:id" element={<CreatedAlertSettings />} />
					<Route
						path="new/alert"
						element={
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
						}
					/>
				</Routes>
			</article>
		</>
	);
};
export default DashboardArticle;
