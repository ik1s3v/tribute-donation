import SettingsIcon from "@mui/icons-material/Settings";
import {
	Card,
	IconButton,
	Menu,
	MenuItem,
	Switch,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { AppEvent } from "../../../../../../shared/enums";
import useWebSocket from "../../../../../../shared/hooks/useWebSocket";
import type { AlertId, IAlert } from "../../../../../../shared/types";
import {
	useGetAlertsQuery,
	useUpdateAlertSettingsMutation,
} from "../../../../../api/alertsApi";
import DeleteAlertDialog from "./DeleteAlertDialog";

const AlertTile = ({ alert }: { alert: IAlert }) => {
	const { refetch } = useGetAlertsQuery();

	const [status, setStatus] = useState(alert.status);
	const [updateAlertSettings] = useUpdateAlertSettingsMutation();
	const [dialogOpen, setDialogOpen] = useState(false);
	const isDefault = alert.id === "default";
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
		websocketService.send<AlertId>({
			event: AppEvent.TestAlert,
			data: alert.id,
		});
	};

	return (
		<>
			<DeleteAlertDialog
				open={dialogOpen}
				setOpen={setDialogOpen}
				alertId={alert.id}
			/>
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
						{!isDefault && (
							<Switch
								checked={status}
								onChange={async (_, value) => {
									setStatus(value);
									await updateAlertSettings({
										alert: { ...alert, status: value },
									}).unwrap();
									refetch();
								}}
							></Switch>
						)}
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
							{!isDefault && (
								<MenuItem
									onClick={() => {
										setDialogOpen(true);
									}}
								>
									{t("alert.delete")}
								</MenuItem>
							)}
						</Menu>
					</div>
				</div>
			</Card>
		</>
	);
};
export default AlertTile;
