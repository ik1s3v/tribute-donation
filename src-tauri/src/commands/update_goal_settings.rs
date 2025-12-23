use entity::goal::*;
use tauri::{AppHandle, Manager, State};

use crate::{
    enums::AppEvent,
    repositories::GoalsRepository,
    services::{DatabaseService, EventMessage, WebSocketBroadcaster},
};

#[tauri::command]
pub async fn update_goal_settings(
    app: AppHandle,
    database_service: State<'_, DatabaseService>,
    goal: Model,
) -> Result<(), String> {
    let updated_goal = database_service.update_goal_settings(goal).await?;

    let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(&EventMessage {
            event: AppEvent::Goal,
            data: updated_goal,
        })
        .await;
    Ok(())
}
