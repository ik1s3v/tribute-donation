use crate::{repositories::SettingsRepository, services::DatabaseService};
use entity::settings::*;
use tauri::State;

#[tauri::command]
pub async fn get_settings(
    database_service: State<'_, DatabaseService>,
) -> Result<Option<Model>, String> {
    let settings = database_service
        .get_settings()
        .await
        .map_err(|e| e.to_string())?;
    Ok(settings)
}
