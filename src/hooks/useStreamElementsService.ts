import { useContext } from "react";
import { StreamElementsSocketServiceContext } from "../contexts/StreamElementsSocketServiceContext";

const useStreamElementsSocketService = () => {
	const service = useContext(StreamElementsSocketServiceContext);
	if (!service) {
		throw new Error(
			"useStreamElementsService must be used within a StreamElementsServiceProvider",
		);
	}
	return service;
};
export default useStreamElementsSocketService;
