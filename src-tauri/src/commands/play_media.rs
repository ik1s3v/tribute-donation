use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};
use tauri::AppHandle;

#[tauri::command]
pub async fn play_media(app: AppHandle, id: String) -> Result<(), ()> {
    WebSocketService::broadcast_event_message(
        &EventMessage {
            event: AppEvent::PlayMedia,
            data: id,
        },
        app,
    )
    .await;
    Ok(())
}
