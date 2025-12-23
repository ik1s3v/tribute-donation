use crate::{
    repositories::{MessagesRepository, SettingsRepository},
    services::{DatabaseService, ExchangeRatesService},
};
use entity::{donation::Donation, message::*};
use tauri::State;
use tokio::sync::Mutex;

#[tauri::command]
pub async fn get_messages(
    database_service: State<'_, DatabaseService>,
    exchange_rates_service_mutex: State<'_, Mutex<ExchangeRatesService>>,
    limit: u64,
    offset: u64,
) -> Result<Vec<ClientMessage>, String> {
    let mut exchange_rates_service = exchange_rates_service_mutex.lock().await;

    let mut client_messages = database_service
        .get_messages(limit, offset)
        .await
        .map_err(|e| e.to_string())?;
    let settings = database_service.get_settings().await?;
    if let Some(settings) = settings {
        for message in client_messages.iter_mut() {
            if let Some(donation) = &message.donation {
                let exchanged_amount = exchange_rates_service
                    .calculate_amount_by_currency(
                        settings.currency.clone(),
                        donation.currency.clone(),
                        donation.amount,
                    )
                    .await;
                message.donation = Some(Donation {
                    exchanged_amount: Some(exchanged_amount),
                    exchanged_currency: Some(settings.currency.clone()),
                    ..donation.clone()
                });
            }
        }

        return Ok(client_messages);
    }
    Err("No settings".to_string())
}
