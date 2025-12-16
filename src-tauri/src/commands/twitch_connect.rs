use tauri::{AppHandle, State};

use crate::services::TwitchService;

#[tauri::command]
pub async fn twitch_connect(
    app: AppHandle,
    twitch_service: State<'_, TwitchService>,
) -> Result<(), String> {
    twitch_service.connect(app).await
}
