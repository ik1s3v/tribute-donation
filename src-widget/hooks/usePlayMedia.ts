import { useCallback, useEffect, useRef, useState } from "react";
import { AppEvent } from "../../shared/enums";
import useWebSocket from "../../shared/hooks/useWebSocket";
import type {
	IClientMessage,
	IMediaSettings,
	ISettings,
	MessageId,
} from "../../shared/types";

const usePlayMedia = () => {
	const websocketService = useWebSocket();
	const mediaSettingsRef = useRef<IMediaSettings | null>(null);
	const settingsRef = useRef<ISettings | null>(null);
	const messagesRef = useRef<IClientMessage[]>([]);
	const [currentMessage, setCurrentMessage] = useState<IClientMessage>();

	const handleMediaEnd = useCallback(
		({ message }: { message?: IClientMessage }) => {
			if (!message) return;
			websocketService.send<MessageId>({
				event: AppEvent.MediaPlayed,
				data: message.id,
			});

			messagesRef.current = messagesRef.current.filter(
				(d) => d.id !== message.id,
			);

			const newCurrentMessage = messagesRef.current.at(0);
			setCurrentMessage(undefined);
			setTimeout(() => {
				if (newCurrentMessage) {
					playMedia({ message: newCurrentMessage });
				}
			}, 0);
		},
		[],
	);
	const playMedia = useCallback(({ message }: { message: IClientMessage }) => {
		if (settingsRef.current && !settingsRef.current.alert_paused) {
			setCurrentMessage(message);
		}
	}, []);

	const skipMedia = useCallback(
		(id: string) => {
			if (currentMessage?.id === id) {
				handleMediaEnd({ message: currentMessage });
			} else {
				messagesRef.current = messagesRef.current.filter(
					(message) => message.id !== id,
				);
			}
		},
		[handleMediaEnd, currentMessage],
	);

	const skipPlayingMedia = useCallback(() => {
		if (currentMessage) {
			handleMediaEnd({ message: currentMessage });
		}
	}, [handleMediaEnd, currentMessage]);

	const handleNewMessage = useCallback((message: IClientMessage) => {
		const media = message.donation?.media;
		if (media) {
			messagesRef.current = [...messagesRef.current, message];
		}
	}, []);

	const handleReplayMedia = useCallback(
		(message: IClientMessage) => {
			messagesRef.current = [message, ...messagesRef.current];

			if (!currentMessage) {
				playMedia({ message: message });
			}
		},
		[playMedia, currentMessage],
	);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IClientMessage>(
			AppEvent.MediaMessage,
			handleNewMessage,
		);

		return () => unsubscribe();
	}, [handleNewMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IClientMessage>(
			AppEvent.ReplayMedia,
			handleReplayMedia,
		);

		return () => unsubscribe();
	}, [handleReplayMedia]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IMediaSettings>(
			AppEvent.MediaSettings,
			(mediaSettings) => {
				mediaSettingsRef.current = mediaSettings;
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
						playMedia({ message: message });
					}
					return;
				}
				settingsRef.current = settings;
			},
		);

		return () => unsubscribe();
	}, [playMedia]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.SkipMedia,
			skipMedia,
		);

		return () => unsubscribe();
	}, [skipMedia]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<null>(
			AppEvent.SkipPlayingMedia,
			skipPlayingMedia,
		);

		return () => unsubscribe();
	}, [skipPlayingMedia]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.MediaEnd,
			(id) => {
				const message = messagesRef.current.find(
					(message) => message.id === id,
				);
				handleMediaEnd({ message: message });
			},
		);

		return () => unsubscribe();
	}, [handleMediaEnd]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.MediaError,
			(id) => {
				const message = messagesRef.current.find(
					(message) => message.id === id,
				);
				handleMediaEnd({ message: message });
			},
		);

		return () => unsubscribe();
	}, [handleMediaEnd]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.AlertPlayed,
			(id) => {
				const message = messagesRef.current.find(
					(message) => message.id === id,
				);
				if (!currentMessage && message) {
					playMedia({ message: message });
				}
			},
		);

		return () => unsubscribe();
	}, [playMedia, currentMessage]);

	return {
		currentMessage,
		mediaSettings: mediaSettingsRef.current,
	};
};
export default usePlayMedia;
