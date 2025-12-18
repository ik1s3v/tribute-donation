use crate::{repositories::ServicesRepository, services::DatabaseService};
use entity::service::{ServiceSettings, ServiceType};
use tauri::State;

#[tauri::command]
pub async fn update_service_settings(
    database_service: State<'_, DatabaseService>,
    id: ServiceType,
    settings: ServiceSettings,
) -> Result<(), String> {
    database_service
        .update_service_settings(id, settings)
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}
