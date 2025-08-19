use crate::{
    commands::AucFighterMatch,
    enums::AppEvent,
    services::{EventMessage, WebSocketBroadcaster},
};
use tauri::{AppHandle, Manager};

#[tauri::command]
pub async fn update_auc_fighter_match(app: AppHandle, data: AucFighterMatch) -> Result<(), String> {
    let websocket_broadcaster: tauri::State<'_, WebSocketBroadcaster> =
        app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::UpdateAucFighterMatch,
                data,
            },
            &app,
        )
        .await
}
