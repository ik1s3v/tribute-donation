import { listen } from "@tauri-apps/api/event";
import Subscriptions from "../../shared/services/subscriptions";
import type { IEventMessage } from "../../shared/types";

export class ListenerService extends Subscriptions {
	constructor() {
		super();
		listen<string>("websocket", (event) => {
			const websocketMessage: IEventMessage<unknown> = JSON.parse(
				event.payload,
			);

			this.notifySubscribers(websocketMessage.event, websocketMessage.data);
		});
	}
}

export const listenerService = new ListenerService();
