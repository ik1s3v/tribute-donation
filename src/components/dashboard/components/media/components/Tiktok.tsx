import { setTikTokSettings } from "../../../../../../shared/slices/mediaSlice";
import type { IMediaSettings } from "../../../../../../shared/types";
import MediaPlatformSettings from "./MediaPlatformSettings";

const Tiktok = ({ mediaSettings }: { mediaSettings: IMediaSettings }) => {
	return (
		<MediaPlatformSettings
			mediaPlatformSettings={mediaSettings.tiktok}
			setMediaPlatformSettings={setTikTokSettings}
		/>
	);
};
export default Tiktok;
