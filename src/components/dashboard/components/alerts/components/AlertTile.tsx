import SettingsIcon from "@mui/icons-material/Settings";
import { Card, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { AppEvent, Currency } from "../../../../../../shared/enums";
import useWebSocket from "../../../../../../shared/hooks/useWebSocket";
import type { IAlert } from "../../../../../../shared/types";

const AlertTile = ({ alert }: { alert: IAlert }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const websocketService = useWebSocket();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const theme = useTheme();
	const handleTestAlert = () => {
		websocketService.send({
			event: AppEvent.Message,
			data: {
				id: crypto.randomUUID(),
				telegram_message_id: crypto.randomUUID(),
				amount: 100,
				user_name: t("alert.test_name"),
				played: false,
				text: t("alert.test_text"),
				currency: Currency.EUR,
				created_at: Math.round(new Date().getTime() / 1000),
			},
		});
	};

	return (
		<>
			<Card
				sx={{
					display: "flex",
					border: "1px solid",
					borderRadius: 3,
					borderColor: theme.palette.background.default,
					minWidth: 200,
					minHeight: "5.3rem",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						display: "flex",
						placeItems: "center",
						width: "3rem",
						background: theme.palette.background.default,
						minHeight: "100%",
					}}
				></div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
						paddingLeft: 10,
					}}
				>
					<span>{alert.name}</span>

					<div style={{ alignSelf: "center", justifySelf: "end" }}>
						<IconButton onClick={handleClick}>
							<SettingsIcon />
						</IconButton>
						<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
							<MenuItem
								onClick={() => {
									navigate(`/dashboard/alerts/${alert.id}`);
								}}
							>
								{t("alert.configure")}
							</MenuItem>
							<MenuItem onClick={handleTestAlert}>{t("alert.test")}</MenuItem>
						</Menu>
					</div>
				</div>
			</Card>
		</>
	);
};
export default AlertTile;
