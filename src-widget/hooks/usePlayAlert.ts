import { useCallback, useEffect, useRef, useState } from "react";
import { websocketService } from "../services/websocketService";
import { AppEvent } from "../../shared/enums";
import type { IAlert, IMessage, ISettings } from "../../shared/types";
import getAlertByMessage from "../utils/getAlertByMessage";

const usePlayAlert = () => {
	const soundRef = useRef<HTMLAudioElement>(new Audio());
	const audioRef = useRef<HTMLAudioElement>(new Audio());
	const alertsRef = useRef<IAlert[]>([]);
	const settingsRef = useRef<ISettings | null>(null);
	const messagesRef = useRef<IMessage[]>([]);

	const [currentMessage, setCurrentMessage] = useState<IMessage>();
	const [currentAlert, setCurrentAlert] = useState<IAlert>();

	const handleAudioEnd = useCallback(
		({
			message,
			skip = false,
		}: { message: IMessage | undefined; skip?: boolean }) => {
			audioRef.current.pause();
			soundRef.current.pause();
			setTimeout(
				() => {
					if (!message) return;
					websocketService.send({
						event: AppEvent.AlertPlayed,
						data: message.id,
					});
					messagesRef.current = messagesRef.current.filter(
						(m) => m.id !== message.id,
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

	const playMessage = useCallback(({ message }: { message: IMessage }) => {
		if (settingsRef.current && !settingsRef.current.alert_paused) {
			setTimeout(() => {
				if (settingsRef.current && messagesRef.current.length) {
					websocketService.send({
						event: AppEvent.AlertPlaying,
						data: message.id,
					});
					const alert = getAlertByMessage({
						alerts: alertsRef.current,
						message,
					});

					if (message.audio) {
						audioRef.current.src = `static/${message.audio}`;
						audioRef.current.volume = settingsRef.current.tts_volume / 100;
					}
					soundRef.current.src = `static/${alert.audio}`;
					soundRef.current.volume = alert.audio_volume / 100;
					soundRef.current.play();
					setCurrentMessage(message);
					setCurrentAlert(alert);
				}
			}, settingsRef.current.moderation_duration);
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
		(message: IMessage) => {
			messagesRef.current = [...messagesRef.current, message];
			if (messagesRef.current.length === 1) {
				playMessage({ message });
			}
		},
		[playMessage],
	);
	const handleReplayMessage = useCallback(
		(message: IMessage) => {
			messagesRef.current = [message, ...messagesRef.current];

			if (messagesRef.current.length === 1) {
				playMessage({ message });
			}
		},
		[playMessage],
	);

	const handleSoundEnd = useCallback(() => {
		if (currentMessage?.audio) {
			audioRef.current.play();
		} else {
			handleAudioEnd({ message: currentMessage });
		}
	}, [currentMessage, handleAudioEnd]);

	useEffect(() => {
		audioRef.current.onended = () =>
			handleAudioEnd({ message: currentMessage });
		audioRef.current.onerror = () =>
			handleAudioEnd({ message: currentMessage });

		return () => {
			audioRef.current.onended = null;
			audioRef.current.onerror = null;
		};
	}, [currentMessage, handleAudioEnd]);

	useEffect(() => {
		soundRef.current.onended = handleSoundEnd;
		soundRef.current.onerror = handleSoundEnd;

		return () => {
			soundRef.current.onended = null;
			soundRef.current.onerror = null;
		};
	}, [handleSoundEnd]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IMessage>(
			AppEvent.Message,
			handleNewMessage,
		);

		return () => unsubscribe();
	}, [handleNewMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IMessage>(
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
						playMessage({ message });
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
