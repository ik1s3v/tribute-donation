import type { IAuctionSettings } from "../../shared/types";
import { api } from ".";

export const auctionApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAuctionSettings: builder.query<IAuctionSettings, void>({
			query: () => ({
				command: "get_auction_settings",
			}),
			providesTags: ["Auction-Settings"],
		}),
		updateAuctionSettings: builder.mutation<
			void,
			{ auctionSettings: IAuctionSettings }
		>({
			query: (args) => ({
				command: "update_auction_settings",
				args,
			}),
			invalidatesTags: ["Auction-Settings"],
		}),
	}),
});
export const { useGetAuctionSettingsQuery, useUpdateAuctionSettingsMutation } =
	auctionApi;
