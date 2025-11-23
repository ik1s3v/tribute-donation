import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import {
	Button,
	ButtonGroup,
	Card,
	CardContent,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { findBestMatch } from "string-similarity";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import type { IClientDonation, ILot } from "../../../../../../shared/types";
import getRandomColor from "../../../../../helpers/getRandomColor";
import type { AppState } from "../../../../../store";
import { auctionDonationsSlice } from "../../../../../store/slices/donationsSlice.ts";
import { addLot, updateLot } from "../../../../../store/slices/lotsSlice";

const AuctionDonationCard = ({ donation }: { donation: IClientDonation }) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { removeDonation } = auctionDonationsSlice.actions;
	const { lots, currentId } = useSelector((state: AppState) => state.lotsState);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { colors } = useSelector((state: AppState) => state.mainState);

	const bestMatch = useMemo(() => {
		if (!donation.text) return;
		const lotsNames = lots.map(({ name }) => name || "");
		if (!lotsNames.length) return;
		const {
			bestMatch: { rating },
			bestMatchIndex,
		} = findBestMatch(donation.text, lotsNames);
		return rating > 0.4
			? { ...lots[bestMatchIndex], index: bestMatchIndex + 1 }
			: null;
	}, [lots, donation.text]);

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
				amount: (randomLot.amount ?? 0) + donation.amount,
			}),
		);
		dispatch(
			showSnackBar({
				message: `+${donation.amount}      #${randomLot.fastId}`,
				alertSeverity: AlertSeverity.success,
			}),
		);
		dispatch(removeDonation(donation));
		setAnchorEl(null);
	}, [dispatch, lots, donation, removeDonation]);

	const handleAddToBestMatch = useCallback(() => {
		if (!bestMatch) return;
		dispatch(
			updateLot({
				...bestMatch,
				amount: (bestMatch.amount ?? 0) + donation.amount,
			}),
		);
		dispatch(
			showSnackBar({
				message: `+${donation.amount}      #${bestMatch.fastId}`,
				alertSeverity: AlertSeverity.success,
			}),
		);
		dispatch(removeDonation(donation));
		setAnchorEl(null);
	}, [dispatch, bestMatch, removeDonation, donation]);

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
						{donation.amount} {donation.user_name}
					</Typography>
					<IconButton
						onClick={() => {
							dispatch(removeDonation(donation));
						}}
						title={t("bid.delete")}
						size="large"
					>
						<CloseIcon />
					</IconButton>
				</div>
				<Typography sx={{ wordWrap: "break-word" }}>{donation.text}</Typography>
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
										name: donation.text ?? "",
										amount: donation.exchanged_amount,
										color: getRandomColor(colors),
									}),
								);
								dispatch(removeDonation(donation));
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
							sx={{ wordBreak: "break-all" }}
						>
							{bestMatch.name}
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	);
};
export default AuctionDonationCard;
