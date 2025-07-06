use entity::alert::*;
use tauri::{AppHandle, State};

use crate::{
    enums::AppEvent,
    repositories::AlertsRepository,
    services::{DatabaseService, EventMessage, WebSocketService},
};

#[tauri::command]
pub async fn update_alert_settings(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
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
    WebSocketService::broadcast_event_message(
        &EventMessage {
            event: AppEvent::Alerts,
            data: alerts,
        },
        app,
    )
    .await;
    Ok(())
}
