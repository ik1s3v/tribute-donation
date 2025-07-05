use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};
use entity::message::Model;
use tauri::{AppHandle, State};

#[tauri::command]
pub async fn replay_alert(
    app: AppHandle,
    websocket_service: State<'_, WebSocketService>,
    message: Model,
) -> Result<(), ()> {
    websocket_service
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::ReplayAlert,
                data: message,
            },
            app,
        )
        .await;
    Ok(())
}
