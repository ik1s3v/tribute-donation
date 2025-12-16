use entity::media_settings::*;
use tauri::{AppHandle, Manager, State};

use crate::{
    enums::AppEvent,
    repositories::MediaSettingsRepository,
    services::{DatabaseService, EventMessage, WebSocketBroadcaster},
};

#[tauri::command]
pub async fn update_media_settings(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
    media_settings: Model,
) -> Result<(), String> {
    database_service
        .update_media_settings(media_settings.clone())
        .await
        .map_err(|e| e.to_string())?;
    let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(&EventMessage {
            event: AppEvent::MediaSettings,
            data: media_settings,
        })
        .await;
    Ok(())
}
