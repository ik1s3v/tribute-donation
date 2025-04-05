import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Tab, Tabs } from "@mui/material";
import TabPanel from "../../../TabPanel";
import { invoke } from "@tauri-apps/api/core";
import { showSnackBar } from "../../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../../shared/enums";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Youtube from "./components/Youtube";
import Twitch from "./components/Twitch";
import Tiktok from "./components/Tiktok";
import type { AppState } from "../../../../store";
import type { IMediaSettings } from "../../../../../shared/types";
import { setMediaSettings } from "../../../../store/slices/mediaSlice";

const Media = () => {
	const [value, setValue] = useState(0);
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const mediaSettings = useSelector(
		(state: AppState) => state.mediaState.mediaSettings,
	);
	useEffect(() => {
		invoke<IMediaSettings>("get_media_settings")
			.then((mediaSettings) => {
				dispatch(setMediaSettings(mediaSettings));
			})
			.catch((error) => {
				dispatch(
					showSnackBar({
						message: error,
						alertSeverity: AlertSeverity.error,
					}),
				);
			});
	}, [dispatch]);
	return (
		mediaSettings && (
			<>
				<h1>{t("media.title")}</h1>
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
							icon={<YouTubeIcon />}
							iconPosition="start"
							label={t("media.twitch")}
						/>
						<Tab
							icon={<YouTubeIcon />}
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
							onClick={() => {
								invoke("update_media_settings", { mediaSettings })
									.then(() =>
										dispatch(
											dispatch(
												showSnackBar({
													message: t("success"),
													alertSeverity: AlertSeverity.success,
												}),
											),
										),
									)
									.catch((error) => {
										dispatch(
											showSnackBar({
												message: error,
												alertSeverity: AlertSeverity.error,
											}),
										);
									});
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
