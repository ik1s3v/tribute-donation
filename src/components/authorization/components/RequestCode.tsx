import { Button, useTheme } from "@mui/material";
import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useNavigate } from "react-router";
import { showSnackBar } from "../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../shared/enums";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";

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
			<Button
				variant="contained"
				onClick={() => {
					invoke("request_login_code", { phoneNumber })
						.then(() => {
							navigate("/authorization/singin");
						})
						.catch((error) => {
							dispatch(
								showSnackBar({
									message: error,
									alertSeverity: AlertSeverity.error,
								}),
							);
						});
				}}
			>
				{t("authorization.code")}
			</Button>
		</>
	);
};
export default RequestCode;
