import { Button, TextField } from "@mui/material";
import type { SerializedError } from "@reduxjs/toolkit";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AlertSeverity, ServiceType } from "../../../../shared/enums";
import { showSnackBar } from "../../../../shared/slices/snackBarSlice";
import {
	useGetServiceByIdQuery,
	useUpdateServiceMutation,
} from "../../../api/servicesApi";
import useStreamElementsSocketService from "../../../hooks/useStreamElementsService";
import type { AppState } from "../../../store";

const Token = () => {
	const { t } = useTranslation();
	const { isConnected } = useSelector(
		(state: AppState) => state.streamElementsState,
	);
	const { data } = useGetServiceByIdQuery({ id: ServiceType.Streamelements });
	const [token, setToken] = useState("");
	const [updateService] = useUpdateServiceMutation();
	const streamElementsSocketService = useStreamElementsSocketService();
	const dispatch = useDispatch();

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
								if (!isConnected) {
									dispatch(
										showSnackBar({
											message: t("error.not_connected"),
											alertSeverity: AlertSeverity.warning,
										}),
									);
									return;
								}
								if (!token) {
									return;
								}
								await updateService({ service: { ...data, token } }).unwrap();
								streamElementsSocketService.authenticate(token);
								dispatch(
									showSnackBar({
										message: t("success"),
										alertSeverity: AlertSeverity.success,
									}),
								);
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
