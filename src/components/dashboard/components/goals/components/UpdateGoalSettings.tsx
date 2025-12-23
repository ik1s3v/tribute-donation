import type { SerializedError } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import {
	useGetGoalByIdQuery,
	useUpdateGoalSettingsMutation,
} from "../../../../../api/goalsApi";
import type { AppState } from "../../../../../store";
import { setGoal } from "../../../../../store/slices/goalsSlice";
import GoalSettings from "./GoalSettings";

const UpdateGoalSettings = () => {
	const { t } = useTranslation();
	const { id } = useParams();
	const dispatch = useDispatch();
	const { goal } = useSelector((state: AppState) => state.goalsState);
	const { data, error } = useGetGoalByIdQuery({ id }, { skip: !id });
	const [updateGoalSettings] = useUpdateGoalSettingsMutation();

	useEffect(() => {
		if (error) {
			dispatch(
				showSnackBar({
					message: error.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [error, dispatch]);

	useEffect(() => {
		if (data) {
			dispatch(setGoal(data));
		}
	}, [data, dispatch]);

	return (
		goal && (
			<GoalSettings
				onSave={async () => {
					try {
						await updateGoalSettings({ goal }).unwrap();
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
			></GoalSettings>
		)
	);
};
export default UpdateGoalSettings;
