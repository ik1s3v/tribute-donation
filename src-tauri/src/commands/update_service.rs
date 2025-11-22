use crate::{repositories::ServicesRepository, services::DatabaseService};
use entity::service::*;
use tauri::State;

#[tauri::command]
pub async fn update_service(
    database_service: State<'_, DatabaseService>,
    service: Model,
) -> Result<(), String> {
    database_service
        .update_service(service.clone())
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}
