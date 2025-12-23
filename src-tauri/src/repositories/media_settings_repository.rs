use entity::media_settings::*;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, EntityTrait};
#[async_trait]
pub trait MediaSettingsRepository: Send + Sync {
    async fn get_media_settings(&self) -> Result<Option<Model>, String>;
    async fn update_media_settings(&self, media_settings: Model) -> Result<(), String>;
}

#[async_trait]
impl MediaSettingsRepository for DatabaseService {
    async fn get_media_settings(&self) -> Result<Option<Model>, String> {
        Entity::find_by_id(1)
            .one(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get media settings error: {}", e);
                e.to_string()
            })
    }

    async fn update_media_settings(&self, alert: Model) -> Result<(), String> {
        Entity::update(ActiveModel {
            id: Set(alert.id),
            youtube: Set(alert.youtube),
            twitch: Set(alert.twitch),
            tiktok: Set(alert.tiktok),
        })
        .exec(&self.connection)
        .await
        .map_err(|e| {
            log::error!("Update media settings error: {}", e);
            e.to_string()
        })?;
        Ok(())
    }
}
