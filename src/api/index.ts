import type { SerializedError } from "@reduxjs/toolkit";
import { type BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { invoke, type InvokeArgs } from "@tauri-apps/api/core";

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
	endpoints: () => ({}),
});
