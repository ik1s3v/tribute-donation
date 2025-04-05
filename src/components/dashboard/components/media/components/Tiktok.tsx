import type { IMediaSettings } from "../../../../../../shared/types";
import { setTikTokSettings } from "../../../../../store/slices/mediaSlice";
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
