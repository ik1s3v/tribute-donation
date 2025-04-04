import { ViewType } from "../enums";

const getGridAutoRows = (view_type: ViewType) => {
	switch (view_type) {
		case ViewType.Top:
			return "1fr auto";
		case ViewType.Bottom:
			return "auto 1fr";

		default:
			return;
	}
};
export default getGridAutoRows;
