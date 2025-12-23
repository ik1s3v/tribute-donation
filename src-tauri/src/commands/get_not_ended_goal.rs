use crate::{repositories::GoalsRepository, services::DatabaseService};
use entity::goal::*;
use tauri::State;

#[tauri::command]
pub async fn get_not_ended_goal(
    database_service: State<'_, DatabaseService>,
) -> Result<Option<Model>, String> {
    database_service.get_not_ended_goal().await
}
