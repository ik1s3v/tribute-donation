use grammers_client::types::{LoginToken, PasswordToken};
use tauri::{AppHandle, State};
use tokio::sync::{Mutex, MutexGuard};

use crate::services::TelegramService;

#[tauri::command]
pub async fn sign_in(
    app: AppHandle,
    telegram_state: State<'_, Mutex<TelegramService>>,
    login_token_state: State<'_, Mutex<Option<LoginToken>>>,
    password_token_state: State<'_, Mutex<Option<PasswordToken>>>,
    phone_code: String,
) -> Result<(), String> {
    let mut password_token: tokio::sync::MutexGuard<'_, Option<PasswordToken>> =
        password_token_state.lock().await;
    let login_token: MutexGuard<'_, Option<LoginToken>> = login_token_state.lock().await;
    let telegram_service: MutexGuard<'_, TelegramService> = telegram_state.lock().await;
    match telegram_service
        .sign_in(phone_code, login_token.as_ref().unwrap(), app.clone())
        .await
    {
        Ok(Some(new_password_token)) => {
            *password_token = Some(new_password_token);
            return Err("Password required".to_string());
        }
        Ok(None) => return Ok(()),
        Err(err) => {
            return Err(err);
        }
    };
}
