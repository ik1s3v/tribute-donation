use entity::service::{ServiceAuth, ServiceSettings, ServiceType};
use tauri::{AppHandle, Manager, State};

use crate::{
    repositories::ServicesRepository,
    services::{DatabaseService, TwitchService},
};

#[tauri::command]
pub async fn add_custom_rewards(
    app: AppHandle,
    twitch_service: State<'_, TwitchService>,
) -> Result<(), String> {
    let reqwest_client = app.state::<reqwest::Client>();
    let database_service = app.state::<DatabaseService>();
    let service = database_service
        .get_service_by_id(entity::service::ServiceType::Twitch)
        .await
        .unwrap()
        .unwrap();

    if let Some(ServiceAuth::Twitch(auth)) = service.auth {
        if let Some(ServiceSettings::Twitch(settings)) = service.settings {
            let settings = twitch_service
                .add_custom_rewards(
                    reqwest_client.clone(),
                    &auth.access_token,
                    &auth.user_id,
                    settings,
                )
                .await?;
            database_service
                .update_service_settings(ServiceType::Twitch, ServiceSettings::Twitch(settings))
                .await
                .map_err(|e| {
                    log::error!("{}", e.to_string());
                    e.to_string()
                })?;
        }
    }

    Ok(())
}
