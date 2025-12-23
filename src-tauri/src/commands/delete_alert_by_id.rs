use tauri::{AppHandle, Manager, State};

use crate::{
    enums::AppEvent,
    repositories::AlertsRepository,
    services::{DatabaseService, EventMessage, WebSocketBroadcaster},
};

#[tauri::command]
pub async fn delete_alert_by_id(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
    id: String,
) -> Result<(), String> {
    database_service.delete_alert_by_id(id).await?;
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
