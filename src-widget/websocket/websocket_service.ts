import { AppEvent } from "../../shared/enums";
import Subscriptions from "../../shared/services/subscriptions";
import type { IEventMessage } from "../../shared/types";

export class WebSocketService extends Subscriptions {
	socket: WebSocket | null;
	url: string;
	constructor(url: string) {
		super();
		this.url = url;
		this.socket = null;
	}

	connect() {
		if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
			this.socket = new WebSocket(this.url);

			this.socket.onopen = () => {
				const url = new URL(location.href);
				const groupId = url.searchParams.get("group_id");
				this.send({
					event: AppEvent.AlertConnected,
					data: groupId,
				});
				if (
					process.env.NODE_ENV === "development" &&
					localStorage.getItem("isHotReload") === "true"
				) {
					localStorage.removeItem("isHotReload");
					location.reload();
				}
			};
			this.socket.onmessage = (message) => {
				const websocketMessage: IEventMessage<unknown> = JSON.parse(
					message.data,
				);

				this.notifySubscribers(websocketMessage.event, websocketMessage.data);
			};

			this.socket.onclose = () => {
				setTimeout(() => this.connect(), 1000);
			};

			this.socket.onerror = () => {
				if (process.env.NODE_ENV === "development") {
					localStorage.setItem("isHotReload", "true");
				}
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

export const websocketService = new WebSocketService("ws://localhost:12554");
