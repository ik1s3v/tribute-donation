import { Route, Routes } from "react-router";
import AuthorizationView from "../AuthorizationView";
import Password from "./components/Password";
import RequestCode from "./components/RequestCode";
import SignIn from "./components/SignIn";

const TelegramAuthorization = () => {
	return (
		<AuthorizationView>
			<Routes>
				<Route path="request-code" element={<RequestCode />} />
				<Route path="singin" element={<SignIn />} />
				<Route path="password" element={<Password />} />
			</Routes>
		</AuthorizationView>
	);
};

export default TelegramAuthorization;
