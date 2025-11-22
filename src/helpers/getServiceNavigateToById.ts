import { ServiceType } from "../../shared/enums";

const getServiceNavigateToById = (id: ServiceType) => {
	switch (id) {
		case ServiceType.TributeBot:
			return "/telegram-authorization/request-code";
		case ServiceType.Streamelements:
			return "/streamelements/token";
	}
};
export default getServiceNavigateToById;
