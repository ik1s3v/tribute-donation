use std::collections::HashMap;
use tauri::State;
use tokio::sync::Mutex;

use crate::services::ExchangeRatesService;

#[tauri::command]
pub async fn get_exchange_rates(
    exchange_rates_service_mutex: State<'_, Mutex<ExchangeRatesService>>,
) -> Result<Option<HashMap<String, String>>, ()> {
    let mut exchange_rates_service = exchange_rates_service_mutex.lock().await;
    let rates = exchange_rates_service.get_exchange_rates().await;
    Ok(rates)
}
