import { useCallback, useEffect, useRef } from "react";
import { AppEvent } from "../../../shared/enums";
import useWebSocket from "../../../shared/hooks/useWebSocket";
import type {
	IMedia,
	IMediaPlatformSettings,
	MessageId,
} from "../../../shared/types";

const TikTok = ({
	mediaPlatformSettings,
	media,
	messageId,
}: {
	mediaPlatformSettings: IMediaPlatformSettings;
	media: IMedia;
	messageId: string;
}) => {
	const websocketService = useWebSocket();
	const tiktokRef = useRef<HTMLIFrameElement>(null);
	const tiktokListener = useCallback(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(event: MessageEvent<any>) => {
			switch (event.data.type) {
				case "onStateChange":
					switch (event.data.value) {
						case 0:
							websocketService.send<MessageId>({
								event: AppEvent.MediaEnd,
								data: messageId,
							});
							break;
						case 1:
							websocketService.send<MessageId>({
								event: AppEvent.MediaPlaying,
								data: messageId,
							});

							break;
						case 2:
							websocketService.send<MessageId>({
								event: AppEvent.MediaPaused,
								data: messageId,
							});
							break;

						default:
							break;
					}

					break;
				case "onPlayerReady":
					tiktokRef.current?.contentWindow?.postMessage(
						{ type: "unMute", value: 0, "x-tiktok-player": true },
						"*",
					);
					tiktokRef.current?.contentWindow?.postMessage(
						{
							type: "changeVolume",
							value: mediaPlatformSettings.video_volume,
							"x-tiktok-player": true,
						},
						"*",
					);

					break;
				case "onError":
					websocketService.send<MessageId>({
						event: AppEvent.MediaError,
						data: messageId,
					});
					break;

				default:
					break;
			}
		},
		[messageId, mediaPlatformSettings, websocketService],
	);
	useEffect(() => {
		window.addEventListener("message", tiktokListener);

		return () => {
			window.removeEventListener("message", tiktokListener);
		};
	}, [tiktokListener]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<MessageId>(
			AppEvent.PauseMedia,
			(id) => {
				if (messageId === id && tiktokRef.current) {
					tiktokRef.current?.contentWindow?.postMessage(
						{ type: "pause", value: null, "x-tiktok-player": true },
						"*",
					);
				}
			},
		);

		return () => unsubscribe();
	}, [messageId, websocketService]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<MessageId>(
			AppEvent.PlayMedia,
			(id) => {
				if (messageId === id && tiktokRef.current) {
					tiktokRef.current?.contentWindow?.postMessage(
						{ type: "play", value: null, "x-tiktok-player": true },
						"*",
					);
				}
			},
		);

		return () => unsubscribe();
	}, [messageId, websocketService]);
	return (
		<iframe
			ref={tiktokRef}
			height="100%"
			width="100%"
			src={`https://www.tiktok.com/player/v1/${media.temporary_src}?controls=0&progress_bar=0&play_button=0&volume_control=0&music_info=0&autoplay=1&timestamp=0&fullscreen_button=0&description=0&rel=0&native_context_menu=0&closed_caption=0`}
			allow="fullscreen"
			title="widget"
		/>
	);
};
export default TikTok;
