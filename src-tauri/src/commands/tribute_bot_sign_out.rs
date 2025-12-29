use tauri::{AppHandle, State};

use crate::services::TelegramService;

#[tauri::command]
pub async fn tribute_bot_sign_out(
    app: AppHandle,
    telegram_service: State<'_, TelegramService>,
) -> Result<(), String> {
    telegram_service.sign_out(&app).await?;
    Ok(())
}
