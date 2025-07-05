use crate::{repositories::MessagesRepository, services::DatabaseService};
use entity::message::*;
use tauri::State;

#[tauri::command]
pub async fn get_messages(
    database_service: State<'_, DatabaseService>,
    limit: u64,
    offset: u64,
) -> Result<Vec<Model>, String> {
    let messages = database_service
        .get_messages(limit, offset)
        .await
        .map_err(|e| e.to_string())?;
    Ok(messages)
}
