use std::sync::Arc;

use tauri::State;

use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};

#[tauri::command]
pub async fn skip_media(
    websocket_service: State<'_, Arc<WebSocketService>>,
    id: String,
) -> Result<(), ()> {
    websocket_service
        .broadcast_event_message(&EventMessage {
            event: AppEvent::SkipMedia,
            data: id,
        })
        .await;
    Ok(())
}
