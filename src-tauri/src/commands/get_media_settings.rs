use std::sync::Arc;

use entity::media_settings::*;
use tauri::State;

use crate::{repositories::MediaSettingsRepository, services::DatabaseService};

#[tauri::command]
pub async fn get_media_settings(
    database_service: State<'_, Arc<DatabaseService>>,
) -> Result<Option<Model>, String> {
    let settings = database_service
        .get_media_settings()
        .await
        .map_err(|e| e.to_string())?;
    Ok(settings)
}
