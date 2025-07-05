use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};
use tauri::{AppHandle, State};

#[tauri::command]
pub async fn pause_media(
    app: AppHandle,
    websocket_service: State<'_, WebSocketService>,
    id: String,
) -> Result<(), ()> {
    websocket_service
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::PauseMedia,
                data: id,
            },
            app,
        )
        .await;
    Ok(())
}
