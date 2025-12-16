import type { ITwitchDeviceCodeResponse } from "../../shared/types";
import { api } from ".";

export const twitchApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getDeviceCode: builder.query<ITwitchDeviceCodeResponse, void>({
			query: () => ({
				command: "get_device_code",
			}),
		}),
		getToken: builder.mutation<void, { deviceCode: string }>({
			query: (args) => ({
				command: "get_token",
				args,
			}),
		}),
		twitchConnect: builder.mutation<void, void>({
			query: () => ({
				command: "twitch_connect",
			}),
		}),
		addCustomRewards: builder.mutation<void, void>({
			query: () => ({
				command: "add_custom_rewards",
			}),
		}),
		removeCustomRewards: builder.mutation<void, void>({
			query: () => ({
				command: "remove_custom_rewards",
			}),
		}),
	}),
});
export const {
	useGetDeviceCodeQuery,
	useGetTokenMutation,
	useAddCustomRewardsMutation,
	useTwitchConnectMutation,
	useRemoveCustomRewardsMutation,
} = twitchApi;
