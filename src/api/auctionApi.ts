import { api } from ".";
import type { IAuctionSettings } from "../../shared/types";

export const auctionApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAuctionSettings: builder.query<IAuctionSettings, void>({
			query: () => ({
				command: "get_auction_settings",
			}),
		}),
		updateAuctionSettings: builder.mutation<
			void,
			{ auctionSettings: IAuctionSettings }
		>({
			query: (args) => ({
				command: "update_auction_settings",
				args,
			}),
		}),
	}),
});
export const { useGetAuctionSettingsQuery, useUpdateAuctionSettingsMutation } =
	auctionApi;
