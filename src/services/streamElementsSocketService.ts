import { io, Socket } from "socket.io-client";
import { ServiceType, StreamElementsEventType } from "../../shared/enums";
import {
	IService,
	IStreamElementsAuth,
	IStreamElementsAuthenticated,
	IStreamElementsEvent,
	IStreamElementsTip,
} from "../../shared/types";
import { servicesApi } from "../api/servicesApi";
import { streamElementsApi } from "../api/streamElementsApi";
import { store } from "../store";
import {
	setIsAuthenticated,
	setIsConnected,
} from "../store/slices/streamElementsSlice";

export default class StreamElementsSocketService {
	socket: Socket;

	constructor() {
		this.socket = io("https://realtime.streamelements.com", {
			transports: ["websocket"],
		});

		this.socket.on("unauthorized", () => {
			store.dispatch(setIsAuthenticated(false));
			store.dispatch(
				servicesApi.endpoints.updateService.initiate({
					service: {
						id: ServiceType.Streamelements,
						authorized: false,
					},
				}),
			);
		});

		this.socket.on("authenticated", async (_: IStreamElementsAuthenticated) => {
			store.dispatch(setIsAuthenticated(true));
			const { data } = await store.dispatch(
				servicesApi.endpoints.getServiceById.initiate(
					{
						id: ServiceType.Streamelements,
					},
					{ forceRefetch: true },
				),
			);
			const service = data as IService<IStreamElementsAuth, undefined>;
			if (!service.authorized && service?.auth?.jwt_token) {
				store.dispatch(
					servicesApi.endpoints.updateService.initiate({
						service: {
							...service,
							authorized: true,
						} as IService<IStreamElementsAuth, undefined>,
					}),
				);
			}
		});

		this.socket.on("event", (data: IStreamElementsEvent<unknown>) => {
			switch (data.type) {
				case StreamElementsEventType.tip:
					if (process.env.NODE_ENV !== "development" && data.isMock) return;
					const event = data as IStreamElementsEvent<IStreamElementsTip>;

					store.dispatch(
						streamElementsApi.endpoints.streamElementsTipEvent.initiate({
							event,
						}),
					);
					break;

				default:
					break;
			}
		});

		this.socket.on("connect", () => {
			store.dispatch(setIsConnected(true));
		});
	}

	authenticate(token?: string) {
		this.socket.emit("authenticate", { method: "jwt", token });
	}

	disconnect() {
		this.socket.disconnect();
	}
}
