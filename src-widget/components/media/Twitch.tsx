import { useEffect, useRef } from "react";
import { AppEvent } from "../../../shared/enums";
import useWebSocket from "../../../shared/hooks/useWebSocket";
import type { IMediaPlatformSettings, IMessage } from "../../../shared/types";

const Twitch = ({
	message,
	mediaPlatformSettings,
}: {
	message: IMessage;
	mediaPlatformSettings: IMediaPlatformSettings;
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
			websocketService.send({
				event: AppEvent.MediaPlaying,
				data: message.id,
			});
		};

		videoRef.current.onended = () => {
			websocketService.send({
				event: AppEvent.MediaEnd,
				data: message.id,
			});
		};
		videoRef.current.onpause = () => {
			websocketService.send({
				event: AppEvent.MediaPaused,
				data: message.id,
			});
		};
		videoRef.current.onerror = () => {
			websocketService.send({
				event: AppEvent.MediaError,
				data: message.id,
			});
		};

		return () => {
			if (!videoRef.current) return;
			videoRef.current.onplay = null;
			videoRef.current.onended = null;
			videoRef.current.onpause = null;
			videoRef.current.onerror = null;
		};
	}, [message, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.PauseMedia,
			(id) => {
				if (message.id === id && videoRef.current) {
					videoRef.current.pause();
				}
			},
		);

		return () => unsubscribe();
	}, [message, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.PlayMedia,
			(id) => {
				if (message.id === id && videoRef.current) {
					videoRef.current.play();
				}
			},
		);

		return () => unsubscribe();
	}, [message, websocketService]);

	return (
		<>
			{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<video
				autoPlay
				ref={videoRef}
				src={message.media?.temporary_src}
				style={{ height: "100%", width: "100%" }}
			/>
		</>
	);
};
export default Twitch;
