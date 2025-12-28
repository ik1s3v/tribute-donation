import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Card, IconButton } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import type { IService } from "../../../../../../shared/types";
import { useGetServicesQuery } from "../../../../../api/servicesApi";
import useSignOut from "../../../../../hooks/useSignOut";
import type { AppState } from "../../../../../store";
import WarningDialog from "../../../../WarningDialog";

const ServiceCard = ({ service }: { service: IService<unknown, unknown> }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { services } = useSelector((state: AppState) => state.servicesState);
	const [dialogOpen, setDialogOpen] = useState(false);
	const signOut = useSignOut(service.id);
	const { refetch } = useGetServicesQuery();
	const dispatch = useDispatch();

	return (
		<>
			<WarningDialog
				open={dialogOpen}
				setOpen={setDialogOpen}
				title={t("services.sign_out")}
				text={t("services.confirm_sign_out")}
				onClick={async () => {
					try {
						await signOut();
						refetch();
						dispatch(
							showSnackBar({
								message: t("success"),
								alertSeverity: AlertSeverity.success,
							}),
						);
					} catch (error) {
						dispatch(
							showSnackBar({
								message: error as string,
								alertSeverity: AlertSeverity.error,
							}),
						);
					} finally {
						setDialogOpen(false);
					}
				}}
			/>
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
						background: services[service.id].color,
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
						<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
							<IconButton onClick={() => setDialogOpen(true)}>
								<LogoutIcon></LogoutIcon>
							</IconButton>
							<CheckCircleIcon sx={{ color: "green" }} />
						</div>
					) : (
						<Button
							onClick={() => {
								navigate(services[service.id].authPath);
							}}
						>
							{t("services.connect")}
						</Button>
					)}
				</Box>
			</Card>
		</>
	);
};
export default ServiceCard;
