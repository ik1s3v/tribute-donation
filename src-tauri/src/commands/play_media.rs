use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketBroadcaster},
};
use tauri::{AppHandle, Manager};

#[tauri::command]
pub async fn play_media(app: AppHandle, id: String) -> Result<(), String> {
    let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::PlayMedia,
                data: id,
            },
            &app,
        )
        .await
}
