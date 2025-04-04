import { Route, Routes } from "react-router";
import { dashboardRouts } from "../../routes/dashboardRouts";
import AlertSettings from "./components/alerts/AlertSettings";

const DashboardArticle = () => {
	return (
		<>
			<article style={{ padding: 15, width: "100%" }}>
				<Routes>
					{dashboardRouts.map((navItem) => (
						<Route
							path={navItem.path}
							element={navItem.element}
							key={navItem.path}
						/>
					))}
					<Route path="alerts/:id" element={<AlertSettings />} />
				</Routes>
			</article>
		</>
	);
};
export default DashboardArticle;
