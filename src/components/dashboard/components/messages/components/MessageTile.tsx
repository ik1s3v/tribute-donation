import { useTranslation } from "react-i18next";
import { invoke } from "@tauri-apps/api/core";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import type { IMessage } from "../../../../../../shared/types";
import getCurrencySymbol from "../../../../../../shared/utils/getCurrencySymbol";
import { format } from "date-fns";
import ReplayIcon from "@mui/icons-material/Replay";

const MessageTile = ({
	message,
	isPlaying,
}: { message: IMessage; isPlaying: boolean }) => {
	const { t } = useTranslation();
	const date = format(
		new Date(message.created_at * 1000),
		"yyyy-MM-dd HH:mm:ss",
	);

	return (
		<>
			<Card
				sx={(theme) => ({
					display: "flex",
					border: "2px solid",
					borderRadius: 3,
					boxSizing: "border-box",
					borderColor: isPlaying
						? theme.palette.primary.main
						: theme.palette.background.default,
					marginBottom: "1rem",
					minHeight: "5.3rem",
					overflow: "hidden",
				})}
			>
				<Box
					sx={(theme) => ({
						width: "3rem",
						background: theme.palette.background.paper,
						minHeight: "100%",
					})}
				/>

				<div style={{ width: "100%", padding: 15 }}>
					<span style={{ float: "right", fontSize: 12 }}>{date}</span>
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
					<div>
						<span>{message.text}</span>
					</div>

					<div style={{ display: "grid", gridAutoFlow: "column" }}>
						{!isPlaying && (
							<IconButton
								size="small"
								sx={{
									justifySelf: "start",
								}}
								onClick={() => {
									invoke("replay_alert", { message });
								}}
							>
								<ReplayIcon />
							</IconButton>
						)}

						<Button
							size="small"
							sx={{
								justifySelf: "end",
							}}
							onClick={() => {
								invoke("skip_alert", { id: message.id });
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
