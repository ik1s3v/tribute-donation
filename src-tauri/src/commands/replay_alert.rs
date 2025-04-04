use std::sync::Arc;

use entity::message::Model;
use tauri::State;

use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};

#[tauri::command]
pub async fn replay_alert(
    websocket_service: State<'_, Arc<WebSocketService>>,
    message: Model,
) -> Result<(), ()> {
    websocket_service
        .broadcast_event_message(&EventMessage {
            event: AppEvent::ReplayAlert,
            data: message,
        })
        .await;
    Ok(())
}
