import usePlayMedia from "../../hooks/usePlayMedia";
import getElementByMediaType from "../../utils/getElementByMediaType";

const Media = () => {
	const { currentMessage, mediaSettings } = usePlayMedia();

	return (
		mediaSettings &&
		currentMessage && (
			<div style={{ height: "100dvh", width: "100dvw" }}>
				{getElementByMediaType({ message: currentMessage, mediaSettings })}
			</div>
		)
	);
};
export default Media;
