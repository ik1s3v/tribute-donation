use entity::service::{ServiceAuth, ServiceType};
use tauri::State;

use crate::{
    repositories::ServicesRepository,
    services::{DatabaseService, TwitchService},
};

#[tauri::command]
pub async fn get_token(
    twitch_service: State<'_, TwitchService>,
    database_service: State<'_, DatabaseService>,
    device_code: String,
) -> Result<(), String> {
    match twitch_service.get_token(device_code).await {
        Ok(auth) => {
            database_service
                .update_service_auth(ServiceType::Twitch, Some(ServiceAuth::Twitch(auth)), true)
                .await
                .map_err(|e| {
                    log::error!("{}", e.to_string());
                    e.to_string()
                })?;
        }
        Err(e) => {
            return Err(e);
        }
    }
    Ok(())
}
