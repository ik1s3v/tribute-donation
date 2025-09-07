import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { IconButton, Tooltip } from "@mui/material";
import { open } from "@tauri-apps/plugin-dialog";
import { readTextFile } from "@tauri-apps/plugin-fs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AlertSeverity } from "../../../../../../shared/enums";
import { IImportedLot, ILot } from "../../../../../../shared/types";
import getRandomColor from "../../../../../helpers/getRandomColor";
import { AppState } from "../../../../../store";
import { setLots } from "../../../../../store/slices/lotsSlice";
import { showSnackBar } from "../../../../../store/slices/snackBarSlice";

const LotsOptionsMenu = () => {
	const { colors } = useSelector((state: AppState) => state.mainState);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const importLotsHandler = async () => {
		try {
			const path = await open({
				multiple: false,
				directory: false,
			});
			if (!path) return;

			const data = await readTextFile(path);
			const importedLots: IImportedLot[] = JSON.parse(data);
			const lots = importedLots.reduce((acc, importedLot) => {
				if (importedLot.fastId) {
					acc.push({
						fastId: importedLot.fastId,
						color: getRandomColor(colors),
						name: importedLot.name,
						amount: Number(importedLot.amount),
						extra: Number(importedLot.extra),
					});
				}
				return acc;
			}, [] as ILot[]);
			dispatch(setLots(lots));
		} catch (error) {
			dispatch(
				showSnackBar({
					alertSeverity: AlertSeverity.error,
					message: t("error.wrong_lots_format"),
				}),
			);
		}
	};
	const deleteLotsHandler = () => {
		dispatch(setLots([]));
	};
	return (
		<>
			<Tooltip
				children={
					<IconButton onClick={importLotsHandler}>
						<UploadFileIcon />
					</IconButton>
				}
				title={t("lots_options.import_lots")}
			></Tooltip>
			<Tooltip
				children={
					<IconButton onClick={deleteLotsHandler}>
						<DeleteSweepIcon />
					</IconButton>
				}
				title={t("lots_options.clear_lots")}
			></Tooltip>
		</>
	);
};
export default LotsOptionsMenu;
