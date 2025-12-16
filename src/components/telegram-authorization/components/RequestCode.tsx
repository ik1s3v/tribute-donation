import { useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { styled } from "@mui/material/styles";
import type { SerializedError } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AlertSeverity } from "../../../../shared/enums";
import { showSnackBar } from "../../../../shared/slices/snackBarSlice";
import { useRequestLoginCodeMutation } from "../../../api/telegramApi";
import AuthButton from "./AuthButton";

const StyledPhoneInput = styled(PhoneInput)`
  .country-list .country.highlight {
    background-color: ${(props) => props.theme.palette.background.paper};
  }
  .country-list {
    .country:hover {
	  background-color:${(props) => props.theme.palette.action.hover};
    }
  }
`;

const RequestCode = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [phoneNumber, setPhoneNumber] = useState("");
	const theme = useTheme();
	const [requestLoginCode, { isLoading }] = useRequestLoginCodeMutation();

	return (
		<>
			<label htmlFor="">{t("authorization.phone")}</label>
			<StyledPhoneInput
				country={"us"}
				value={phoneNumber}
				inputStyle={{
					backgroundColor: "transparent",
					width: "100%",
					color: "white",
				}}
				dropdownStyle={{
					backgroundColor: theme.palette.background.default,
				}}
				onChange={(phone) => setPhoneNumber(phone)}
			/>
			<AuthButton
				isPending={isLoading}
				onClick={async () => {
					try {
						await requestLoginCode({ phoneNumber }).unwrap();
						navigate("/telegram-authorization/singin");
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
				{t("authorization.code")}
			</AuthButton>
		</>
	);
};
export default RequestCode;
