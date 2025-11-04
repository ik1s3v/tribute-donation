import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import type { SerializedError } from "@reduxjs/toolkit";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import {
	useFinishGoalMutation,
	useGetNotEndedGoalQuery,
} from "../../../../../api/goalsApi";

const FinishGoalDialog = ({
	open,
	setOpen,
	goalId,
}: {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	goalId: string;
}) => {
	const { refetch } = useGetNotEndedGoalQuery();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [finishGoal] = useFinishGoalMutation();

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>{t("goal.finish_goal")}</DialogTitle>

			<DialogContent>
				<DialogContentText>{t("goal.sure_finish")}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={async () => {
						try {
							await finishGoal({ id: goalId }).unwrap();
							dispatch(
								showSnackBar({
									message: t("success"),
									alertSeverity: AlertSeverity.success,
								}),
							);
							refetch();
						} catch (error) {
							const err = error as SerializedError;
							dispatch(
								showSnackBar({
									message: err.message as string,
									alertSeverity: AlertSeverity.error,
								}),
							);
						}
						handleClose();
					}}
				>
					{t("ok")}
				</Button>
				<Button onClick={handleClose}>{t("cancel")}</Button>
			</DialogActions>
		</Dialog>
	);
};
export default FinishGoalDialog;
