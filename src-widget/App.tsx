import { Route, Routes } from "react-router";
import Alert from "./components/Alert";

const App = () => {
	return (
		<Routes>
			<Route path="/alert" element={<Alert />} />
		</Routes>
	);
};
export default App;
