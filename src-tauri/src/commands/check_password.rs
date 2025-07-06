use crate::services::TelegramService;
use tauri::{AppHandle, State};

#[tauri::command]
pub async fn check_password(
    app: AppHandle,
    telegram_service: State<'_, TelegramService>,
    password: String,
) -> Result<(), String> {
    telegram_service.check_password(password, app.clone()).await
}
