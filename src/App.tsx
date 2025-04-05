import { invoke } from "@tauri-apps/api/core";
import { AppSnackBar } from "./components/AppSnackBar";
import { useEffect, useState } from "react";
import type { AppState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { setIsClientAuthorized, setIsInit } from "./store/slices/mainSlice";
import Dashboard from "./components/dashboard/Dashboard";
import Authorization from "./components/authorization/Authorization";
import { Route, Routes, useNavigate } from "react-router";
import type { ISettings } from "../shared/types";
import { showSnackBar } from "./store/slices/snackBarSlice";
import { AlertSeverity } from "../shared/enums";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import UpdaterDialog from "./components/UpdaterDialog";
function App() {
	const isInit = useSelector((state: AppState) => state.mainState.isInit);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isPending, setIsPending] = useState(true);
	const [isLanguageSet, setIsLanguageSet] = useState(false);
	const { i18n } = useTranslation();

	useEffect(() => {
		if (isInit) {
			invoke<ISettings>("get_settings")
				.then((settings) => {
					i18n.changeLanguage(settings.language);
					setIsLanguageSet(true);
				})
				.catch((error) => {
					dispatch(
						showSnackBar({
							message: error,
							alertSeverity: AlertSeverity.error,
						}),
					);
				});
		}
	}, [dispatch, i18n, isInit]);

	useEffect(() => {
		if (!isInit) {
			invoke<boolean>("init")
				.then(async () => {
					dispatch(setIsInit(true));
					const isAuthorized = await invoke<boolean>("is_authorized");
					if (isAuthorized) {
						navigate("/dashboard/messages");
					} else {
						navigate("/authorization/request-code");
					}

					dispatch(setIsClientAuthorized(isAuthorized));
				})
				.catch((error) => {
					setIsPending(false);
					dispatch(
						showSnackBar({
							message: error,
							alertSeverity: AlertSeverity.error,
						}),
					);
				})
				.finally(() => {
					setIsPending(false);
				});
		}
	}, [dispatch, isInit, navigate]);

	return (
		<main style={{ display: "grid", height: "100dvh" }}>
			{isLanguageSet && <UpdaterDialog />}
			<AppSnackBar />
			{isPending ? (
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
