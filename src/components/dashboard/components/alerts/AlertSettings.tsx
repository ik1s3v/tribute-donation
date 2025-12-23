import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ImageIcon from "@mui/icons-material/Image";
import SettingsIcon from "@mui/icons-material/Settings";
import TitleIcon from "@mui/icons-material/Title";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { convertFileSrc } from "@tauri-apps/api/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AlertView from "../../../../../shared/components/AlertView";
import type { IAlert, IClientMessage } from "../../../../../shared/types";
import getTestAlertMessage from "../../../../../shared/utils/getTestAlertMessage";
import type { AppState } from "../../../../store";
import TabPanel from "../../../TabPanel";
import AudioSettings from "./components/AudioSettings";
import GeneralSettings from "./components/GeneralSettings";
import ImageSettings from "./components/ImageSettings";
import MessageStyle from "./components/MessageStyle";
import TitleStyle from "./components/TitleStyle";
import ViewSettings from "./components/ViewSettings";

const AlertSettings = ({
	name,
	isDefault,
	onSave,
}: {
	name: string;
	isDefault: boolean;
	onSave: () => void;
}) => {
	const navigate = useNavigate();
	const [value, setValue] = useState(0);
	const { t } = useTranslation();
	const { alert } = useSelector((state: AppState) => state.alertsState);
	const { appDataDir } = useSelector((state: AppState) => state.mainState);

	return (
		<>
			{alert && (
				<>
					<h3>{name}</h3>
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
								icon={<ViewCarouselIcon />}
								iconPosition="start"
								label={t("alert.view")}
							/>
							<Tab
								icon={<ImageIcon />}
								iconPosition="start"
								label={t("alert.image")}
							/>
							<Tab
								icon={<AudiotrackIcon />}
								iconPosition="start"
								label={t("alert.audio")}
							/>
							<Tab
								icon={<TitleIcon />}
								iconPosition="start"
								label={t("alert.title")}
							/>
							<Tab
								icon={<TitleIcon />}
								iconPosition="start"
								label={t("alert.message")}
							/>
							{!isDefault && (
								<Tab
									icon={<SettingsIcon />}
									iconPosition="start"
									label={t("general")}
								/>
							)}
						</Tabs>
					</Box>
					<div style={{ marginTop: 20 }}>
						<TabPanel index={0} value={value}>
							<ViewSettings />
						</TabPanel>
						<TabPanel index={1} value={value}>
							<ImageSettings />
						</TabPanel>
						<TabPanel index={2} value={value}>
							<AudioSettings />
						</TabPanel>

						<TabPanel index={3} value={value}>
							<TitleStyle />
						</TabPanel>
						<TabPanel index={4} value={value}>
							<MessageStyle />
						</TabPanel>
						<TabPanel index={5} value={value}>
							<GeneralSettings />
						</TabPanel>
					</div>
					<div style={{ margin: 20, display: "grid", placeContent: "center" }}>
						<AlertView
							width={400}
							height={300}
							alert={alert as IAlert}
							backgroundColor="green"
							message={
								getTestAlertMessage({
									type: alert.type,
									alert,
									userName: t("text.name"),
									text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
								}) as IClientMessage
							}
							imageSrc={convertFileSrc(`${appDataDir}/static/${alert?.image}`)}
						/>
					</div>
					<div
						style={{
							display: "flex",
							gap: 20,
							justifyContent: "center",
							marginTop: 20,
						}}
					>
						<Button variant="contained" onClick={onSave}>
							{t("save")}
						</Button>
						<Button onClick={() => navigate(-1)}>{t("back")}</Button>
					</div>
				</>
			)}
		</>
	);
};
export default AlertSettings;
