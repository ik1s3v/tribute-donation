use crate::{repositories::AucFighterSettingsRepository, services::DatabaseService};
use entity::auc_fighter_settings::*;
use tauri::State;

#[tauri::command]
pub async fn get_auc_fighter_settings(
    database_service: State<'_, DatabaseService>,
) -> Result<Option<Model>, String> {
    let auc_fighter_settings = database_service
        .get_auc_fighter_settings()
        .await
        .map_err(|e| e.to_string())?;
    Ok(auc_fighter_settings)
}
