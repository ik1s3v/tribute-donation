use crate::{
    repositories::{DonationsRepository, SettingsRepository},
    services::{DatabaseService, ExchangeRatesService},
};
use entity::donation::*;
use tauri::State;
use tokio::sync::Mutex;

#[tauri::command]
pub async fn get_donations(
    database_service: State<'_, DatabaseService>,
    exchange_rates_service_mutex: State<'_, Mutex<ExchangeRatesService>>,
    limit: u64,
    offset: u64,
) -> Result<Vec<ClientDonation>, String> {
    let mut exchange_rates_service = exchange_rates_service_mutex.lock().await;
    let donations = database_service
        .get_donations(limit, offset)
        .await
        .map_err(|e| e.to_string())?;
    let settings = database_service
        .get_settings()
        .await
        .map_err(|e| e.to_string())
        .unwrap()
        .unwrap();

    let mut client_donations = Vec::with_capacity(donations.len());
    for donation in donations.iter() {
        let exchanged_amount = exchange_rates_service
            .calculate_amount_by_currency(
                settings.currency.clone(),
                donation.currency.clone(),
                donation.amount,
            )
            .await;

        client_donations
            .push(donation.to_client_donation(exchanged_amount, settings.currency.clone()));
    }

    Ok(client_donations)
}
