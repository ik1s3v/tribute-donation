use crate::{repositories::MaptionSettingsRepository, services::DatabaseService};
use entity::maption_settings::*;
use tauri::State;

#[tauri::command]
pub async fn update_maption_settings(
    database_service: State<'_, DatabaseService>,
    maption_settings: Model,
) -> Result<(), String> {
    database_service
        .update_maption_settings(maption_settings.clone())
        .await
}
