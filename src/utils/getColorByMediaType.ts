import { MediaType } from "../../shared/enums";

const getColorByMediaType = (mediaType: MediaType) => {
	switch (mediaType) {
		case MediaType.Youtube:
			return "#c4302b";
		case MediaType.Twitch:
			return "#9146FF ";
		case MediaType.TikTok:
			return "#00f2ea";
	}
};
export default getColorByMediaType;
