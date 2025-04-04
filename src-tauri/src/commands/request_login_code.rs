use grammers_client::types::LoginToken;
use tauri::State;
use tokio::sync::Mutex;

use crate::services::TelegramService;

#[tauri::command]
pub async fn request_login_code(
    telegram_state: State<'_, Mutex<TelegramService>>,
    login_token_state: State<'_, Mutex<Option<LoginToken>>>,
    phone_number: String,
) -> Result<(), String> {
    let mut login_token: tokio::sync::MutexGuard<'_, Option<LoginToken>> =
        login_token_state.lock().await;
    let mut telegram_service: tokio::sync::MutexGuard<'_, TelegramService> =
        telegram_state.lock().await;
    *login_token = Some(telegram_service.request_login_code(phone_number).await?);
    Ok(())
}
