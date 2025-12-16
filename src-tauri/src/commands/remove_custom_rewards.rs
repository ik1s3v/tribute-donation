use entity::service::{ServiceAuth, ServiceSettings};
use tauri::{AppHandle, Manager, State};

use crate::{
    repositories::ServicesRepository,
    services::{DatabaseService, TwitchService},
};

#[tauri::command]
pub async fn remove_custom_rewards(
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
            twitch_service
                .remove_custom_rewards(
                    reqwest_client.clone(),
                    &auth.access_token,
                    &auth.user_id,
                    settings,
                )
                .await?;
        }
    }

    Ok(())
}
