import { MediaType } from "../../shared/enums";
import type { IClientDonation, IMediaSettings } from "../../shared/types";
import TikTok from "../components/media/TikTok";
import Twitch from "../components/media/Twitch";
import Youtube from "../components/media/Youtube";

const getElementByMediaType = ({
	donation,
	mediaSettings,
}: {
	donation: IClientDonation;
	mediaSettings: IMediaSettings;
}) => {
	switch (donation.media?.media_type) {
		case MediaType.Twitch:
			return (
				<Twitch
					donation={donation}
					mediaPlatformSettings={mediaSettings.twitch}
				/>
			);
		case MediaType.Youtube:
			return (
				<Youtube
					donation={donation}
					mediaPlatformSettings={mediaSettings.youtube}
				/>
			);
		case MediaType.TikTok:
			return (
				<TikTok
					donation={donation}
					mediaPlatformSettings={mediaSettings.tiktok}
				/>
			);
	}
};
export default getElementByMediaType;
