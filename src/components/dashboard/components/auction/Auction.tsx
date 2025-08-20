import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { AppState } from "../../../../store";
import TabPanel from "../../../TabPanel";
import AuctionSettings from "./components/AuctionSettings";
import AuctionWheel from "./components/AuctionWheel";
import Lots from "./components/Lots";
import WheelIcon from "./components/WheelIcon";

const Auction = () => {
	const [value, setValue] = useState(0);
	const { t } = useTranslation();
	const { lots } = useSelector((state: AppState) => state.lotsState);

	return (
		<>
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
						icon={<FormatListBulletedIcon />}
						iconPosition="start"
						label={t("auction.lots")}
					/>
					<Tab
						icon={<WheelIcon />}
						iconPosition="start"
						label={t("auction.wheel")}
					/>
					<Tab
						icon={<SettingsIcon />}
						iconPosition="start"
						label={t("auction.settings")}
					/>
				</Tabs>
			</Box>
			<div style={{ marginTop: 20 }}>
				<TabPanel index={0} value={value}>
					<Lots />
				</TabPanel>
				<TabPanel index={1} value={value}>
					<AuctionWheel lots={lots.filter((lot) => lot.amount)} />
				</TabPanel>
				<TabPanel index={2} value={value}>
					<AuctionSettings />
				</TabPanel>
			</div>
		</>
	);
};
export default Auction;
