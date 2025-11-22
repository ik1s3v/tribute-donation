import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { ServiceType } from "../../shared/enums";
import {
	useGetServiceByIdQuery,
	useUpdateServiceMutation,
} from "../api/servicesApi";
import OnOffSwitch from "./OnOffSwitch";

const TributeBotServiceButton = () => {
	const { data: service } = useGetServiceByIdQuery({
		id: ServiceType.TributeBot,
	});
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [updateService] = useUpdateServiceMutation();
	console.log("service:", service);

	return (
		<>
			{service && (
				<>
					{!service.authorized ? (
						<Button
							variant="contained"
							sx={{ bgcolor: "#2693ff" }}
							onClick={() => {
								navigate("/telegram-authorization/request-code");
							}}
						>
							{t("services.tribute")}
						</Button>
					) : (
						<div>
							{t("services.tribute")}{" "}
							<OnOffSwitch
								onChange={(_, checked) => {
									updateService({ service: { ...service, active: checked } });
								}}
								checked={service.active}
							/>
						</div>
					)}
				</>
			)}
		</>
	);
};
export default TributeBotServiceButton;
