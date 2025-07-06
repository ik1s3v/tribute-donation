use crate::services::TelegramService;
use tauri::{AppHandle, State};

#[tauri::command]
pub async fn sign_in(
    app: AppHandle,
    telegram_service: State<'_, TelegramService>,
    phone_code: String,
) -> Result<(), String> {
    telegram_service.sign_in(phone_code, app.clone()).await
}
