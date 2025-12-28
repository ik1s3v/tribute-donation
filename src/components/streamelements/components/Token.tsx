import { Button, TextField } from "@mui/material";
import type { SerializedError } from "@reduxjs/toolkit";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AlertSeverity, ServiceType } from "../../../../shared/enums";
import { showSnackBar } from "../../../../shared/slices/snackBarSlice";
import {
	useGetServiceByIdQuery,
	useUpdateServiceAuthMutation,
} from "../../../api/servicesApi";
import useStreamElementsSocketService from "../../../hooks/useStreamElementsService";

const Token = () => {
	const { t } = useTranslation();
	const { data } = useGetServiceByIdQuery({ id: ServiceType.Streamelements });
	const [token, setToken] = useState("");
	const [updateServiceAuth] = useUpdateServiceAuthMutation();
	const streamElementsSocketService = useStreamElementsSocketService();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<>
			{data && (
				<>
					<TextField
						placeholder="JWT"
						value={token}
						type="password"
						onChange={(e) => setToken(e.target.value)}
					></TextField>
					<Button
						variant="contained"
						onClick={async () => {
							try {
								if (!token) {
									return;
								}
								await updateServiceAuth({
									authorized: true,
									id: ServiceType.Streamelements,
									auth: { jwt_token: token },
								}).unwrap();
								await streamElementsSocketService.signIn(token);
								navigate(-1);
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
						{t("save")}
					</Button>
				</>
			)}
		</>
	);
};
export default Token;
