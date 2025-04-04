import { Card, IconButton, useTheme } from "@mui/material";
import type { IAlert } from "../../../../../../shared/types";
import { useNavigate } from "react-router";
import SettingsIcon from "@mui/icons-material/Settings";

const AlertTile = ({ alert }: { alert: IAlert }) => {
	const navigate = useNavigate();
	const theme = useTheme();

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
						width: "3rem",
						background: theme.palette.background.default,
						minHeight: "100%",
					}}
				/>
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
