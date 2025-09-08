import { setTwitchSettings } from "../../../../../../shared/slices/mediaSlice";
import type { IMediaSettings } from "../../../../../../shared/types";
import MediaPlatformSettings from "./MediaPlatformSettings";

const Twitch = ({ mediaSettings }: { mediaSettings: IMediaSettings }) => {
	return (
		<MediaPlatformSettings
			mediaPlatformSettings={mediaSettings.twitch}
			setMediaPlatformSettings={setTwitchSettings}
		/>
	);
};
export default Twitch;
