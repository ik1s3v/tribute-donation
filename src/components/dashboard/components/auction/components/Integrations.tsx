import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	IconButton,
	Switch,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ServiceType } from "../../../../../../shared/enums";
import { setServiceActive } from "../../../../../../shared/slices/servicesSlice";
import { useGetServicesQuery } from "../../../../../api/servicesApi";
import {
	useAddCustomRewardsMutation,
	useRemoveCustomRewardsMutation,
} from "../../../../../api/twitchApi";
import type { AppState } from "../../../../../store";

const Integrations = () => {
	const { t } = useTranslation();
	const { data } = useGetServicesQuery(undefined, {
		refetchOnMountOrArgChange: true,
		refetchOnFocus: true,
		refetchOnReconnect: true,
	});
	const { services } = useSelector((state: AppState) => state.servicesState);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [addCustomRewards] = useAddCustomRewardsMutation();
	const [removeCustomRewards] = useRemoveCustomRewardsMutation();
	const [isPending, setIsPending] = useState(false);

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography component="span">{t("services.integrations")}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box sx={{ display: "grid", gap: 1 }}>
					{data?.map((service) =>
						!service.authorized ? (
							<Button
								key={service.id}
								variant="contained"
								sx={{ backgroundColor: services[service.id].color }}
								onClick={() => navigate(services[service.id].authPath)}
							>
								{service.id}
							</Button>
						) : (
							<div
								style={{ display: "flex", justifyContent: "space-between" }}
								key={service.id}
							>
								<div>
									<span>{service.id}:</span>
									<Switch
										checked={services[service.id].active}
										disabled={isPending}
										onChange={async (_, value) => {
											try {
												setIsPending(true);
												dispatch(
													setServiceActive({
														service: service.id,
														active: value,
													}),
												);
												if (service.id === ServiceType.Twitch) {
													if (value) {
														await addCustomRewards().unwrap;
													} else {
														await removeCustomRewards().unwrap;
													}
												}
											} finally {
												setIsPending(false);
											}
										}}
									/>
								</div>
								{!!service.settings && (
									<IconButton
										onClick={() => navigate(services[service.id].settingsPath)}
									>
										<SettingsIcon />
									</IconButton>
								)}
							</div>
						),
					)}
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};
export default Integrations;
