import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SettingsIcon from "@mui/icons-material/Settings";
import { Card, IconButton, Tooltip, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Currency } from "../../../../../../shared/enums";
import type { IAlert } from "../../../../../../shared/types";
import { useTestAlertMutation } from "../../../../../api/alertsApi";

const AlertTile = ({ alert }: { alert: IAlert }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const theme = useTheme();
	const [testAlert] = useTestAlertMutation();
	const handleTestAlert = () => {
		testAlert({
			message: {
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
				>
					<Tooltip
						children={
							<IconButton onClick={handleTestAlert}>
								<ReportProblemIcon />
							</IconButton>
						}
						title={t("alert.test_name")}
					></Tooltip>
				</div>
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
						<IconButton
							onClick={() => {
								navigate(`/dashboard/alerts/${alert.id}`);
							}}
						>
							<SettingsIcon />
						</IconButton>
					</div>
				</div>
			</Card>
		</>
	);
};
export default AlertTile;
