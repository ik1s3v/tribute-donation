use crate::{repositories::GoalsRepository, services::DatabaseService};
use entity::goal::*;
use tauri::State;

#[tauri::command]
pub async fn get_goal_by_id(
    database_service: State<'_, DatabaseService>,
    id: String,
) -> Result<Option<Model>, String> {
    database_service.get_goal_by_id(id).await
}
