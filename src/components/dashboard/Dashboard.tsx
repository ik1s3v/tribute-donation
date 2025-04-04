import DashboardArticle from "./DashboardArticle";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
	return (
		<div style={{ display: "flex" }}>
			<DashboardSidebar />
			<DashboardArticle />
		</div>
	);
};
export default Dashboard;
