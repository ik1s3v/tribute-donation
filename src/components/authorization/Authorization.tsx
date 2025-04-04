import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import RequestCode from "./components/RequestCode";
import SignIn from "./components/SignIn";
import { useMediaQuery, useTheme } from "@mui/material";

const Authorization = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				textAlign: "center",
				placeItems: "center",
			}}
		>
			<h1>{t("authorization.title")}</h1>

			<div
				style={{
					width: matches ? 300 : 500,
					display: "grid",
					gap: 15,
					marginTop: 130,
					textAlign: "start",
				}}
			>
				<Routes>
					<Route path="request-code" element={<RequestCode />} />
					<Route path="singin" element={<SignIn />} />
				</Routes>
			</div>
		</div>
	);
};

export default Authorization;
