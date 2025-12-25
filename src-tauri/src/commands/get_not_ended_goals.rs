use crate::{repositories::GoalsRepository, services::DatabaseService};
use entity::goal::*;
use tauri::State;

#[tauri::command]
pub async fn get_not_ended_goals(
    database_service: State<'_, DatabaseService>,
) -> Result<Vec<Model>, String> {
    database_service.get_not_ended_goals().await
}
