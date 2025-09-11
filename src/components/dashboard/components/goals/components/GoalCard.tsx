import EditIcon from "@mui/icons-material/Edit";
import StopIcon from "@mui/icons-material/Stop";
import {
	Box,
	Button,
	Card,
	CardContent,
	CircularProgress,
	IconButton,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import dayjs from "../../../../../../shared/dayjs";
import { IGoal } from "../../../../../../shared/types";
import WidgetUrl from "../../alerts/components/WidgetUrl";
import FinishGoalDialog from "./FinishGoalDialog";

const GoalCard = ({ goal }: { goal: IGoal }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const startDate = dayjs(goal.start_date * 1000);
	const endDate = dayjs(goal.end_date * 1000).diff(startDate);
	const daysLeft = dayjs.duration(endDate).days();
	const currentAmount = goal.current_amount + goal.start_raising;
	const progressPercent = Math.floor((currentAmount / goal.amount_raise) * 100);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<FinishGoalDialog
				open={dialogOpen}
				setOpen={setDialogOpen}
				goalId={goal.id}
			/>
			<Card sx={{ marginBottom: 1 }}>
				<CardContent>
					<div style={{ textAlign: "center" }}>
						<Typography
							sx={{
								fontSize: 15,
							}}
						>
							{t("goal.days_left")} : {daysLeft}
						</Typography>
					</div>

					<Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
						{goal.title}
					</Typography>

					<Box
						sx={{
							display: "grid",
							gridAutoFlow: "column",
							gap: 2,
							gridAutoColumns: "auto 1fr",
							alignItems: "center",
						}}
					>
						<div style={{ position: "relative", width: 70, height: 70 }}>
							<CircularProgress
								variant="determinate"
								value={100}
								size="100%"
								sx={{
									color: (theme) => theme.palette.background.paper,
								}}
							/>
							<CircularProgress
								variant="determinate"
								size="100%"
								value={progressPercent <= 100 ? progressPercent : 100}
								sx={{ position: "absolute", inset: 0 }}
							></CircularProgress>
							<Typography
								sx={{
									position: "absolute",
									inset: 0,
									display: "grid",
									placeItems: "center",
								}}
							>
								{progressPercent}%
							</Typography>
						</div>
						<div>
							<Typography>
								{t("goal.raised")}: {currentAmount}/{goal.amount_raise}
							</Typography>

							<WidgetUrl
								widgetUrl={"http://localhost:12553/goal"}
								text={t("widget.url")}
							/>
						</div>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
						<Button
							onClick={() => {
								setDialogOpen(true);
							}}
							startIcon={<StopIcon />}
						>
							{t("goal.finish_goal")}
						</Button>
						<IconButton
							onClick={() => {
								navigate(`/dashboard/goals/${goal.id}`);
							}}
						>
							<EditIcon></EditIcon>
						</IconButton>
					</Box>
				</CardContent>
			</Card>
		</>
	);
};
export default GoalCard;
