use std::sync::Arc;

use entity::media_settings::*;
use tauri::State;

use crate::{
    enums::AppEvent,
    repositories::MediaSettingsRepository,
    services::{DatabaseService, EventMessage, WebSocketService},
};

#[tauri::command]
pub async fn update_media_settings(
    database_service: State<'_, Arc<DatabaseService>>,
    websocket_service: State<'_, Arc<WebSocketService>>,
    media_settings: Model,
) -> Result<(), String> {
    database_service
        .update_media_settings(media_settings.clone())
        .await
        .map_err(|e| e.to_string())?;
    websocket_service
        .broadcast_event_message(&EventMessage {
            event: AppEvent::MediaSettings,
            data: media_settings,
        })
        .await;
    Ok(())
}
