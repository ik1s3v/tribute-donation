use entity::goal::*;
use tauri::{AppHandle, Manager, State};

use crate::{
    enums::AppEvent,
    repositories::GoalsRepository,
    services::{DatabaseService, EventMessage, WebSocketBroadcaster},
};

#[tauri::command]
pub async fn create_goal(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
    goal: Model,
) -> Result<(), String> {
    database_service
        .create_goal(goal.clone())
        .await
        .map_err(|e| e.to_string())?;

    let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(&EventMessage {
            event: AppEvent::Goal,
            data: goal,
        })
        .await
}
