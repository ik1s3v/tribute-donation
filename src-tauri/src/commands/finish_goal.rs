use tauri::State;

use crate::{repositories::GoalsRepository, services::DatabaseService};

#[tauri::command]
pub async fn finish_goal(
    database_service: State<'_, DatabaseService>,
    id: String,
) -> Result<(), String> {
    database_service.finish_goal(id).await
}
