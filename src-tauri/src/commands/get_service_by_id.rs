use crate::{repositories::ServicesRepository, services::DatabaseService};
use entity::service::*;
use tauri::State;

#[tauri::command]
pub async fn get_service_by_id(
    database_service: State<'_, DatabaseService>,
    id: ServiceType,
) -> Result<Option<Model>, String> {
    database_service.get_service_by_id(id).await
}
