import { Button, TextField } from "@mui/material";
import { invoke } from "@tauri-apps/api/core";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setIsClientAuthorized } from "../../../store/slices/mainSlice";
import { useState } from "react";
import { showSnackBar } from "../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../shared/enums";

const SignIn = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [phoneCode, setPhoneCode] = useState("");

	return (
		<>
			<label htmlFor="">{t("authorization.telegram_code")}</label>
			<TextField
				placeholder={t("authorization.your_code")}
				autoComplete="off"
				onChange={(e) => setPhoneCode(e.target.value)}
			/>
			<Button
				variant="contained"
				onClick={() =>
					invoke("sign_in", { phoneCode: phoneCode.trim() })
						.then(() => {
							dispatch(setIsClientAuthorized(true));
							navigate("/dashboard/messages");
						})
						.catch((error) => {
							if (error === "Password required") {
								navigate("/authorization/password");
								return;
							}
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
export default SignIn;
