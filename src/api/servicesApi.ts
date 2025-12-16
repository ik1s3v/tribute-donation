import { ServiceType } from "../../shared/enums";
import type { IService } from "../../shared/types";
import { api } from ".";

export const servicesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getServices: builder.query<IService<unknown, unknown>[], void>({
			query: () => ({
				command: "get_services",
			}),
			providesTags: ["Services"],
		}),
		getServiceById: builder.query<
			IService<unknown, unknown> | undefined,
			{ id: ServiceType }
		>({
			query: (args) => ({
				command: "get_service_by_id",
				args,
			}),
			providesTags: ["Services"],
		}),
		updateService: builder.mutation<
			void,
			{ service: IService<unknown, unknown> }
		>({
			query: (args) => ({
				command: "update_service",
				args,
			}),
			invalidatesTags: ["Services"],
		}),
	}),
});
export const {
	useGetServicesQuery,
	useUpdateServiceMutation,
	useGetServiceByIdQuery,
	useLazyGetServiceByIdQuery,
} = servicesApi;
