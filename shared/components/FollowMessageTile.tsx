import { Box, Button, Card, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { AppState } from "../../src/store";
import { AppEvent } from "../enums";
import useWebSocket from "../hooks/useWebSocket";
import type { IClientMessage, MessageId } from "../types";
import getColorByMessageType from "../utils/getColorByMessageType";
import MessageDate from "./MessageDate";

const FollowMessageTile = ({
	message,
	isAlertPlaying,
}: {
	message: IClientMessage;
	isAlertPlaying: boolean;
}) => {
	const { t } = useTranslation();
	const websocketService = useWebSocket();
	const { services } = useSelector((state: AppState) => state.servicesState);
	const follow = message.follow;

	return (
		<>
			{follow && (
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
					<Box
						sx={{
							width: "3rem",
							display: "grid",
							placeItems: "center",
							background: getColorByMessageType(message.type),
							minHeight: "100%",
						}}
					></Box>

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
								{follow.user_name} {t("message.follow")}{" "}
							</Typography>
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
							background: services[follow.service].color,
							minHeight: "100%",
						}}
					/>
				</Card>
			)}
		</>
	);
};
export default FollowMessageTile;
