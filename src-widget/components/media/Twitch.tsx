import { useEffect, useRef } from "react";
import { AppEvent } from "../../../shared/enums";
import useWebSocket from "../../../shared/hooks/useWebSocket";
import type {
	IClientDonation,
	IMediaPlatformSettings,
} from "../../../shared/types";

const Twitch = ({
	donation,
	mediaPlatformSettings,
}: {
	donation: IClientDonation;
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
				data: donation.id,
			});
		};

		videoRef.current.onended = () => {
			websocketService.send({
				event: AppEvent.MediaEnd,
				data: donation.id,
			});
		};
		videoRef.current.onpause = () => {
			websocketService.send({
				event: AppEvent.MediaPaused,
				data: donation.id,
			});
		};
		videoRef.current.onerror = () => {
			websocketService.send({
				event: AppEvent.MediaError,
				data: donation.id,
			});
		};

		return () => {
			if (!videoRef.current) return;
			videoRef.current.onplay = null;
			videoRef.current.onended = null;
			videoRef.current.onpause = null;
			videoRef.current.onerror = null;
		};
	}, [donation, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.PauseMedia,
			(id) => {
				if (donation.id === id && videoRef.current) {
					videoRef.current.pause();
				}
			},
		);

		return () => unsubscribe();
	}, [donation, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.PlayMedia,
			(id) => {
				if (donation.id === id && videoRef.current) {
					videoRef.current.play();
				}
			},
		);

		return () => unsubscribe();
	}, [donation, websocketService]);

	return (
		<>
			{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<video
				autoPlay
				ref={videoRef}
				src={donation.media?.temporary_src}
				style={{ height: "100%", width: "100%" }}
			/>
		</>
	);
};
export default Twitch;
