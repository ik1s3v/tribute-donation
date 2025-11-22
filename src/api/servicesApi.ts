import { ServiceType } from "../../shared/enums";
import type { IService } from "../../shared/types";
import { api } from ".";

export const servicesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getServices: builder.query<IService[], void>({
			query: () => ({
				command: "get_services",
			}),
		}),
		getServiceById: builder.query<IService | undefined, { id: ServiceType }>({
			query: (args) => ({
				command: "get_service_by_id",
				args,
			}),
		}),
		updateService: builder.mutation<void, { service: IService }>({
			query: (args) => ({
				command: "update_service",
				args,
			}),
		}),
	}),
});
export const {
	useGetServicesQuery,
	useUpdateServiceMutation,
	useGetServiceByIdQuery,
	useLazyGetServiceByIdQuery,
} = servicesApi;
