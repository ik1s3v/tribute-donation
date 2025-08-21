import HotReload from "../../shared/services/hotReload";
import Subscriptions from "../../shared/services/subscriptions";
import type { IEventMessage } from "../../shared/types";

export class WebSocketService extends Subscriptions {
	socket: WebSocket | null;
	url: string;
	hotReload: HotReload | null;

	constructor(url: string) {
		super();
		this.url = url;
		this.socket = null;
		this.hotReload = null;
	}

	connect() {
		if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
			this.socket = new WebSocket(this.url);
			this.hotReload = new HotReload(this.socket);

			this.socket.onmessage = (message) => {
				const websocketMessage: IEventMessage<unknown> = JSON.parse(
					message.data,
				);

				this.notifySubscribers(websocketMessage.event, websocketMessage.data);
			};

			this.socket.onclose = () => {
				setTimeout(() => this.connect(), 1000);
			};
		}
	}

	disconnect() {
		if (this.socket) {
			this.socket.close();
			this.socket = null;
		}
	}

	send<T>(message: IEventMessage<T>) {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			try {
				this.socket.send(JSON.stringify(message));
			} catch (error) {
				console.error(error);
			}
		}
	}
}

export const websocketService = new WebSocketService("ws://localhost:12553/ws");
