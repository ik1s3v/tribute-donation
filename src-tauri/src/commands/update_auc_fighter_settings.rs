use crate::{
    enums::AppEvent,
    repositories::AucFighterSettingsRepository,
    services::{DatabaseService, EventMessage, WebSocketBroadcaster},
};
use entity::auc_fighter_settings::*;
use tauri::{AppHandle, Manager, State};

#[tauri::command]
pub async fn update_auc_fighter_settings(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
    auc_fighter_settings: Model,
) -> Result<(), String> {
    database_service
        .update_auc_fighter_settings(auc_fighter_settings.clone())
        .await
        .map_err(|e| e.to_string())?;
    let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(&EventMessage {
            event: AppEvent::AucFighterSettings,
            data: auc_fighter_settings,
        })
        .await
}
