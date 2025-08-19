use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketBroadcaster},
};
use tauri::{AppHandle, Manager};

#[tauri::command]
pub async fn resume_auc_fighter_match(app: AppHandle, id: String) -> Result<(), String> {
    let websocket_broadcaster: tauri::State<'_, WebSocketBroadcaster> =
        app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::ResumeAucFighterMatch,
                data: id,
            },
            &app,
        )
        .await
}
