import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const AuthorizationView = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	const { t } = useTranslation();

	return (
		<>
			<div style={{ position: "absolute", top: 10, left: 10 }}>
				<IconButton
					onClick={() => {
						navigate(-1);
					}}
				>
					<ArrowBackIosIcon />
				</IconButton>
			</div>
			<Box
				sx={{
					display: "grid",
					overflow: "hidden",
					textAlign: "center",
					placeContent: "center",
				}}
			>
				<h1>{t("authorization.title")}</h1>

				<div
					style={{
						width: matches ? 300 : 500,
						display: "grid",
						gap: 15,

						textAlign: "start",
					}}
				>
					{children}
				</div>
			</Box>
		</>
	);
};
export default AuthorizationView;
