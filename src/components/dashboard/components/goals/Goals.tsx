import AddIcon from "@mui/icons-material/Add";
import { Box, Button, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
	Currency,
	GoalProgressLayout,
	GoalTextPosition,
} from "../../../../../shared/enums";
import { useGetNotEndedGoalQuery } from "../../../../api/goalsApi";
import { TEXT_STYLE } from "../../../../constants";
import { setGoal } from "../../../../store/slices/goalsSlice";
import GoalCard from "./components/GoalCard";

const Goals = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const theme = useTheme();
	const { data, isSuccess } = useGetNotEndedGoalQuery();

	return (
		<>
			<h1>{t("goals.title")}</h1>
			{isSuccess && (
				<Box sx={{ display: "grid", placeItems: "center", marginBottom: 1 }}>
					<Button
						variant="contained"
						startIcon={<AddIcon />}
						disabled={!!data}
						onClick={() => {
							dispatch(
								setGoal({
									id: crypto.randomUUID(),
									title: t("goal.new"),
									amount_raise: 1000,
									start_raising: 0,
									current_amount: 0,
									end_date: dayjs(Date.now()).add(7, "day").unix(),
									ended: false,
									start_date: dayjs(Date.now()).unix(),
									bar_height: 50,
									rounding_radius: 0,
									bar_stroke_thickness: 0,
									background_bar_color: theme.palette.background.default,
									progress_bar_color: theme.palette.primary.main,
									goal_title_type: GoalTextPosition.OnTop,
									goal_progress_bar: GoalTextPosition.Inside,
									remaining_time: GoalTextPosition.Below,
									progress_bar_layout: GoalProgressLayout.Percent,
									goal_amount_limits: true,
									widget_background: true,
									widget_background_color: "rgb(0,0,0,0.4)",
									title_style: TEXT_STYLE,
									progress_style: TEXT_STYLE,
									limits_style: TEXT_STYLE,
									currency: Currency.USD,
								}),
							);
							navigate("/dashboard/goals/new/goal");
						}}
					>
						{t("goals.create")}
					</Button>
				</Box>
			)}

			{data && <GoalCard key={data.id} goal={data} />}
		</>
	);
};
export default Goals;
