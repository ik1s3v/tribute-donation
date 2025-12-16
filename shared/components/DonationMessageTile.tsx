import ReplayIcon from "@mui/icons-material/Replay";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { AppState } from "../../src/store";
import { AppEvent } from "../enums";
import useWebSocket from "../hooks/useWebSocket";
import type { IClientMessage, MessageId } from "../types";
import getColorByMediaType from "../utils/getColorByMediaType";
import getCurrencySymbol from "../utils/getCurrencySymbol";
import MediaTile from "./MediaTile";
import MessageDate from "./MessageDate";

const DonationMessageTile = ({
	message,
	isAlertPlaying,
	isMediaPlaying,
}: {
	message: IClientMessage;
	isAlertPlaying: boolean;
	isMediaPlaying: boolean;
}) => {
	const { t } = useTranslation();
	const websocketService = useWebSocket();
	const { services } = useSelector((state: AppState) => state.servicesState);
	const donation = message.donation;

	return (
		<>
			{donation && (
				<Card
					sx={(theme) => ({
						display: "flex",
						position: "relative",
						border: "2px solid",
						borderRadius: 3,
						boxSizing: "border-box",
						borderColor: isAlertPlaying
							? theme.palette.primary.main
							: theme.palette.background.default,
						marginBottom: "5px",
						minHeight: "5.3rem",
						overflow: "hidden",
					})}
				>
					{isMediaPlaying && <MediaTile donation={donation} />}
					<Box
						sx={(theme) => ({
							width: "3rem",
							display: "grid",
							placeItems: "center",
							background: donation?.media
								? getColorByMediaType(donation.media.media_type)
								: theme.palette.background.paper,
							minHeight: "100%",
						})}
					>
						{donation?.media && !isMediaPlaying && !isAlertPlaying && (
							<IconButton
								onClick={() => {
									websocketService.send<IClientMessage>({
										event: AppEvent.ReplayMedia,
										data: message,
									});
								}}
							>
								<ReplayIcon />
							</IconButton>
						)}
					</Box>

					<div style={{ width: "100%", padding: 15 }}>
						<div style={{ float: "right" }}>
							<MessageDate createdAt={message.created_at} />
						</div>
						<div>
							<Typography
								sx={(theme) => ({
									color: theme.palette.primary.main,
								})}
							>
								{donation.user_name} {t("message.donate")}{" "}
								{getCurrencySymbol(donation.currency)}
								{donation.amount}
							</Typography>
						</div>
						<div style={{ wordBreak: "break-word" }}>
							<span>{donation.text}</span>
						</div>

						<div
							style={{ display: "grid", gridAutoFlow: "column", marginTop: 10 }}
						>
							{!isAlertPlaying && (
								<Button
									size="small"
									sx={{
										justifySelf: "start",
										fontSize: 12,
									}}
									onClick={() => {
										websocketService.send<IClientMessage>({
											event: AppEvent.ReplayAlert,
											data: message,
										});
									}}
								>
									{t("message.replay")}
								</Button>
							)}

							<Button
								size="small"
								sx={{
									justifySelf: "end",
									fontSize: 12,
								}}
								onClick={() => {
									websocketService.send<MessageId>({
										event: AppEvent.SkipAlert,
										data: message.id,
									});
								}}
							>
								{t("message.skip")}
							</Button>
						</div>
					</div>
					<Box
						sx={{
							width: "3rem",
							display: "grid",
							placeItems: "center",
							background: services[donation.service].color,
							minHeight: "100%",
						}}
					/>
				</Card>
			)}
		</>
	);
};
export default DonationMessageTile;
