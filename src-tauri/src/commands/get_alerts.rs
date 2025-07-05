use crate::{repositories::AlertsRepository, services::DatabaseService};
use entity::alert::*;
use tauri::State;

#[tauri::command]
pub async fn get_alerts(
    database_service: State<'_, DatabaseService>,
) -> Result<Vec<Model>, String> {
    let alerts = database_service
        .get_alerts()
        .await
        .map_err(|e| e.to_string())?;
    Ok(alerts)
}
