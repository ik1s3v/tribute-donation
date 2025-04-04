use tauri::State;
use tokio::sync::Mutex;

use crate::services::TelegramService;

#[tauri::command]
pub async fn is_authorized(
    telegram_state: State<'_, Mutex<TelegramService>>,
) -> Result<bool, String> {
    let telegram_service = telegram_state.lock().await;
    let is_authorized = telegram_service.is_authorized().await?;
    Ok(is_authorized)
}
