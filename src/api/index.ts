import type { SerializedError } from "@reduxjs/toolkit";
import { type BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { invoke, type InvokeArgs } from "@tauri-apps/api/core";

const tauriBaseQuery =
	(): BaseQueryFn<
		{ command: string; data: InvokeArgs | undefined },
		unknown,
		SerializedError
	> =>
	async ({ command, data }) => {
		try {
			const result = await invoke<unknown>(command, data);
			return { data: result };
		} catch (tauriError) {
			const err = tauriError as string;
			return {
				error: {
					name: command,
					message: err,
				},
			};
		}
	};

export const api = createApi({
	reducerPath: "api",
	baseQuery: tauriBaseQuery(),
	endpoints: () => ({}),
});
