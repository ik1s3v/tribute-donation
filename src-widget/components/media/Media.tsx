import usePlayMedia from "../../hooks/usePlayMedia";
import getElementByMediaType from "../../utils/getElementByMediaType";

const Media = () => {
	const { currentMessage, mediaSettings } = usePlayMedia();
	return (
		mediaSettings &&
		currentMessage &&
		currentMessage.donation?.media && (
			<div style={{ height: "100dvh", width: "100dvw" }}>
				{getElementByMediaType({
					media: currentMessage.donation.media,
					messageId: currentMessage.id,
					mediaSettings,
				})}
			</div>
		)
	);
};
export default Media;
