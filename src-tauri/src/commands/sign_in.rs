use grammers_client::types::LoginToken;
use tauri::State;
use tokio::sync::{Mutex, MutexGuard};

use crate::services::TelegramService;

#[tauri::command]
pub async fn sign_in(
    telegram_state: State<'_, Mutex<TelegramService>>,
    login_token_state: State<'_, Mutex<Option<LoginToken>>>,
    phone_code: String,
) -> Result<(), String> {
    let login_token: MutexGuard<'_, Option<LoginToken>> = login_token_state.lock().await;
    let telegram_service: MutexGuard<'_, TelegramService> = telegram_state.lock().await;
    telegram_service
        .sign_in(phone_code, login_token.as_ref().unwrap())
        .await?;
    Ok(())
}
