import CallToActionIcon from "@mui/icons-material/CallToAction";
import SettingsIcon from "@mui/icons-material/Settings";
import TitleIcon from "@mui/icons-material/Title";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import GoalView from "../../../../../../shared/components/GoalView";
import type { AppState } from "../../../../../store";
import TabPanel from "../../../../TabPanel";
import GoalElementsSettings from "./GoalElementsSettings";
import GoalGeneralSettings from "./GoalGeneralSettings";
import GoalIcon from "./GoalIcon";
import GoalProgressSettings from "./GoalProgressSettings";
import LimitsStyle from "./LimitsStyle";
import ProgressStyle from "./ProgressStyle";
import TItleStyle from "./TItleStyle";

const GoalSettings = ({ onSave }: { onSave: () => void }) => {
	const navigate = useNavigate();
	const [value, setValue] = useState(0);
	const { t } = useTranslation();
	const { goal } = useSelector((state: AppState) => state.goalsState);

	return (
		<>
			{goal && (
				<>
					<h3>{goal.title.toUpperCase()}</h3>
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
								icon={<SettingsIcon />}
								iconPosition="start"
								label={t("general")}
							/>
							<Tab
								icon={<CallToActionIcon />}
								iconPosition="start"
								label={t("goal.elements")}
							/>
							<Tab
								icon={
									<div style={{ marginLeft: 8 }}>
										<GoalIcon />
									</div>
								}
								iconPosition="start"
								label={t("goal.progress")}
							/>
							<Tab
								icon={<TitleIcon />}
								iconPosition="start"
								label={t("goal.title")}
							/>
							<Tab
								icon={<TitleIcon />}
								iconPosition="start"
								label={t("goal.progress")}
							/>
							<Tab
								icon={<TitleIcon />}
								iconPosition="start"
								label={t("goal.limits")}
							/>
						</Tabs>
					</Box>
					<>
						<div style={{ marginTop: 20 }}>
							<TabPanel index={0} value={value}>
								<GoalGeneralSettings />
							</TabPanel>
							<TabPanel index={1} value={value}>
								<GoalElementsSettings />
							</TabPanel>
							<TabPanel index={2} value={value}>
								<GoalProgressSettings />
							</TabPanel>
							<TabPanel index={3} value={value}>
								<TItleStyle />
							</TabPanel>
							<TabPanel index={4} value={value}>
								<ProgressStyle />
							</TabPanel>
							<TabPanel index={5} value={value}>
								<LimitsStyle />
							</TabPanel>
						</div>

						{goal && (
							<div
								style={{
									display: "grid",
									placeContent: "center",
									marginTop: 20,
								}}
							>
								<GoalView
									goal={goal}
									width={400}
									height={300}
									backgroundColor="green"
									currentAmount={Math.floor(goal.amount_raise / 2)}
								/>
							</div>
						)}
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
				</>
			)}
		</>
	);
};
export default GoalSettings;
