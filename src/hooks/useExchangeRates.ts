import { useCallback } from "react";
import { Currency } from "../../shared/enums";
import { useGetExchangeRatesQuery } from "../api/exchangeRatesApi";

const useExchangeRates = () => {
	const { data: rates } = useGetExchangeRatesQuery();
	const calculateAmountByCurrency = useCallback(
		({
			base_currency,
			target_currency,
			target_amount,
		}: {
			base_currency: Currency;
			target_currency: Currency;
			target_amount: number;
		}) => {
			console.log("rates:", rates);
			if (!rates || base_currency === Currency.USD) return target_amount;

			const target_rate = Number.parseFloat(rates[target_currency] ?? 1);
			const base_rate = Number.parseFloat(rates[base_currency] ?? 1);
			return (target_amount / (target_rate / base_rate)).toFixed(2);
		},
		[rates],
	);

	return { calculateAmountByCurrency };
};
export default useExchangeRates;
