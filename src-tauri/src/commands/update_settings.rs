use crate::{
    enums::AppEvent,
    repositories::SettingsRepository,
    services::{DatabaseService, EventMessage, WebSocketService},
};
use entity::settings::*;
use tauri::{AppHandle, State};

#[tauri::command]
pub async fn update_settings(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
    settings: Model,
) -> Result<(), String> {
    database_service
        .update_settings(settings.clone())
        .await
        .map_err(|e| e.to_string())?;
    WebSocketService::broadcast_event_message(
        &EventMessage {
            event: AppEvent::Settings,
            data: settings,
        },
        app,
    )
    .await;
    Ok(())
}
