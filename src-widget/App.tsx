import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import { dark } from "../src/theme/default";
import Alert from "./components/alert/Alert";
import Media from "./components/media/Media";
import ObsDockMessages from "./components/obs-dock-messages/ObsDockMessages";

const App = () => {
	return (
		<Routes>
			<Route path="/alert" element={<Alert />} />
			<Route path="/media" element={<Media />} />
			<Route
				path="/obs-dock-messages"
				element={
					<ThemeProvider theme={createTheme(dark)}>
						<ObsDockMessages />
					</ThemeProvider>
				}
			/>
		</Routes>
	);
};
export default App;
