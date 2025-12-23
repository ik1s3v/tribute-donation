use crate::{repositories::GoalsRepository, services::DatabaseService};
use entity::goal::*;
use tauri::State;

#[tauri::command]
pub async fn get_goals(
    database_service: State<'_, DatabaseService>,
    limit: u64,
    offset: u64,
) -> Result<Vec<Model>, String> {
    database_service.get_goals(limit, offset).await
}
