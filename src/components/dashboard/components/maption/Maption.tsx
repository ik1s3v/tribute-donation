import { APIProvider } from "@vis.gl/react-google-maps";
import AppMap from "./components/AppMap";
import MaptionRules from "./components/MaptionRules";
import MaptionSettings from "./components/MaptionSettings";

const Maption = () => {
	return (
		<div style={{ position: "relative", height: "calc(100vh - 30px)" }}>
			<MaptionRules />
			<MaptionSettings />
			<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
				<AppMap />
			</APIProvider>
		</div>
	);
};
export default Maption;
