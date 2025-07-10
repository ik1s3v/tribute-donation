import { Box, Button, Tab, Tabs } from "@mui/material";
import TabPanel from "../../../TabPanel";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ImageSettings from "./components/ImageSettings";
import AudioSettings from "./components/AudioSettings";
import { useNavigate, useParams } from "react-router";
import ImageIcon from "@mui/icons-material/Image";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import TitleIcon from "@mui/icons-material/Title";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ViewSettings from "./components/ViewSettings";
import { useDispatch, useSelector } from "react-redux";
import { showSnackBar } from "../../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../../shared/enums";
import TitleStyle from "./components/TitleStyle";
import MessageStyle from "./components/MessageStyle";
import {
	useGetAlertByIdQuery,
	useUpdateAlertSettingsMutation,
} from "../../../../api/alertsApi";
import type { AppState } from "../../../../store";
import { setAlert } from "../../../../store/slices/alertsSlice";
import type { SerializedError } from "@reduxjs/toolkit";

const AlertSettings = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState(0);
	const { t } = useTranslation();
	const { id } = useParams();
	const dispatch = useDispatch();
	const alert = useSelector((state: AppState) => state.alertsState.alert);
	const { data, error: getAlertByIdError } = useGetAlertByIdQuery(
		{ id },
		{ skip: !id, refetchOnMountOrArgChange: true },
	);
	const [updateAlertSettings] = useUpdateAlertSettingsMutation();

	useEffect(() => {
		if (getAlertByIdError) {
			dispatch(
				showSnackBar({
					message: getAlertByIdError.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [getAlertByIdError, dispatch]);

	useEffect(() => {
		if (data) {
			dispatch(setAlert(data));
		}
	}, [data, dispatch]);

	return (
		alert && (
			<>
				<h3>{alert.name.toUpperCase()}</h3>
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
					</Tabs>
				</Box>
				<>
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
									await updateAlertSettings({ alert }).unwrap();
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
						<Button onClick={() => navigate(-1)}>{t("back")}</Button>
					</div>
				</>
			</>
		)
	);
};
export default AlertSettings;
