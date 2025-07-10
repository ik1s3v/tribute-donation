import { AppSnackBar } from "./components/AppSnackBar";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Dashboard from "./components/dashboard/Dashboard";
import Authorization from "./components/authorization/Authorization";
import { Route, Routes, useNavigate } from "react-router";
import { showSnackBar } from "./store/slices/snackBarSlice";
import { AlertSeverity } from "../shared/enums";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import UpdaterDialog from "./components/UpdaterDialog";
import { useInitQuery, useIsAuthorizedQuery } from "./api/authApi";
import { useGetSettingsQuery } from "./api/settingsApi";
import { setSettings } from "./store/slices/settingsSlice";

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { i18n } = useTranslation();
	const hasNavigated = useRef(false);
	const {
		error: initError,
		isSuccess: initIsSuccess,
		isLoading: initIsLoading,
	} = useInitQuery();
	const {
		data: isAuthorized,
		error: isAuthorizedError,
		isLoading: isAuthorizedLoading,
		isSuccess: isAuthorizedSuccess,
	} = useIsAuthorizedQuery(undefined, { skip: !initIsSuccess });
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
		if (isAuthorizedSuccess && !hasNavigated.current) {
			hasNavigated.current = true;
			if (isAuthorized) {
				navigate("/dashboard/messages");
			} else {
				navigate("/authorization/request-code");
			}
		}
	}, [navigate, isAuthorizedSuccess, isAuthorized]);

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
