import { TextField, Button } from "@mui/material";
import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AlertSeverity } from "../../../../shared/enums";
import { setIsClientAuthorized } from "../../../store/slices/mainSlice";
import { showSnackBar } from "../../../store/slices/snackBarSlice";

const Password = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [password, setPassword] = useState("");

	return (
		<>
			<label htmlFor="">{t("authorization.2fa_password")}</label>
			<TextField
				placeholder={t("authorization.password")}
				autoComplete="off"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button
				variant="contained"
				onClick={() =>
					invoke("check_password", { password })
						.then(() => {
							dispatch(setIsClientAuthorized(true));
							navigate("/dashboard/messages");
						})
						.catch((error) => {
							dispatch(
								showSnackBar({
									message: error,
									alertSeverity: AlertSeverity.error,
								}),
							);
						})
				}
			>
				{t("authorization.sign_in")}
			</Button>
		</>
	);
};
export default Password;
