import { ViewType } from "../enums";

const getGridAutoColumns = (view_type: ViewType) => {
	switch (view_type) {
		case ViewType.Left:
			return "1fr auto";
		case ViewType.Right:
			return "auto 1fr";

		default:
			return;
	}
};
export default getGridAutoColumns;
