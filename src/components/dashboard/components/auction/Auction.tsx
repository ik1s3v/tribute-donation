import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useTranslation } from "react-i18next";
import WheelIcon from "./components/WheelIcon";
import TabPanel from "../../../TabPanel";
import Lots from "./components/Lots";
import AuctionWheel from "./components/AuctionWheel";
import SettingsIcon from "@mui/icons-material/Settings";
import AuctionSettings from "./components/AuctionSettings";
import { useGetAuctionSettingsQuery } from "../../../../api/auctionApi";
import { useDispatch, useSelector } from "react-redux";
import { setAuctionSettings } from "../../../../store/slices/auctionSlice";
import type { AppState } from "../../../../store";

const Auction = () => {
	const [value, setValue] = useState(0);
	const { t } = useTranslation();
	const { data: auctionSettings } = useGetAuctionSettingsQuery();
	const dispatch = useDispatch();
	const { lots } = useSelector((state: AppState) => state.lotsState);

	useEffect(() => {
		if (auctionSettings) {
			dispatch(setAuctionSettings(auctionSettings));
		}
	}, [dispatch, auctionSettings]);

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
