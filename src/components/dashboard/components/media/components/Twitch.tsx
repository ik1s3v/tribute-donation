import type { IMediaSettings } from "../../../../../../shared/types";
import { setTwitchSettings } from "../../../../../store/slices/mediaSlice";
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
