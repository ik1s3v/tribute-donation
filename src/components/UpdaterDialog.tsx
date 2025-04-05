import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import useUpdater from "../hooks/useUpdater";
import { useTranslation } from "react-i18next";

const UpdaterDialog = () => {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const { t } = useTranslation();
	const { updateApp, update, isUpdating } = useUpdater();

	useEffect(() => {
		if (update) {
			setOpen(true);
		}
	}, [update]);

	return (
		<Dialog open={open} onClose={!isUpdating ? handleClose : undefined}>
			<DialogTitle>{t("updater.title")}</DialogTitle>
			{isUpdating ? (
				<div
					style={{
						minHeight: 100,
						minWidth: 300,
						display: "grid",
						placeItems: "center",
					}}
				>
					{t("updater.downloading")}
				</div>
			) : (
				<>
					<DialogContent>
						<DialogContentText>{t("updater.description")}</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>{t("updater.later")}</Button>
						<Button onClick={() => updateApp()}>{t("updater.update")}</Button>
					</DialogActions>
				</>
			)}
		</Dialog>
	);
};
export default UpdaterDialog;
