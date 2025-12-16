import { useMediaQuery, useTheme } from "@mui/material";
import { Route, Routes } from "react-router";
import { MENU_WIDTH, MENU_WIDTH_MD } from "../../constants";
import { dashboardRouts } from "../../routes/dashboardRouts";
import CreateAlert from "./components/alerts/components/CreateAlert";
import UpdateAlertSettings from "./components/alerts/UpdateAlertSettings";
import CreateGoal from "./components/goals/components/CreateGoal";
import UpdateGoalSettings from "./components/goals/components/UpdateGoalSettings";

const DashboardArticle = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<article
			style={{
				padding: 15,
				width: "100%",
				marginLeft: !matches ? MENU_WIDTH : MENU_WIDTH_MD,
			}}
		>
			<Routes>
				{dashboardRouts.map((navItem) => (
					<Route
						path={navItem.path}
						element={navItem.element}
						key={navItem.path}
					/>
				))}
				<Route path="alerts/:id" element={<UpdateAlertSettings />} />
				<Route path="goals/:id" element={<UpdateGoalSettings />} />
				<Route path="alerts/new/alert" element={<CreateAlert />} />
				<Route path="goals/new/goal" element={<CreateGoal />} />
			</Routes>
		</article>
	);
};
export default DashboardArticle;
