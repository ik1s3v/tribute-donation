import type {
	IStreamElementsEvent,
	IStreamElementsTip,
} from "../../shared/types";
import { api } from ".";

export const streamElementsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		streamElementsTipEvent: builder.mutation<
			void,
			{ event: IStreamElementsEvent<IStreamElementsTip> }
		>({
			query: (args) => ({
				command: "stream_elements_tip_event",
				args,
			}),
		}),
	}),
});
export const { useStreamElementsTipEventMutation } = streamElementsApi;
