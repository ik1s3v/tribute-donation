import { ServiceType } from "../../shared/enums";
import type {
	IService,
	IStreamElementsAuth,
	ITwitchIntegrationSettings,
} from "../../shared/types";
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
		getServiceWithAuthById: builder.query<
			IService<unknown, unknown> | undefined,
			{ id: ServiceType }
		>({
			query: (args) => ({
				command: "get_service_with_auth_by_id",
				args,
			}),
			providesTags: ["Services"],
		}),
		updateServiceAuth: builder.mutation<
			void,
			{
				auth: IStreamElementsAuth | undefined;
				id: ServiceType;
				authorized: boolean;
			}
		>({
			query: (args) => ({
				command: "update_service_auth",
				args,
			}),
			invalidatesTags: ["Services"],
		}),
		updateServiceSettings: builder.mutation<
			void,
			{ settings: ITwitchIntegrationSettings; id: ServiceType }
		>({
			query: (args) => ({
				command: "update_service_settings",
				args,
			}),
			invalidatesTags: ["Services"],
		}),
	}),
});
export const {
	useGetServicesQuery,
	useUpdateServiceAuthMutation,
	useGetServiceByIdQuery,
	useLazyGetServiceByIdQuery,
	useGetServiceWithAuthByIdQuery,
	useUpdateServiceSettingsMutation,
} = servicesApi;
