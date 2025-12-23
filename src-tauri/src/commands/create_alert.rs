use entity::alert::*;
use tauri::{AppHandle, Manager, State};

use crate::{
    enums::AppEvent,
    repositories::AlertsRepository,
    services::{DatabaseService, EventMessage, WebSocketBroadcaster},
};

#[tauri::command]
pub async fn create_alert(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
    alert: Model,
) -> Result<(), String> {
    database_service.create_alert(alert).await?;
    let alerts = database_service.get_alerts().await?;
    let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(&EventMessage {
            event: AppEvent::Alerts,
            data: alerts,
        })
        .await;
    Ok(())
}
