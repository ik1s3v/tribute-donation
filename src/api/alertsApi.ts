import type { IAlert } from "../../shared/types";
import { api } from ".";

export const alertsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAlerts: builder.query<IAlert[], void>({
			query: () => ({
				command: "get_alerts",
			}),
		}),
		getAlertById: builder.query<IAlert, { id: string | undefined }>({
			query: (args) => ({
				command: "get_alert_by_id",
				args,
			}),
		}),
		updateAlertSettings: builder.mutation<void, { alert: IAlert }>({
			query: (args) => ({
				command: "update_alert_settings",
				args,
			}),
		}),
	}),
});
export const {
	useGetAlertsQuery,
	useGetAlertByIdQuery,
	useUpdateAlertSettingsMutation,
} = alertsApi;
