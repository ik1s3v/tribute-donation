import { useDroppable } from "@dnd-kit/core";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, Chip, IconButton, TextField, type Theme } from "@mui/material";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import type { ILot } from "../../../../../../shared/types";
import { removeLot, updateLot } from "../../../../../store/slices/lotsSlice";

const inputSX = (theme: Theme) => ({
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			border: "none",
		},
		"&:hover fieldset": {
			backgroundColor: "rgba(255,255,255,0.2)",
		},
		"&.Mui-focused fieldset": {
			border: 1,
			backgroundColor: "rgba(255,255,255,0.2)",
			borderColor: theme.palette.primary.main,
		},
	},
});

const LotCard = ({
	lot,
	index,
	isShowOdds,
}: {
	lot: ILot;
	index: number;
	isShowOdds?: boolean;
}) => {
	const { t } = useTranslation();
	const [amount, setAmount] = useState(lot.amount);
	const dispatch = useDispatch();
	const { isOver, setNodeRef } = useDroppable({
		id: lot.fastId,
	});

	return (
		<Card
			ref={setNodeRef}
			style={{
				display: "flex",
				gap: 5,
				placeItems: "center",
				padding: 5,
			}}
			sx={(theme) => ({
				background: `linear-gradient(60deg,${theme.palette.background.paper} 30%,  ${lot.color} 100%)`,
				position: "relative",
				borderRadius: 1,
				marginBottom: "0.5rem",

				overflow: "hidden",
				boxSizing: "border-box",
				border: isOver ? "1px solid" : undefined,
				borderColor: theme.palette.primary.main,
			})}
		>
			<div
				style={{
					display: "flex",
					placeItems: "center",
					width: 200,
					overflow: "hidden",
				}}
			>
				<div style={{ width: 100 }}>{`${index}.`}</div>
				<div style={{ width: 100 }}>
					<Chip
						sx={{
							backgroundColor: (theme) => theme.palette.primary.main,
						}}
						label={`#${lot.fastId}`}
					/>
				</div>
			</div>

			<TextField
				sx={{ ...inputSX, width: "100%" }}
				size="small"
				autoComplete="off"
				placeholder={t("lot.name")}
				onChange={(e) => {
					dispatch(updateLot({ ...lot, name: e.target.value }));
				}}
				value={lot.name}
			/>

			{isShowOdds && (
				<div style={{ width: 120, overflow: "hidden" }}>
					{lot.winChancePercent}%
				</div>
			)}

			<div style={{ display: "flex" }}>
				<NumericFormat
					sx={{ ...inputSX, width: 120 }}
					size="small"
					autoComplete="off"
					customInput={TextField}
					value={lot.amount ?? 0}
					placeholder="0"
					onChange={(e) => setAmount(Number(e.target.value))}
					onBlur={() => dispatch(updateLot({ ...lot, amount }))}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							dispatch(updateLot({ ...lot, amount }));
						}
					}}
				/>

				<IconButton
					onClick={() => {
						dispatch(
							updateLot({
								...lot,
								amount: (lot.amount ?? 0) + (lot.extra ?? 0),
								extra: 0,
							}),
						);
					}}
					title={t("lot.add")}
				>
					<AddIcon />
				</IconButton>
				<NumericFormat
					sx={{ ...inputSX, width: 120 }}
					size="small"
					autoComplete="off"
					customInput={TextField}
					value={lot.extra ?? 0}
					placeholder="0"
					onChange={(e) =>
						dispatch(updateLot({ ...lot, extra: Number(e.target.value) }))
					}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							dispatch(
								updateLot({
									...lot,
									amount: (lot.amount ?? 0) + (lot.extra ?? 0),
									extra: 0,
								}),
							);
						}
					}}
				/>

				<IconButton
					onClick={() => dispatch(removeLot(lot))}
					title={t("lot.delete")}
				>
					<DeleteIcon />
				</IconButton>
			</div>
		</Card>
	);
};
export default memo(LotCard);
