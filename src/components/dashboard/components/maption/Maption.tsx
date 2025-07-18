import { useEffect } from "react";
import { useGetMaptionSettingsQuery } from "../../../../api/maptionApi";
import { useDispatch } from "react-redux";
import { setMaptionSettings } from "../../../../store/slices/maptionSlice";
import { APIProvider } from "@vis.gl/react-google-maps";
import MaptionSettings from "./components/MaptionSettings";
import AppMap from "./components/AppMap";
import MaptionRules from "./components/MaptionRules";

const Maption = () => {
	const { data: maptionSettings } = useGetMaptionSettingsQuery();

	const dispatch = useDispatch();

	useEffect(() => {
		if (maptionSettings) {
			dispatch(setMaptionSettings(maptionSettings));
		}
	}, [dispatch, maptionSettings]);

	return (
		<div style={{ position: "relative", height: "calc(100vh - 30px)" }}>
			<MaptionRules />
			<MaptionSettings />
			<APIProvider apiKey={"AIzaSyDxgYyaU9hJ0ODJoo7oD80RLLQkOsUEb4k"}>
				<AppMap />
			</APIProvider>
		</div>
	);
};
export default Maption;
