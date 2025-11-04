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
	useDeleteAlertByIdMutation,
	useGetAlertsQuery,
} from "../../../../../api/alertsApi";

const DeleteAlertDialog = ({
	open,
	setOpen,
	alertId,
}: {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	alertId: string;
}) => {
	const { refetch } = useGetAlertsQuery();
	const [deleteAlertById] = useDeleteAlertByIdMutation();
	const dispatch = useDispatch();
	const handleClose = () => {
		setOpen(false);
	};
	const { t } = useTranslation();

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>{t("alert.delete")}</DialogTitle>
			<>
				<DialogContent>
					<DialogContentText>{t("alert.sure_delete")}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={async () => {
							try {
								await deleteAlertById({ id: alertId }).unwrap();
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
			</>
		</Dialog>
	);
};
export default DeleteAlertDialog;
