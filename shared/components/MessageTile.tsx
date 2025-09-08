import ReplayIcon from "@mui/icons-material/Replay";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppEvent } from "../enums";
import useWebSocket from "../hooks/useWebSocket";
import type { IMessage } from "../types";
import getColorByMediaType from "../utils/getColorByMediaType";
import getCurrencySymbol from "../utils/getCurrencySymbol";
import MediaTile from "./MediaTile";
import MessageDate from "./MessageDate";

const MessageTile = ({
	message,
	isAlertPlaying,
	isMediaPlaying,
}: {
	message: IMessage;
	isAlertPlaying: boolean;
	isMediaPlaying: boolean;
}) => {
	const { t } = useTranslation();
	const websocketService = useWebSocket();

	return (
		<>
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
				{isMediaPlaying && <MediaTile message={message} />}
				<Box
					sx={(theme) => ({
						width: "3rem",
						display: "grid",
						placeItems: "center",
						background: message.media
							? getColorByMediaType(message.media.media_type)
							: theme.palette.background.paper,
						minHeight: "100%",
					})}
				>
					{message.media && !isMediaPlaying && !isAlertPlaying && (
						<IconButton
							onClick={() => {
								websocketService.send({
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
						<MessageDate message={message} />
					</div>
					<div>
						<Typography
							sx={(theme) => ({
								color: theme.palette.primary.main,
							})}
						>
							{message.user_name} {t("message.donate")}{" "}
							{getCurrencySymbol(message.currency)}
							{message.amount}
						</Typography>
					</div>
					<div style={{ wordBreak: "break-word" }}>
						<span>{message.text}</span>
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
									websocketService.send({
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
								websocketService.send({
									event: AppEvent.SkipAlert,
									data: message.id,
								});
							}}
						>
							{t("message.skip")}
						</Button>
					</div>
				</div>
			</Card>
		</>
	);
};
export default MessageTile;
