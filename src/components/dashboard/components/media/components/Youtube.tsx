import type { IMediaSettings } from "../../../../../../shared/types";
import { setYoutubeSettings } from "../../../../../store/slices/mediaSlice";
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
