use crate::services::TelegramService;
use tauri::{AppHandle, State};

#[tauri::command]
pub async fn is_authorized(
    app: AppHandle,
    telegram_service: State<'_, TelegramService>,
) -> Result<bool, String> {
    telegram_service.is_authorized(app).await
}
