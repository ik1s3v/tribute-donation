use crate::{repositories::ServicesRepository, services::DatabaseService};
use entity::service::ServiceSettings;
use tauri::State;

#[tauri::command]
pub async fn update_twitch_service_settings(
    database_service: State<'_, DatabaseService>,
    settings: ServiceSettings,
) -> Result<(), String> {
    database_service
        .update_twitch_service_settings(settings)
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}
