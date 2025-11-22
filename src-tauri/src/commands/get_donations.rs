use crate::{repositories::DonationsRepository, services::DatabaseService};
use entity::donation::*;
use tauri::State;

#[tauri::command]
pub async fn get_donations(
    database_service: State<'_, DatabaseService>,
    limit: u64,
    offset: u64,
) -> Result<Vec<Model>, String> {
    let donations = database_service
        .get_donations(limit, offset)
        .await
        .map_err(|e| e.to_string())?;
    Ok(donations)
}
