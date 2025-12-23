use entity::settings::*;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, EntityTrait};

#[async_trait]
pub trait SettingsRepository: Send + Sync {
    async fn get_settings(&self) -> Result<Option<Model>, String>;
    async fn update_settings(&self, settings: Model) -> Result<(), String>;
}

#[async_trait]
impl SettingsRepository for DatabaseService {
    async fn get_settings(&self) -> Result<Option<Model>, String> {
        Entity::find_by_id(1)
            .one(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get settings error: {}", e);
                e.to_string()
            })
    }
    async fn update_settings(&self, settings: Model) -> Result<(), String> {
        Entity::update(ActiveModel {
            moderation_duration: Set(settings.moderation_duration),
            alert_paused: Set(settings.alert_paused),
            remove_links: Set(settings.remove_links),
            black_list: Set(settings.black_list),
            tts_volume: Set(settings.tts_volume),
            language: Set(settings.language),
            currency: Set(settings.currency),
            id: Set(1),
        })
        .exec(&self.connection)
        .await
        .map_err(|e| {
            log::error!("Update settings error: {}", e);
            e.to_string()
        })?;
        Ok(())
    }
}
