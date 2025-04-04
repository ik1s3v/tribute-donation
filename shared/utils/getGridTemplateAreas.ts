import { ViewType } from "../enums";

const getGridTemplateAreas = (view_type: ViewType) => {
	switch (view_type) {
		case ViewType.Top:
			return `"Image"
                    "Text"`;
		case ViewType.Bottom:
			return `"Text"
                    "Image"`;
		case ViewType.Left:
			return `"Image Text"`;
		case ViewType.Right:
			return `"Text Image"`;

		default:
			return;
	}
};
export default getGridTemplateAreas;
