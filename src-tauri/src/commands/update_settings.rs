use std::sync::Arc;

use entity::settings::*;
use tauri::State;

use crate::{
    enums::AppEvent,
    repositories::SettingsRepository,
    services::{DatabaseService, EventMessage, WebSocketService},
};

#[tauri::command]
pub async fn update_settings(
    database_service: State<'_, Arc<DatabaseService>>,
    websocket_service: State<'_, Arc<WebSocketService>>,
    settings: Model,
) -> Result<(), String> {
    database_service
        .update_settings(settings.clone())
        .await
        .map_err(|e| e.to_string())?;
    websocket_service
        .broadcast_event_message(&EventMessage {
            event: AppEvent::Settings,
            data: settings,
        })
        .await;
    Ok(())
}
