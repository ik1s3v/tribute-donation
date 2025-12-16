import type { IClientMessage, IPageParm } from "../../shared/types";
import { api } from ".";

export const messagesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getMessages: builder.infiniteQuery<IClientMessage[], void, IPageParm>({
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
			query: ({ pageParam }) => ({
				command: "get_messages",
				args: { ...pageParam },
			}),
		}),
	}),
});
export const { useGetMessagesInfiniteQuery } = messagesApi;
