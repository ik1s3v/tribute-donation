import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { IconButton, Tooltip } from "@mui/material";
import { open } from "@tauri-apps/plugin-dialog";
import { readTextFile } from "@tauri-apps/plugin-fs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import type { IImportedLot, ILot } from "../../../../../../shared/types";
import calculateLotProbability from "../../../../../helpers/calculateLotProbability";
import findLotsMinMaxAmount from "../../../../../helpers/findLotsMinMaxAmount";
import getRandomColor from "../../../../../helpers/getRandomColor";
import lotsTotalAmount from "../../../../../helpers/lotsTotalAmount";
import type { AppState } from "../../../../../store";
import { setLots } from "../../../../../store/slices/lotsSlice";

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

			const totalAmount = lotsTotalAmount(lots);

			const { max, min } = findLotsMinMaxAmount(lots);

			dispatch(
				setLots(
					lots
						.map((lot) => {
							return {
								...lot,
								...calculateLotProbability({
									amount: lot.amount,
									totalAmount,
									maxAmount: max?.amount,
									minAmount: min?.amount,
								}),
							};
						})
						.sort((a, b) => (b.amount ?? 0) - (a.amount ?? 0)),
				),
			);
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
