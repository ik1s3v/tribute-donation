import type { IAlert } from "../../shared/types";
import { api } from ".";

export const alertsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAlerts: builder.query<IAlert[], void>({
			query: () => ({
				command: "get_alerts",
			}),
			providesTags: ["Alerts"],
		}),
		getAlertById: builder.query<IAlert, { id: string | undefined }>({
			query: (args) => ({
				command: "get_alert_by_id",
				args,
			}),
			providesTags: ["Alerts"],
		}),
		updateAlertSettings: builder.mutation<void, { alert: IAlert }>({
			query: (args) => ({
				command: "update_alert_settings",
				args,
			}),
			invalidatesTags: ["Alerts"],
		}),
		createAlert: builder.mutation<void, { alert: IAlert }>({
			query: (args) => ({
				command: "create_alert",
				args,
			}),
			invalidatesTags: ["Alerts"],
		}),
		deleteAlertById: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "delete_alert_by_id",
				args,
			}),
			invalidatesTags: ["Alerts"],
		}),
	}),
});
export const {
	useGetAlertsQuery,
	useGetAlertByIdQuery,
	useUpdateAlertSettingsMutation,
	useCreateAlertMutation,
	useDeleteAlertByIdMutation,
} = alertsApi;
