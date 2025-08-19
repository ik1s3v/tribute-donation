import AddIcon from "@mui/icons-material/Add";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import getRandomColor from "../../../../../helpers/getRandomColor";
import type { AppState } from "../../../../../store";
import { addLot } from "../../../../../store/slices/lotsSlice";

const NewLotForm = () => {
	const { t } = useTranslation();
	const { currentId } = useSelector((state: AppState) => state.lotsState);
	const { colors } = useSelector((state: AppState) => state.mainState);
	const [amount, setAmount] = useState("");
	const [name, setName] = useState("");
	const dispatch = useDispatch();

	return (
		<div style={{ display: "flex", gap: 5, width: "100%" }}>
			<TextField
				sx={{ width: "100%" }}
				placeholder={t("lots.new_lot_name")}
				autoComplete="off"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<NumericFormat
				sx={{ maxWidth: 125 }}
				placeholder="0"
				autoComplete="off"
				customInput={TextField}
				onChange={(e) => setAmount(e.target.value)}
				value={amount}
			/>
			<Button
				variant="contained"
				startIcon={<AddIcon />}
				onClick={() => {
					dispatch(
						addLot({
							fastId: currentId,
							amount: Number(amount),
							name,
							color: getRandomColor(colors),
						}),
					);
					setAmount("");
					setName("");
				}}
			>
				{t("lots.add")}
			</Button>
		</div>
	);
};
export default NewLotForm;
