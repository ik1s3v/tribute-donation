use tauri::{AppHandle, Manager};

use crate::services::TelegramService;

#[tauri::command]
pub async fn tribute_bot_sign_out(app: AppHandle) -> Result<(), String> {
    let telegram_service = app.state::<TelegramService>();
    telegram_service.sign_out(&app).await?;
    Ok(())
}
