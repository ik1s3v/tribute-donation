use grammers_client::types::PasswordToken;
use tauri::{AppHandle, State};
use tokio::sync::{Mutex, MutexGuard};

use crate::services::TelegramService;

#[tauri::command]
pub async fn check_password(
    app: AppHandle,
    telegram_state: State<'_, Mutex<TelegramService>>,
    password_token_state: State<'_, Mutex<Option<PasswordToken>>>,
    password: String,
) -> Result<(), String> {
    let password_token: tokio::sync::MutexGuard<'_, Option<PasswordToken>> =
        password_token_state.lock().await;
    let telegram_service: MutexGuard<'_, TelegramService> = telegram_state.lock().await;
    telegram_service
        .check_password(
            password,
            password_token.as_ref().unwrap().to_owned(),
            app.clone(),
        )
        .await?;
    Ok(())
}
