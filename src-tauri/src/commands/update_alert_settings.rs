use std::sync::Arc;

use entity::alert::*;
use tauri::State;

use crate::{
    enums::AppEvent,
    repositories::AlertsRepository,
    services::{DatabaseService, EventMessage, WebSocketService},
};

#[tauri::command]
pub async fn update_alert_settings(
    database_service: State<'_, Arc<DatabaseService>>,
    websocket_service: State<'_, Arc<WebSocketService>>,
    alert: Model,
) -> Result<(), String> {
    database_service
        .update_alert_settings(alert)
        .await
        .map_err(|e| e.to_string())?;
    let alerts = database_service
        .get_alerts()
        .await
        .map_err(|e| e.to_string())?;
    websocket_service
        .broadcast_event_message(&EventMessage {
            event: AppEvent::Alerts,
            data: alerts,
        })
        .await;
    Ok(())
}
