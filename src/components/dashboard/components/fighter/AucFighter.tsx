import SettingsIcon from "@mui/icons-material/Settings";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TabPanel from "../../../TabPanel";
import WidgetUrl from "../alerts/components/WidgetUrl";
import AucFighterSettings from "./components/AucFighterSettings";
import Game from "./components/Game";

const AucFighter = () => {
	const [value, setValue] = useState(0);
	const { t } = useTranslation();

	return (
		<>
			<h1>{t("fighter.title")}</h1>
			<WidgetUrl
				widgetUrl={"http://localhost:12553/auc-fighter/default.htm"}
				text={t("widget.url")}
			/>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					background: "wh",
					display: "grid",
					placeContent: "center",
				}}
			>
				<Tabs
					value={value}
					variant="scrollable"
					allowScrollButtonsMobile
					onChange={(_, value) => setValue(value)}
					slotProps={{
						indicator: { style: { transition: "none" } },
					}}
				>
					<Tab
						icon={<VideogameAssetIcon />}
						iconPosition="start"
						label={t("fighter.game")}
					/>
					<Tab
						icon={<SettingsIcon />}
						iconPosition="start"
						label={t("fighter.settings")}
					/>
				</Tabs>
			</Box>
			<div style={{ marginTop: 20 }}>
				<TabPanel index={0} value={value}>
					<Game />
				</TabPanel>
				<TabPanel index={1} value={value}>
					<AucFighterSettings />
				</TabPanel>
			</div>
		</>
	);
};
export default AucFighter;
