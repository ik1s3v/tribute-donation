import { useEffect, useRef } from "react";
import { AppEvent } from "../../../shared/enums";
import useWebSocket from "../../../shared/hooks/useWebSocket";
import type {
	IMedia,
	IMediaPlatformSettings,
	MessageId,
} from "../../../shared/types";

const Twitch = ({
	mediaPlatformSettings,
	media,
	messageId,
}: {
	mediaPlatformSettings: IMediaPlatformSettings;
	media: IMedia;
	messageId: string;
}) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const websocketService = useWebSocket();

	useEffect(() => {
		if (!videoRef.current) return;
		videoRef.current.volume = mediaPlatformSettings.video_volume / 100;
	}, [mediaPlatformSettings]);
	useEffect(() => {
		if (!videoRef.current) return;
		videoRef.current.onplay = () => {
			websocketService.send<MessageId>({
				event: AppEvent.MediaPlaying,
				data: messageId,
			});
		};

		videoRef.current.onended = () => {
			websocketService.send<MessageId>({
				event: AppEvent.MediaEnd,
				data: messageId,
			});
		};
		videoRef.current.onpause = () => {
			websocketService.send<MessageId>({
				event: AppEvent.MediaPaused,
				data: messageId,
			});
		};
		videoRef.current.onerror = () => {
			websocketService.send<MessageId>({
				event: AppEvent.MediaError,
				data: messageId,
			});
		};

		return () => {
			if (!videoRef.current) return;
			videoRef.current.onplay = null;
			videoRef.current.onended = null;
			videoRef.current.onpause = null;
			videoRef.current.onerror = null;
		};
	}, [messageId, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<MessageId>(
			AppEvent.PauseMedia,
			(id) => {
				if (messageId === id && videoRef.current) {
					videoRef.current.pause();
				}
			},
		);

		return () => unsubscribe();
	}, [messageId, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<MessageId>(
			AppEvent.PlayMedia,
			(id) => {
				if (messageId === id && videoRef.current) {
					videoRef.current.play();
				}
			},
		);

		return () => unsubscribe();
	}, [messageId, websocketService]);

	return (
		<>
			{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<video
				autoPlay
				ref={videoRef}
				src={media.temporary_src}
				style={{ height: "100%", width: "100%" }}
			/>
		</>
	);
};
export default Twitch;
