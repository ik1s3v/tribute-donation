use crate::{repositories::MaptionSettingsRepository, services::DatabaseService};
use entity::maption_settings::*;
use tauri::State;

#[tauri::command]
pub async fn get_maption_settings(
    database_service: State<'_, DatabaseService>,
) -> Result<Option<Model>, String> {
    database_service.get_maption_settings().await
}
