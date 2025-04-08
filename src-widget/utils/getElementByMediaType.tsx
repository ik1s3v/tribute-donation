import { MediaType } from "../../shared/enums";
import type { IMediaSettings, IMessage } from "../../shared/types";
import TikTok from "../components/media/TikTok";
import Twitch from "../components/media/Twitch";
import Youtube from "../components/media/Youtube";

const getElementByMediaType = ({
	message,
	mediaSettings,
}: { message: IMessage; mediaSettings: IMediaSettings }) => {
	switch (message.media?.media_type) {
		case MediaType.Twitch:
			return (
				<Twitch
					message={message}
					mediaPlatformSettings={mediaSettings.twitch}
				/>
			);
		case MediaType.Youtube:
			return (
				<Youtube
					message={message}
					mediaPlatformSettings={mediaSettings.youtube}
				/>
			);
		case MediaType.TikTok:
			return (
				<TikTok
					message={message}
					mediaPlatformSettings={mediaSettings.tiktok}
				/>
			);
	}
};
export default getElementByMediaType;
