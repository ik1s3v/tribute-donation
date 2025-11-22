use chrono::Utc;
use entity::donation::Currency;
use serde::Deserialize;
use std::{collections::HashMap, fmt::Debug};

#[derive(Debug, Deserialize)]
struct ExchangeRatesResponse {
    data: ExchangeRatesData,
}

#[derive(Clone, Debug, Deserialize)]
struct ExchangeRatesData {
    rates: HashMap<String, String>,
}
#[derive(Clone, Debug)]
pub struct ExchangeRatesService {
    rates: Option<HashMap<String, String>>,
    fetch_timestamp: i64,
}

impl ExchangeRatesService {
    pub fn new() -> Self {
        Self {
            fetch_timestamp: 0,
            rates: None,
        }
    }

    pub async fn get_exchange_rates(&mut self) -> Option<HashMap<String, String>> {
        let now_utc = Utc::now();

        if self.fetch_timestamp + 5 * 3600 > now_utc.timestamp() {
            return self.rates.clone();
        }

        let url = "https://api.coinbase.com/v2/exchange-rates?currency=USD";

        let response = match reqwest::get(url).await {
            Ok(res) => res,
            Err(e) => {
                log::error!("{}", e.to_string());
                return None;
            }
        };

        let exchange_rates: ExchangeRatesResponse = match response.json().await {
            Ok(rates) => rates,
            Err(e) => {
                log::error!("{}", e.to_string());
                return None;
            }
        };
        self.rates = Some(exchange_rates.data.rates);
        self.fetch_timestamp = Utc::now().timestamp();

        return self.rates.clone();
    }

    pub async fn calculate_amount_by_currency(
        &mut self,
        base_currency: Currency,
        target_currency: Currency,
        target_amount: f64,
    ) -> f64 {
        let rates = match self.get_exchange_rates().await {
            Some(rates) => rates,
            _ => return 0.0,
        };
        if base_currency == Currency::USD {
            let target_rate = rates
                .get(target_currency.as_str())
                .unwrap_or(&"1.0".to_string())
                .parse::<f64>()
                .unwrap();
            return target_amount / target_rate;
        }
        let target_rate = rates
            .get(target_currency.as_str())
            .unwrap_or(&"1.0".to_string())
            .parse::<f64>()
            .unwrap();
        let base_rate = rates
            .get(base_currency.as_str())
            .unwrap_or(&"1.0".to_string())
            .parse::<f64>()
            .unwrap();

        return target_amount / (target_rate / base_rate);
    }
}
