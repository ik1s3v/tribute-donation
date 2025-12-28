import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

const WarningDialog = ({
	open,
	setOpen,
	onClick,
	title,
	text,
}: {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	title: string;
	text: string;
	onClick: () => void;
}) => {
	const handleClose = () => {
		setOpen(false);
	};
	const { t } = useTranslation();

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{text}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClick}>{t("ok")}</Button>
				<Button onClick={handleClose}>{t("cancel")}</Button>
			</DialogActions>
		</Dialog>
	);
};
export default WarningDialog;
