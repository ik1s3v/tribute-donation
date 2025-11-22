import { TextField } from "@mui/material";
import type { SerializedError } from "@reduxjs/toolkit";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AlertSeverity } from "../../../../shared/enums";
import { showSnackBar } from "../../../../shared/slices/snackBarSlice";
import { useSignInMutation } from "../../../api/telegramApi";
import AuthButton from "./AuthButton";

const SignIn = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [phoneCode, setPhoneCode] = useState("");
	const dispatch = useDispatch();
	const [signin, { isLoading }] = useSignInMutation();
	return (
		<>
			<label htmlFor="">{t("authorization.telegram_code")}</label>
			<TextField
				placeholder={t("authorization.your_code")}
				autoComplete="off"
				onChange={(e) => setPhoneCode(e.target.value)}
			/>
			<AuthButton
				isPending={isLoading}
				onClick={async () => {
					try {
						await signin({ phoneCode: phoneCode.trim() }).unwrap();
						navigate(-2);
					} catch (error) {
						const err = error as SerializedError;
						if (err.message === "Password required") {
							navigate("/telegram-authorization/password");
							return;
						}
						dispatch(
							showSnackBar({
								message: err.message as string,
								alertSeverity: AlertSeverity.error,
							}),
						);
					}
				}}
			>
				{t("authorization.sign_in")}
			</AuthButton>
		</>
	);
};
export default SignIn;
