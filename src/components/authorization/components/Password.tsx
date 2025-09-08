import { TextField } from "@mui/material";
import type { SerializedError } from "@reduxjs/toolkit";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AlertSeverity } from "../../../../shared/enums";
import { showSnackBar } from "../../../../shared/slices/snackBarSlice";
import { useCheckPasswordMutation } from "../../../api/authApi";
import AuthButton from "./AuthButton";

const Password = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [password, setPassword] = useState("");
	const [checkPassword, { isLoading }] = useCheckPasswordMutation();

	return (
		<>
			<label htmlFor="">{t("authorization.2fa_password")}</label>
			<TextField
				placeholder={t("authorization.password")}
				autoComplete="off"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<AuthButton
				isPending={isLoading}
				onClick={async () => {
					try {
						await checkPassword({ password: password.trim() }).unwrap();
						navigate("/dashboard/messages", { replace: true });
					} catch (error) {
						const err = error as SerializedError;
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
export default Password;
