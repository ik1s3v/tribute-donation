use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};
use entity::message::Model;
use tauri::AppHandle;

#[tauri::command]
pub async fn replay_media(app: AppHandle, message: Model) -> Result<(), ()> {
    WebSocketService::broadcast_event_message(
        &EventMessage {
            event: AppEvent::ReplayMedia,
            data: message,
        },
        app,
    )
    .await;
    Ok(())
}
