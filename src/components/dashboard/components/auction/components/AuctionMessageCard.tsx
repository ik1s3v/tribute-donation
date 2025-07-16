import {
	Card,
	CardContent,
	Typography,
	IconButton,
	Button,
	ButtonGroup,
	Menu,
	MenuItem,
} from "@mui/material";
import type { ILot, IMessage } from "../../../../../../shared/types";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import { auctionMessagesSlice } from "../../../../../store/slices/messagesSlice";
import { useDispatch, useSelector } from "react-redux";
import { addLot, updateLot } from "../../../../../store/slices/lotsSlice";
import type { AppState } from "../../../../../store";
import { useCallback, useMemo, useState } from "react";
import { findBestMatch } from "string-similarity";
import getRandomColor from "../../../../../helpers/getRandomColor";
import { showSnackBar } from "../../../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../../../shared/enums";

const AuctionMessageCard = ({ message }: { message: IMessage }) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { removeMessage } = auctionMessagesSlice.actions;
	const { lots, currentId } = useSelector((state: AppState) => state.lotsState);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { colors } = useSelector((state: AppState) => state.mainState);

	const bestMatch = useMemo(() => {
		if (!message.text) return;
		const lotsNames = lots.map(({ name }) => name || "");
		if (!lotsNames.length) return;
		const {
			bestMatch: { rating },
			bestMatchIndex,
		} = findBestMatch(message.text, lotsNames);
		return rating > 0.4
			? { ...lots[bestMatchIndex], index: bestMatchIndex + 1 }
			: null;
	}, [lots, message.text]);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleAddToRandomLot = useCallback(() => {
		const randomLotIndex = Math.floor(Math.random() * (lots.length + 1));
		const randomLot = lots.at(randomLotIndex) as ILot;
		dispatch(
			updateLot({
				...randomLot,
				amount: (randomLot.amount ?? 0) + message.amount,
			}),
		);
		dispatch(
			showSnackBar({
				message: `+${message.amount}      #${randomLot.fastId}`,
				alertSeverity: AlertSeverity.success,
			}),
		);
		dispatch(removeMessage(message));
		setAnchorEl(null);
	}, [dispatch, lots, message, removeMessage]);

	const handleAddToBestMatch = useCallback(() => {
		if (!bestMatch) return;
		dispatch(
			updateLot({
				...bestMatch,
				amount: (bestMatch.amount ?? 0) + message.amount,
			}),
		);
		dispatch(
			showSnackBar({
				message: `+${message.amount}      #${bestMatch.fastId}`,
				alertSeverity: AlertSeverity.success,
			}),
		);
		dispatch(removeMessage(message));
		setAnchorEl(null);
	}, [dispatch, bestMatch, removeMessage, message]);

	return (
		<Card
			sx={{
				width: 304,
				marginBottom: "10px",
				cursor: "pointer",
			}}
		>
			<CardContent>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="h6">
						{message.amount} {message.user_name}
					</Typography>
					<IconButton
						onClick={() => {
							dispatch(removeMessage(message));
						}}
						title={t("bid.delete")}
						size="large"
					>
						<CloseIcon />
					</IconButton>
				</div>
				<Typography>{message.text}</Typography>
				<div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
					<ButtonGroup size="small" style={{ display: "flex" }}>
						<Button
							style={{ width: "100%" }}
							variant="outlined"
							size="small"
							onClick={() => {
								dispatch(
									addLot({
										fastId: currentId,
										name: message.text,
										amount: message.amount,
										color: getRandomColor(colors),
									}),
								);
								dispatch(removeMessage(message));
							}}
						>
							{t("bid.new")}
						</Button>
						<Button
							variant="outlined"
							size="small"
							onClick={(e) => handleClick(e)}
						>
							<ArrowDropDownIcon />
						</Button>
					</ButtonGroup>
					<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
						<MenuItem onClick={handleAddToRandomLot}>
							{t("bid.add_to_random_slot")}
						</MenuItem>
					</Menu>
					{bestMatch && (
						<Button
							variant="outlined"
							size="small"
							onClick={handleAddToBestMatch}
						>
							{bestMatch.name}
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	);
};
export default AuctionMessageCard;
