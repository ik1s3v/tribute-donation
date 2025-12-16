import { useEffect, useState } from "react";
import YouTube, { type YouTubePlayer } from "react-youtube";
import { AppEvent } from "../../../shared/enums";
import useWebSocket from "../../../shared/hooks/useWebSocket";
import type {
	IMedia,
	IMediaPlatformSettings,
	MessageId,
} from "../../../shared/types";

const Youtube = ({
	mediaPlatformSettings,
	media,
	messageId,
}: {
	mediaPlatformSettings: IMediaPlatformSettings;
	media: IMedia;
	messageId: string;
}) => {
	const websocketService = useWebSocket();
	const [player, setPlayer] = useState<YouTubePlayer>();
	const opts = {
		height: window.innerHeight,
		width: window.innerWidth,
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			controls: 0,
		},
	};

	const onReady = (event: YouTubePlayer) => {
		websocketService.send<MessageId>({
			event: AppEvent.MediaPlaying,
			data: messageId,
		});
		event.target.setVolume(mediaPlatformSettings.video_volume);
		setPlayer(event.target);
	};
	const onError = () => {
		websocketService.send<MessageId>({
			event: AppEvent.MediaError,
			data: messageId,
		});
	};
	const onPlay = () => {
		websocketService.send<MessageId>({
			event: AppEvent.MediaPlaying,
			data: messageId,
		});
	};
	const onPause = () => {
		websocketService.send<MessageId>({
			event: AppEvent.MediaPaused,
			data: messageId,
		});
	};
	const onEnd = () => {
		websocketService.send<MessageId>({
			event: AppEvent.MediaEnd,
			data: messageId,
		});
	};

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<MessageId>(
			AppEvent.PauseMedia,
			(id) => {
				if (messageId === id) {
					player.pauseVideo();
				}
			},
		);

		return () => unsubscribe();
	}, [messageId, player, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<MessageId>(
			AppEvent.PlayMedia,
			(id) => {
				if (messageId === id) {
					player.playVideo();
				}
			},
		);

		return () => unsubscribe();
	}, [messageId, player, websocketService]);

	return (
		<YouTube
			videoId={media?.temporary_src}
			opts={opts}
			onError={onError}
			onReady={onReady}
			onPlay={onPlay}
			onPause={onPause}
			onEnd={onEnd}
		/>
	);
};
export default Youtube;
