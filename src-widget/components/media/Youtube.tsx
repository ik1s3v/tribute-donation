import { useEffect, useState } from "react";
import YouTube, { type YouTubePlayer } from "react-youtube";
import { AppEvent } from "../../../shared/enums";
import useWebSocket from "../../../shared/hooks/useWebSocket";
import type {
	IClientDonation,
	IMediaPlatformSettings,
} from "../../../shared/types";

const Youtube = ({
	donation,
	mediaPlatformSettings,
}: {
	donation: IClientDonation;
	mediaPlatformSettings: IMediaPlatformSettings;
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
		websocketService.send({
			event: AppEvent.MediaPlaying,
			data: donation.id,
		});
		event.target.setVolume(mediaPlatformSettings.video_volume);
		setPlayer(event.target);
	};
	const onError = () => {
		websocketService.send({
			event: AppEvent.MediaError,
			data: donation.id,
		});
	};
	const onPlay = () => {
		websocketService.send({
			event: AppEvent.MediaPlaying,
			data: donation.id,
		});
	};
	const onPause = () => {
		websocketService.send({
			event: AppEvent.MediaPaused,
			data: donation.id,
		});
	};
	const onEnd = () => {
		websocketService.send({
			event: AppEvent.MediaEnd,
			data: donation.id,
		});
	};

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.PauseMedia,
			(id) => {
				if (donation.id === id) {
					player.pauseVideo();
				}
			},
		);

		return () => unsubscribe();
	}, [donation, player, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.PlayMedia,
			(id) => {
				if (donation.id === id) {
					player.playVideo();
				}
			},
		);

		return () => unsubscribe();
	}, [donation, player, websocketService]);

	return (
		<YouTube
			videoId={donation.media?.temporary_src}
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
