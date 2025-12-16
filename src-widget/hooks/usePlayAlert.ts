import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	AlertVariationConditions,
	AppEvent,
	Currency,
	MessageType,
	ServiceType,
} from "../../shared/enums";
import useWebSocket from "../../shared/hooks/useWebSocket";
import type {
	IAlert,
	IClientMessage,
	ISettings,
	MessageId,
} from "../../shared/types";
import getAlertByMessage from "../utils/getAlertByMessage";

const usePlayAlert = () => {
	const { t } = useTranslation();
	const websocketService = useWebSocket();
	const alertAudioRef = useRef<HTMLAudioElement>(new Audio());
	const messageAudioRef = useRef<HTMLAudioElement>(new Audio());
	const alertsRef = useRef<IAlert[]>([]);
	const settingsRef = useRef<ISettings | null>(null);
	const messagesRef = useRef<IClientMessage[]>([]);

	const [currentMessage, setCurrentMessage] = useState<IClientMessage>();
	const [currentAlert, setCurrentAlert] = useState<IAlert>();

	const handleAudioEnd = useCallback(
		({
			message,
			skip = false,
		}: {
			message: IClientMessage | undefined;
			skip?: boolean;
		}) => {
			messageAudioRef.current.pause();
			alertAudioRef.current.pause();
			setTimeout(
				() => {
					if (!message) return;
					websocketService.send<MessageId>({
						event: AppEvent.AlertPlayed,
						data: message.id,
					});
					messagesRef.current = messagesRef.current.filter(
						(d) => d.id !== message.id,
					);

					const newCurrentMessage = messagesRef.current.at(0);

					setCurrentMessage(undefined);
					setTimeout(() => {
						if (newCurrentMessage) {
							playMessage({ message: newCurrentMessage });
						}
					}, 0);
				},
				skip ? 0 : 3000,
			);
		},
		[],
	);

	const playMessage = useCallback(
		({ message }: { message: IClientMessage }) => {
			if (settingsRef.current && !settingsRef.current.alert_paused) {
				setTimeout(() => {
					if (settingsRef.current && messagesRef.current.length) {
						const alert = getAlertByMessage({
							alerts: alertsRef.current,
							message: message,
						});

						if (!alert) return;
						websocketService.send<MessageId>({
							event: AppEvent.AlertPlaying,
							data: message.id,
						});
						const audio = message.donation?.audio;
						if (audio) {
							messageAudioRef.current.src = `static/${audio}`;
							messageAudioRef.current.volume =
								settingsRef.current.tts_volume / 100;
						}
						alertAudioRef.current.src = `static/${alert.audio}`;
						alertAudioRef.current.volume = alert.audio_volume / 100;
						alertAudioRef.current.play();
						setCurrentMessage(message);
						setCurrentAlert(alert);
					}
				}, settingsRef.current.moderation_duration);
			}
		},
		[],
	);

	const testAlert = useCallback((id: string) => {
		const alert = alertsRef.current.find((alert) => alert.id === id);
		if (!alert) return;
		const messageId = crypto.randomUUID();
		const message: IClientMessage = {
			id: messageId,
			type: MessageType.Donation,
			created_at: Math.round(new Date().getTime() / 1000),
			donation: {
				service_id: crypto.randomUUID(),
				amount:
					alert.variation_conditions === AlertVariationConditions.AmountIsEqual
						? alert.amount
						: alert.amount + 1,
				user_name: t("alert.test_name"),
				played: false,
				text: t("alert.test_text"),
				currency: Currency.EUR,
				exchanged_amount: 1,
				exchanged_currency: Currency.EUR,
				created_at: Math.round(new Date().getTime() / 1000),
				service: ServiceType.TributeBot,
				id: crypto.randomUUID(),
				message_id: messageId,
			},
		};
		if (!messagesRef.current.length && settingsRef.current) {
			websocketService.send<MessageId>({
				event: AppEvent.AlertPlaying,
				data: message.id,
			});

			alertAudioRef.current.src = `static/${alert.audio}`;
			alertAudioRef.current.volume = alert.audio_volume / 100;
			alertAudioRef.current.play();
			setCurrentMessage(message);
			setCurrentAlert(alert);
		}
	}, []);

	const skipMessage = useCallback(
		(id: string) => {
			if (currentMessage?.id === id) {
				handleAudioEnd({ message: currentMessage, skip: true });
			} else {
				messagesRef.current = messagesRef.current.filter(
					(message) => message.id !== id,
				);
			}
		},
		[handleAudioEnd, currentMessage],
	);
	const skipPlayingMessage = useCallback(() => {
		if (currentMessage) {
			handleAudioEnd({ message: currentMessage, skip: true });
		}
	}, [handleAudioEnd, currentMessage]);

	const handleNewMessage = useCallback(
		(message: IClientMessage) => {
			messagesRef.current = [...messagesRef.current, message];
			if (messagesRef.current.length === 1) {
				playMessage({ message: message });
			}
		},
		[playMessage],
	);
	const handleReplayMessage = useCallback(
		(message: IClientMessage) => {
			messagesRef.current = [message, ...messagesRef.current];

			if (messagesRef.current.length === 1) {
				playMessage({ message: message });
			}
		},
		[playMessage],
	);

	const handleSoundEnd = useCallback(() => {
		const audio = currentMessage?.donation?.audio;
		if (audio) {
			messageAudioRef.current.play();
		} else {
			handleAudioEnd({ message: currentMessage });
		}
	}, [currentMessage, handleAudioEnd]);

	useEffect(() => {
		messageAudioRef.current.onended = () =>
			handleAudioEnd({ message: currentMessage });
		messageAudioRef.current.onerror = () =>
			handleAudioEnd({ message: currentMessage });

		return () => {
			messageAudioRef.current.onended = null;
			messageAudioRef.current.onerror = null;
		};
	}, [currentMessage, handleAudioEnd]);

	useEffect(() => {
		alertAudioRef.current.onended = handleSoundEnd;
		alertAudioRef.current.onerror = handleSoundEnd;

		return () => {
			alertAudioRef.current.onended = null;
			alertAudioRef.current.onerror = null;
		};
	}, [handleSoundEnd]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IClientMessage>(
			AppEvent.Message,
			handleNewMessage,
		);

		return () => unsubscribe();
	}, [handleNewMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IClientMessage>(
			AppEvent.ReplayAlert,
			handleReplayMessage,
		);

		return () => unsubscribe();
	}, [handleReplayMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.SkipAlert,
			(id) => {
				skipMessage(id);
			},
		);

		return () => unsubscribe();
	}, [skipMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.TestAlert,
			(id) => {
				testAlert(id);
			},
		);

		return () => unsubscribe();
	}, [testAlert]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<null>(
			AppEvent.SkipPlayingAlert,
			skipPlayingMessage,
		);

		return () => unsubscribe();
	}, [skipPlayingMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IAlert[]>(
			AppEvent.Alerts,
			(alerts) => {
				alertsRef.current = alerts;
			},
		);

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<ISettings>(
			AppEvent.Settings,
			(settings) => {
				if (settingsRef.current?.alert_paused && !settings.alert_paused) {
					settingsRef.current = settings;
					const message = messagesRef.current.at(0);

					if (message) {
						playMessage({ message: message });
					}
					return;
				}
				settingsRef.current = settings;
			},
		);

		return () => unsubscribe();
	}, [playMessage]);

	return {
		currentMessage,
		currentAlert,
		settings: settingsRef.current,
	};
};
export default usePlayAlert;
