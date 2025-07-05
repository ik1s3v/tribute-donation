use entity::media_settings::*;
use tauri::{AppHandle, State};

use crate::{
    enums::AppEvent,
    repositories::MediaSettingsRepository,
    services::{DatabaseService, EventMessage, WebSocketService},
};

#[tauri::command]
pub async fn update_media_settings(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
    websocket_service: State<'_, WebSocketService>,
    media_settings: Model,
) -> Result<(), String> {
    database_service
        .update_media_settings(media_settings.clone())
        .await
        .map_err(|e| e.to_string())?;
    websocket_service
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::MediaSettings,
                data: media_settings,
            },
            app,
        )
        .await;
    Ok(())
}
