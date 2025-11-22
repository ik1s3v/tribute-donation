import { Currency } from "../../shared/enums";
import { api } from ".";

export const exchangeRatesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getExchangeRates: builder.query<Record<Currency, string>, void>({
			query: () => ({
				command: "get_exchange_rates",
			}),
		}),
	}),
});
export const { useGetExchangeRatesQuery } = exchangeRatesApi;
