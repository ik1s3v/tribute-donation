import YouTube, { type YouTubePlayer } from "react-youtube";
import type { IMediaPlatformSettings, IMessage } from "../../../shared/types";
import { useEffect, useState } from "react";
import { websocketService } from "../../services/websocket_service";
import { AppEvent } from "../../../shared/enums";

const Youtube = ({
	message,
	mediaPlatformSettings,
}: { message: IMessage; mediaPlatformSettings: IMediaPlatformSettings }) => {
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
		websocketService.send({
			event: AppEvent.MediaPlaying,
			data: message.id,
		});
		event.target.setVolume(mediaPlatformSettings.video_volume);
		setPlayer(event.target);
	};
	const onError = () => {
		websocketService.send({
			event: AppEvent.MediaEnd,
			data: message.id,
		});
	};
	const onPlay = () => {
		websocketService.send({
			event: AppEvent.MediaPlaying,
			data: message.id,
		});
	};
	const onPause = () => {
		websocketService.send({
			event: AppEvent.MediaPaused,
			data: message.id,
		});
	};
	const onEnd = () => {
		websocketService.send({
			event: AppEvent.MediaEnd,
			data: message.id,
		});
	};

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.PauseMedia,
			(id) => {
				if (message.id === id) {
					player.pauseVideo();
				}
			},
		);

		return () => unsubscribe();
	}, [message, player]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.PlayMedia,
			(id) => {
				if (message.id === id) {
					player.playVideo();
				}
			},
		);

		return () => unsubscribe();
	}, [message, player]);

	return (
		<>
			<YouTube
				videoId={message.media?.temporary_src}
				opts={opts}
				onError={onError}
				onReady={onReady}
				onPlay={onPlay}
				onPause={onPause}
				onEnd={onEnd}
			/>
		</>
	);
};
export default Youtube;
