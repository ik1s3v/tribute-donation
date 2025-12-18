import { CircularProgress } from "@mui/material";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";
import { AlertSeverity, ServiceType } from "../shared/enums";
import useWebSocket from "../shared/hooks/useWebSocket";
import { showSnackBar } from "../shared/slices/snackBarSlice";
import type { IService, IStreamElementsAuth } from "../shared/types";
import { useInitMutation } from "./api";
import { useGetServiceWithAuthByIdQuery } from "./api/servicesApi";
import { useGetSettingsQuery } from "./api/settingsApi";
import { AppSnackBar } from "./components/AppSnackBar";
import Dashboard from "./components/dashboard/Dashboard";
import ServicesSettings from "./components/services/ServicesSettings";
import StreamElements from "./components/streamelements/StreamElements";
import TelegramAuthorization from "./components/telegram-authorization/TelegramAuthorization";
import Twitch from "./components/twitch/Twitch";
import UpdaterDialog from "./components/UpdaterDialog";
import useStreamElementsSocketService from "./hooks/useStreamElementsService";
import type { AppState } from "./store";
import { setSettings } from "./store/slices/settingsSlice";

function App() {
	const websocketService = useWebSocket();
	const streamElementsSocketService = useStreamElementsSocketService();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { i18n } = useTranslation();
	const hasNavigated = useRef(false);
	const { isConnected, isAuthenticated } = useSelector(
		(state: AppState) => state.streamElementsState,
	);
	const [
		init,
		{ error: initError, isSuccess: initIsSuccess, isLoading: initIsLoading },
	] = useInitMutation();

	const {
		data: settings,
		error: settingsError,
		isLoading: settingsIsLoading,
	} = useGetSettingsQuery(undefined, {
		skip: !initIsSuccess,
		refetchOnMountOrArgChange: true,
		refetchOnFocus: true,
		refetchOnReconnect: true,
	});

	const { data: streamelementsService } = useGetServiceWithAuthByIdQuery(
		{ id: ServiceType.Streamelements },
		{
			skip: !initIsSuccess,
		},
	);

	useEffect(() => {
		init();
	}, [init]);

	useEffect(() => {
		if (initIsSuccess) {
			websocketService.connect();
		}
	}, [initIsSuccess, websocketService]);

	useEffect(() => {
		if (isConnected && streamelementsService && !isAuthenticated) {
			streamElementsSocketService.authenticate(
				(streamelementsService as IService<IStreamElementsAuth, undefined>).auth
					?.jwt_token,
			);
		}
	}, [
		isConnected,
		isAuthenticated,
		streamelementsService,
		streamElementsSocketService,
	]);

	useEffect(() => {
		if (settings) {
			i18n.changeLanguage(settings.language);
			dispatch(setSettings(settings));
		}
	}, [i18n, settings, dispatch]);

	useEffect(() => {
		if (settingsError) {
			dispatch(
				showSnackBar({
					message: settingsError.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [dispatch, settingsError]);

	useEffect(() => {
		if (initError) {
			dispatch(
				showSnackBar({
					message: initError.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [dispatch, initError]);

	useEffect(() => {
		if (!hasNavigated.current) {
			hasNavigated.current = true;
			navigate("/dashboard/messages");
		}
	}, [navigate]);

	return (
		<main style={{ display: "grid", height: "100dvh" }}>
			{settings && <UpdaterDialog />}
			<AppSnackBar />
			{settingsIsLoading || initIsLoading ? (
				<CircularProgress sx={{ placeSelf: "center" }} />
			) : (
				<Routes>
					<Route
						path="/telegram-authorization/*"
						element={<TelegramAuthorization />}
					/>
					<Route path="/streamelements/*" element={<StreamElements />} />
					<Route path="/twitch/*" element={<Twitch />} />
					<Route path="/dashboard/*" element={<Dashboard />} />
					<Route path="/services-settings/*" element={<ServicesSettings />} />
				</Routes>
			)}
		</main>
	);
}

export default App;
