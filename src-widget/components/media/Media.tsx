import usePlayMedia from "../../hooks/usePlayMedia";
import getElementByMediaType from "../../utils/getElementByMediaType";

const Media = () => {
	const { currentDonation, mediaSettings } = usePlayMedia();

	return (
		mediaSettings &&
		currentDonation && (
			<div style={{ height: "100dvh", width: "100dvw" }}>
				{getElementByMediaType({ donation: currentDonation, mediaSettings })}
			</div>
		)
	);
};
export default Media;
