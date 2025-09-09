import { Card } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { IAlertsGroup } from "../../../../../shared/types";
import AddNewAlertVariantButton from "./components/AddNewAlertVariantButton";
import AlertTile from "./components/AlertTile";
import WidgetUrl from "./components/WidgetUrl";

const AlertsGroup = ({ alertsGroup }: { alertsGroup: IAlertsGroup }) => {
	const widgetUrl = `http://localhost:12553/alert?group_id=${alertsGroup.group_id}`;
	const { t } = useTranslation();

	return (
		<Card
			sx={{
				padding: "20px",
				display: "grid",
				gap: "5px",
				position: "relative",
				marginBottom: "10px",
			}}
		>
			<>
				<h3>
					{t("alerts.group")} {alertsGroup.group_id.toUpperCase()}
				</h3>

				<WidgetUrl widgetUrl={widgetUrl} text={t("widget.url")} />
				<div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
					{alertsGroup.items.map((alert) => (
						<AlertTile alert={alert} key={alert.id} />
					))}
					<AddNewAlertVariantButton group_id={alertsGroup.group_id} />
				</div>
			</>
		</Card>
	);
};
export default AlertsGroup;
