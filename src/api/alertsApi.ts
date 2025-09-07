import type { IAlert, IMessage } from "../../shared/types";
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
		replayAlert: builder.mutation<void, { message: IMessage }>({
			query: (args) => ({
				command: "replay_alert",
				args,
			}),
		}),
		skipAlert: builder.mutation<void, { id: string }>({
			query: (args) => ({
				command: "skip_alert",
				args,
			}),
		}),
		testAlert: builder.mutation<void, { message: IMessage }>({
			query: (args) => ({
				command: "test_alert",
				args,
			}),
		}),
	}),
});
export const {
	useGetAlertsQuery,
	useGetAlertByIdQuery,
	useUpdateAlertSettingsMutation,
	useReplayAlertMutation,
	useSkipAlertMutation,
	useTestAlertMutation,
} = alertsApi;
