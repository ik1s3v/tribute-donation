use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};
use tauri::AppHandle;

#[tauri::command]
pub async fn skip_media(app: AppHandle, id: String) -> Result<(), ()> {
    WebSocketService::broadcast_event_message(
        &EventMessage {
            event: AppEvent::SkipMedia,
            data: id,
        },
        app,
    )
    .await;
    Ok(())
}
