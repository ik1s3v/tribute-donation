import { useContext } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";

const useWebSocket = () => {
	const service = useContext(WebsocketContext);
	if (!service) {
		throw new Error("useWebSocket must be used within a WebSocketProvider");
	}
	return service;
};
export default useWebSocket;
