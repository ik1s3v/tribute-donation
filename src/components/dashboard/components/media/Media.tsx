import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, Tab, Tabs } from "@mui/material";
import type { SerializedError } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AlertSeverity } from "../../../../../shared/enums";
import { setMediaSettings } from "../../../../../shared/slices/mediaSlice";
import { showSnackBar } from "../../../../../shared/slices/snackBarSlice";
import {
	useGetMediaSettingsQuery,
	useUpdateMediaSettingsMutation,
} from "../../../../api/mediaApi";
import type { AppState } from "../../../../store";
import TabPanel from "../../../TabPanel";
import WidgetUrl from "../alerts/components/WidgetUrl";
import TikTokIcon from "./components/TikTokIcon";
import Tiktok from "./components/Tiktok";
import Twitch from "./components/Twitch";
import TwitchIcon from "./components/TwitchIcon";
import Youtube from "./components/Youtube";

const Media = () => {
	const [value, setValue] = useState(0);
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { mediaSettings } = useSelector((state: AppState) => state.mediaState);
	const { data, error } = useGetMediaSettingsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});
	const [updateMediaSettings] = useUpdateMediaSettingsMutation();

	useEffect(() => {
		if (data) {
			dispatch(setMediaSettings(data));
		}
	}, [dispatch, data]);

	useEffect(() => {
		if (error) {
			dispatch(
				showSnackBar({
					message: error.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [dispatch, error]);

	return (
		mediaSettings && (
			<>
				<h1>{t("media.title")}</h1>
				<WidgetUrl
					widgetUrl={"http://localhost:12553/media"}
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
							icon={<YouTubeIcon />}
							iconPosition="start"
							label={t("media.youtube")}
						/>
						<Tab
							icon={<TwitchIcon />}
							iconPosition="start"
							label={t("media.twitch")}
						/>
						<Tab
							icon={<TikTokIcon />}
							iconPosition="start"
							label={t("media.tiktok")}
						/>
					</Tabs>
				</Box>

				<>
					<div style={{ marginTop: 20 }}>
						<TabPanel index={0} value={value}>
							<Youtube mediaSettings={mediaSettings} />
						</TabPanel>
						<TabPanel index={1} value={value}>
							<Twitch mediaSettings={mediaSettings} />
						</TabPanel>
						<TabPanel index={2} value={value}>
							<Tiktok mediaSettings={mediaSettings} />
						</TabPanel>
					</div>
					<div
						style={{
							display: "flex",
							gap: 20,
							justifyContent: "center",
							marginTop: 20,
						}}
					>
						<Button
							variant="contained"
							onClick={async () => {
								try {
									await updateMediaSettings({ mediaSettings }).unwrap();
									dispatch(
										showSnackBar({
											message: t("success"),
											alertSeverity: AlertSeverity.success,
										}),
									);
								} catch (error) {
									const err = error as SerializedError;
									dispatch(
										showSnackBar({
											message: err.message as string,
											alertSeverity: AlertSeverity.error,
										}),
									);
								}
							}}
						>
							{t("save")}
						</Button>
					</div>
				</>
			</>
		)
	);
};
export default Media;
