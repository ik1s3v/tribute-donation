import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import Password from "./components/Password";
import RequestCode from "./components/RequestCode";
import SignIn from "./components/SignIn";

const TelegramAuthorization = () => {
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
					<Route path="password" element={<Password />} />
				</Routes>
			</div>
		</div>
	);
};

export default TelegramAuthorization;
