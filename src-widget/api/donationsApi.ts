import type { IClientDonation, IPageParm } from "../../shared/types";
import { api } from ".";

export const donationsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getDonations: builder.infiniteQuery<IClientDonation[], void, IPageParm>({
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
				params: pageParam,
				url: "/donations",
			}),
		}),
	}),
});
export const { useGetDonationsInfiniteQuery } = donationsApi;
