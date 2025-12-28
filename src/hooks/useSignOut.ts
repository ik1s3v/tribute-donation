import { ServiceType } from "./../../shared/enums";
import { useTributeBotSignOutMutation } from "../api";

const useSignOut = (id: ServiceType) => {
	const [tributeBotSignOut] = useTributeBotSignOutMutation();
	switch (id) {
		case ServiceType.TributeBot:
			return tributeBotSignOut;

		default:
			return () => null;
	}
};
export default useSignOut;
