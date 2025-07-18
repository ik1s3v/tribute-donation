import { Card } from "@mui/material";
import type { IAlertsGroup } from "../../../../../shared/types";
import WidgetUrl from "./components/WidgetUrl";
import AlertTile from "./components/AlertTile";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { AppState } from "../../../../store";

const AlertsGroup = ({ alertsGroup }: { alertsGroup: IAlertsGroup }) => {
	const widgetUrl = `http://localhost:12553/alert?group_id=${alertsGroup.group_id}`;
	const connectedAlerts = useSelector(
		(state: AppState) => state.alertsState.connectedAlerts,
	);
	const { t } = useTranslation();
	return (
		<Card
			sx={{
				padding: "20px",
				display: "grid",
				gap: "5px",
				position: "relative",
			}}
		>
			<>
				<div
					style={{
						top: 10,
						right: 10,
						height: 10,
						width: 10,
						background: connectedAlerts.includes(alertsGroup.group_id)
							? "green"
							: undefined,
						position: "absolute",
						borderRadius: 50,
					}}
				/>
				<h3>
					{t("alerts.group")} {alertsGroup.group_id.toUpperCase()}
				</h3>
				<WidgetUrl widgetUrl={widgetUrl} />
				<div style={{ display: "flex" }}>
					{alertsGroup.items.map((alert) => (
						<AlertTile alert={alert} key={alert.id} />
					))}
				</div>
			</>
		</Card>
	);
};
export default AlertsGroup;
