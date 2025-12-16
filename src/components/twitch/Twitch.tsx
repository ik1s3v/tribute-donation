import { Route, Routes } from "react-router";
import AuthorizationView from "../AuthorizationView";
import DeviceCode from "./components/DeviceCode";

const Twitch = () => {
	return (
		<AuthorizationView>
			<Routes>
				<Route path="device-code" element={<DeviceCode />} />
			</Routes>
		</AuthorizationView>
	);
};
export default Twitch;
