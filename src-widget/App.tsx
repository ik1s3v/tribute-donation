import { Route, Routes } from "react-router";
import Media from "./components/media/Media";
import Alert from "./components/alert/Alert";

const App = () => {
	return (
		<Routes>
			<Route path="/alert" element={<Alert />} />
			<Route path="/media" element={<Media />} />
		</Routes>
	);
};
export default App;
