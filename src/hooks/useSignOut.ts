import { ServiceType } from "./../../shared/enums";
import { useTributeBotSignOutMutation } from "../api";
import useStreamElementsSocketService from "./useStreamElementsService";

const useSignOut = (id: ServiceType) => {
	const [tributeBotSignOut] = useTributeBotSignOutMutation();
	const streamElementsSocketService = useStreamElementsSocketService();

	switch (id) {
		case ServiceType.TributeBot:
			return tributeBotSignOut;
		case ServiceType.Streamelements:
			return streamElementsSocketService.signOut.bind(
				streamElementsSocketService,
			);

		default:
			return () => null;
	}
};
export default useSignOut;
