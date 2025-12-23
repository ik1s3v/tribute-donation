import type { SerializedError } from "@reduxjs/toolkit";
import { type BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { type InvokeArgs, invoke } from "@tauri-apps/api/core";

const tauriBaseQuery =
	(): BaseQueryFn<
		{ command: string; args?: InvokeArgs | undefined },
		unknown,
		SerializedError
	> =>
	async ({ command, args }) => {
		try {
			const result = await invoke<unknown>(command, args);
			return { data: result };
		} catch (error) {
			return {
				error: {
					message: error as string,
				},
			};
		}
	};

export const api = createApi({
	reducerPath: "api",
	baseQuery: tauriBaseQuery(),
	tagTypes: [
		"Services",
		"Settings",
		"Alerts",
		"Auc-Filters",
		"Auction-Settings",
		"Goals",
		"Maption-Settings",
	],
	endpoints: (builder) => ({
		init: builder.mutation<void, void>({
			query: () => ({
				command: "init",
			}),
		}),
	}),
});

export const { useInitMutation } = api;
