import { store } from "./../store/index";
import { invoke } from "@tauri-apps/api/core";
import { api } from ".";
import type { IMessage, IParms } from "../../shared/types";
import { showSnackBar } from "../store/slices/snackBarSlice";
import { AlertSeverity } from "../../shared/enums";

export const messagesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getMessages: builder.infiniteQuery<IMessage[], void, IParms>({
			infiniteQueryOptions: {
				initialPageParam: {
					offset: 0,
					limit: 100,
				},
				getNextPageParam: (
					lastPage,
					_allPages,
					lastPageParam,
					_allPageParams,
				) => {
					const nextOffset = lastPageParam.offset + lastPageParam.limit;

					if (lastPage?.length < lastPageParam.limit) {
						return undefined;
					}

					return {
						...lastPageParam,
						offset: nextOffset,
					};
				},
			},
			queryFn: async ({ pageParam }) => {
				try {
					const data = await invoke<IMessage[]>("get_messages", {
						...pageParam,
					});
					return { data };
				} catch (error) {
					store.dispatch(
						showSnackBar({
							message: error as string,
							alertSeverity: AlertSeverity.error,
						}),
					);
					return { error: { status: 500, data: error } };
				}
			},
		}),
	}),
});
export const { useGetMessagesInfiniteQuery } = messagesApi;
