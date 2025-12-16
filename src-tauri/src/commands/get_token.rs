use tauri::{AppHandle, State};

use crate::services::TwitchService;

#[tauri::command]
pub async fn get_token(
    app: AppHandle,
    twitch_service: State<'_, TwitchService>,
    device_code: String,
) -> Result<(), String> {
    twitch_service.get_token(app, device_code).await
}
