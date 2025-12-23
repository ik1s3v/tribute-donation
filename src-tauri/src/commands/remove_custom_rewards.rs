use entity::service::{ServiceSettings, ServiceType, TwitchIntegrationReward};
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
        .get_service_with_auth_by_id(entity::service::ServiceType::Twitch)
        .await?;
    if let Some(service) = service {
        let auth = twitch_service.check_auth(&app).await?;

        if let Some(ServiceSettings::Twitch(mut settings)) = service.settings {
            for reward in settings.rewards.iter_mut() {
                twitch_service
                    .remove_custom_reward(
                        reqwest_client.clone(),
                        &auth.access_token,
                        &auth.user_id,
                        reward.clone(),
                    )
                    .await?;
                *reward = TwitchIntegrationReward {
                    id: reward.id.clone(),
                    cost: reward.cost,
                    color: reward.color.clone(),
                    reward_id: None,
                    subscription_id: None,
                }
            }
            database_service
                .update_service_settings(ServiceType::Twitch, ServiceSettings::Twitch(settings))
                .await
                .map_err(|e| {
                    log::error!("{}", e.to_string());
                    e.to_string()
                })?;
        }
        return Ok(());
    }
    Err("Service not found".to_string())
}
