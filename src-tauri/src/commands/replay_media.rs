use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketBroadcaster},
};
use entity::message::Model;
use tauri::{AppHandle, Manager};

#[tauri::command]
pub async fn replay_media(app: AppHandle, message: Model) -> Result<(), String> {
    let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::ReplayMedia,
                data: message,
            },
            &app,
        )
        .await
}
