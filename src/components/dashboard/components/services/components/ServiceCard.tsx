import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Card } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import type { IService } from "../../../../../../shared/types";
import getServiceColorById from "../../../../../helpers/getServiceColorById";
import getServiceNavigateToById from "../../../../../helpers/getServiceNavigateToById";

const ServiceCard = ({ service }: { service: IService }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<Card
			sx={{
				display: "flex",
				position: "relative",
				boxSizing: "border-box",
				marginBottom: "5px",
				minHeight: 60,
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					width: "3rem",
					display: "grid",
					placeItems: "center",
					background: getServiceColorById(service.id),
					minHeight: "100%",
				}}
			></Box>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					placeItems: "center",
					justifyContent: "space-between",
					padding: "10px",
				}}
			>
				<div>{service.id}</div>
				{service.authorized ? (
					<CheckCircleIcon sx={{ color: "green" }} />
				) : (
					<Button
						onClick={() => {
							navigate(getServiceNavigateToById(service.id));
						}}
					>
						{t("services.connect")}
					</Button>
				)}
			</Box>
		</Card>
	);
};
export default ServiceCard;
