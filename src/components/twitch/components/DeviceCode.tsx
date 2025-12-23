import { Button, CircularProgress } from "@mui/material";
import { openUrl } from "@tauri-apps/plugin-opener";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AlertSeverity } from "../../../../shared/enums";
import { showSnackBar } from "../../../../shared/slices/snackBarSlice";
import {
	useGetDeviceCodeQuery,
	useGetTokenMutation,
	useTwitchConnectMutation,
} from "../../../api/twitchApi";

const DeviceCode = () => {
	const { data: deviceCodeResponse, error, refetch } = useGetDeviceCodeQuery();
	const [requestedAt, setRequestedAt] = useState(Date.now());
	const [getToken, { isSuccess: isSuccessToken }] = useGetTokenMutation();
	const [twitchConnect] = useTwitchConnectMutation();
	const [isPullingToken, setIsPullingToken] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();

	useEffect(() => {
		if (error) {
			dispatch(
				showSnackBar({
					message: error.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [error, dispatch]);

	useEffect(() => {
		if (!deviceCodeResponse) return;
		const interval = setInterval(async () => {
			if (deviceCodeResponse.expires_in * 1000 < Date.now() - requestedAt) {
				setIsPullingToken(false);
				dispatch(
					showSnackBar({
						message: t("twitch.device_code_expired"),
						alertSeverity: AlertSeverity.warning,
					}),
				);
				refetch();
				setRequestedAt(Date.now());
				return;
			}
			if (isPullingToken && !isSuccessToken) {
				try {
					await getToken({
						deviceCode: deviceCodeResponse.device_code as string,
					}).unwrap();
					await twitchConnect().unwrap();
					setIsPullingToken(false);
					navigate(-1);
				} catch {
					return;
				}
			}
		}, deviceCodeResponse.interval * 1000);

		return () => clearInterval(interval);
	}, [
		t,
		isPullingToken,
		isSuccessToken,
		deviceCodeResponse,
		getToken,
		navigate,
		dispatch,
		refetch,
		twitchConnect,
		requestedAt,
	]);

	if (!deviceCodeResponse) {
		return (
			<div style={{ display: "flex", placeContent: "center" }}>
				<CircularProgress />
			</div>
		);
	}
	return (
		<>
			<div style={{ textAlign: "center" }}>
				{t("twitch.user_code")}: {deviceCodeResponse.user_code}
			</div>
			<Button
				variant="contained"
				disabled={!deviceCodeResponse || isPullingToken}
				onClick={() => {
					if (!deviceCodeResponse) return;
					setIsPullingToken(true);
					openUrl(deviceCodeResponse.verification_uri);
				}}
			>
				{!isPullingToken
					? t("twitch.authorize_with_code")
					: t("twitch.waiting_authorization")}
			</Button>
		</>
	);
};
export default DeviceCode;
