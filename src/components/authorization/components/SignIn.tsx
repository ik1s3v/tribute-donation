import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useState } from "react";
import { showSnackBar } from "../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../shared/enums";
import { useSignInMutation } from "../../../api/authApi";
import AuthButton from "./AuthButton";
import type { SerializedError } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

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
						navigate("/dashboard/messages");
					} catch (error) {
						const err = error as SerializedError;
						if (err.message === "Password required") {
							navigate("/authorization/password");
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
