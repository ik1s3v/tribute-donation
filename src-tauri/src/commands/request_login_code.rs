use crate::services::TelegramService;
use tauri::{AppHandle, State};

#[tauri::command]
pub async fn request_login_code(
    app: AppHandle,
    telegram_service: State<'_, TelegramService>,
    phone_number: String,
) -> Result<(), String> {
    telegram_service.request_login_code(phone_number, app).await
}
