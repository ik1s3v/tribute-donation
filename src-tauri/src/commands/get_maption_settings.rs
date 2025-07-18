use crate::{repositories::MaptionSettingsRepository, services::DatabaseService};
use entity::maption_settings::*;
use tauri::State;

#[tauri::command]
pub async fn get_maption_settings(
    database_service: State<'_, DatabaseService>,
) -> Result<Option<Model>, String> {
    let maption_settings = database_service
        .get_maption_settings()
        .await
        .map_err(|e| e.to_string())?;
    Ok(maption_settings)
}
