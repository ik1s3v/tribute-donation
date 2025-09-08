import type { EventCallback, ISubscriber, ISubscriptions } from "../types";

export default class Subscriptions implements ISubscriptions {
	subscribers: ISubscriber[];

	constructor() {
		this.subscribers = [];
	}
	notifySubscribers<T>(id: string, data: T) {
		for (const subscriber of this.subscribers) {
			if (subscriber.id === id) {
				subscriber.callback(data);
			}
		}
	}

	subscribe<T>(id: string, callback: EventCallback<T>) {
		this.subscribers.push({ id, callback });

		return () => {
			this.subscribers = this.subscribers.filter(
				(subscriber) => subscriber.callback !== callback,
			);
		};
	}
}
