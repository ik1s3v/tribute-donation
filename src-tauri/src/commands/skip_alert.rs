use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};
use tauri::AppHandle;

#[tauri::command]
pub async fn skip_alert(app: AppHandle, id: String) -> Result<(), ()> {
    WebSocketService::broadcast_event_message(
        &EventMessage {
            event: AppEvent::SkipAlert,
            data: id,
        },
        app,
    )
    .await;
    Ok(())
}
