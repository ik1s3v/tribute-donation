use crate::{repositories::ServicesRepository, services::DatabaseService};
use entity::service::*;
use tauri::State;

#[tauri::command]
pub async fn get_services(
    database_service: State<'_, DatabaseService>,
) -> Result<Vec<Model>, String> {
    database_service.get_services().await
}
