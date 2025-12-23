use entity::service::{ServiceSettings, ServiceType};
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
        .get_service_with_auth_by_id(entity::service::ServiceType::Twitch)
        .await?;
    if let Some(service) = service {
        let auth = twitch_service.check_auth(&app).await?;
        let session_id_guard = twitch_service.session_id.lock().await;
        let session_id = session_id_guard.clone();
        drop(session_id_guard);
        if let Some(ServiceSettings::Twitch(mut settings)) = service.settings {
            let title = settings.rewards_name.clone();
            for reward in settings.rewards.iter_mut() {
                let created_reward = twitch_service
                    .add_custom_reward(
                        reqwest_client.clone(),
                        &auth.access_token,
                        &auth.user_id,
                        &title,
                        reward.clone(),
                        session_id.clone(),
                    )
                    .await?;
                if let Some(created_reward) = created_reward {
                    *reward = created_reward;
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
