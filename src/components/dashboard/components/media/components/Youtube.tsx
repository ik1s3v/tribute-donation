import { setYoutubeSettings } from "../../../../../../shared/slices/mediaSlice";
import type { IMediaSettings } from "../../../../../../shared/types";
import MediaPlatformSettings from "./MediaPlatformSettings";

const Youtube = ({ mediaSettings }: { mediaSettings: IMediaSettings }) => {
	return (
		<MediaPlatformSettings
			mediaPlatformSettings={mediaSettings.youtube}
			setMediaPlatformSettings={setYoutubeSettings}
		/>
	);
};
export default Youtube;
