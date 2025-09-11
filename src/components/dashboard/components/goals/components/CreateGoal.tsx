import { SerializedError } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import {
	useCreateGoalMutation,
	useGetNotEndedGoalQuery,
} from "../../../../../api/goalsApi";
import { AppState } from "../../../../../store";
import GoalSettings from "./GoalSettings";

const CreateGoal = () => {
	const { t } = useTranslation();
	const { goal } = useSelector((state: AppState) => state.goalsState);
	const dispatch = useDispatch();
	const [createGoal] = useCreateGoalMutation();
	const { refetch } = useGetNotEndedGoalQuery();

	return (
		<GoalSettings
			onSave={async () => {
				if (!goal) return;
				try {
					await createGoal({ goal }).unwrap();
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
export default CreateGoal;
