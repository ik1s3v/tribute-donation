use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};
use tauri::{AppHandle, State};

#[tauri::command]
pub async fn play_media(
    app: AppHandle,
    websocket_service: State<'_, WebSocketService>,
    id: String,
) -> Result<(), ()> {
    websocket_service
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::PlayMedia,
                data: id,
            },
            app,
        )
        .await;
    Ok(())
}
