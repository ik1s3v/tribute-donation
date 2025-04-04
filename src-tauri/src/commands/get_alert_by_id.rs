use std::sync::Arc;

use crate::{repositories::AlertsRepository, services::DatabaseService};
use entity::alert::*;
use tauri::State;

#[tauri::command]
pub async fn get_alert_by_id(
    database_service: State<'_, Arc<DatabaseService>>,
    id: String,
) -> Result<Option<Model>, String> {
    let alert = database_service
        .get_alert_by_id(id)
        .await
        .map_err(|e| e.to_string())?;
    Ok(alert)
}
