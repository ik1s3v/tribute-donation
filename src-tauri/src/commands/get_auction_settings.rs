use crate::{repositories::AuctionSettingsRepository, services::DatabaseService};
use entity::auction_settings::*;
use tauri::State;

#[tauri::command]
pub async fn get_auction_settings(
    database_service: State<'_, DatabaseService>,
) -> Result<Option<Model>, String> {
    let auction_settings = database_service
        .get_auction_settings()
        .await
        .map_err(|e| e.to_string())?;
    Ok(auction_settings)
}
