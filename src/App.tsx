import { CircularProgress } from "@mui/material";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";
import { AlertSeverity } from "../shared/enums";
import useWebSocket from "../shared/hooks/useWebSocket";
import { showSnackBar } from "../shared/slices/snackBarSlice";
import { useInitMutation, useIsAuthorizedQuery } from "./api/authApi";
import { useGetSettingsQuery } from "./api/settingsApi";
import { AppSnackBar } from "./components/AppSnackBar";
import Authorization from "./components/authorization/Authorization";
import Dashboard from "./components/dashboard/Dashboard";
import UpdaterDialog from "./components/UpdaterDialog";
import { setSettings } from "./store/slices/settingsSlice";

function App() {
	const websocketService = useWebSocket();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { i18n } = useTranslation();
	const hasNavigated = useRef(false);
	const [
		init,
		{ error: initError, isSuccess: initIsSuccess, isLoading: initIsLoading },
	] = useInitMutation();
	const { error: isAuthorizedError, isLoading: isAuthorizedLoading } =
		useIsAuthorizedQuery(undefined, { skip: !initIsSuccess });
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

	useEffect(() => {
		init().then(() => {
			websocketService.connect();
		});
	}, [init, websocketService]);

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
		if (isAuthorizedError) {
			dispatch(
				showSnackBar({
					message: isAuthorizedError.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [dispatch, isAuthorizedError]);

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
			{settingsIsLoading || isAuthorizedLoading || initIsLoading ? (
				<CircularProgress sx={{ placeSelf: "center" }} />
			) : (
				<Routes>
					<Route path="/authorization/*" element={<Authorization />} />
					<Route path="/dashboard/*" element={<Dashboard />} />
				</Routes>
			)}
		</main>
	);
}

export default App;
