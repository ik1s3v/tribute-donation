use crate::{repositories::AlertsRepository, services::DatabaseService};
use entity::alert::*;
use tauri::State;

#[tauri::command]
pub async fn get_alert_by_id(
    database_service: State<'_, DatabaseService>,
    id: String,
) -> Result<Option<Model>, String> {
    database_service.get_alert_by_id(id).await
}
