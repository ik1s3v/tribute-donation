use crate::{repositories::ServicesRepository, services::DatabaseService};
use entity::service::*;
use tauri::State;

#[tauri::command]
pub async fn update_service_auth(
    database_service: State<'_, DatabaseService>,
    id: ServiceType,
    auth: Option<ServiceAuth>,
    authorized: bool,
) -> Result<(), String> {
    database_service
        .update_service_auth(id, auth, authorized)
        .await
}
