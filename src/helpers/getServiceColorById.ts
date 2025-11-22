import { ServiceType } from "../../shared/enums";

const getServiceColorById = (id: ServiceType) => {
	switch (id) {
		case ServiceType.TributeBot:
			return "#2693ff";
		case ServiceType.Streamelements:
			return "#2701fb";
	}
};
export default getServiceColorById;
