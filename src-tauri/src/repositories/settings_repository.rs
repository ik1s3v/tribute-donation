use entity::settings::*;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, DbErr, EntityTrait};

#[async_trait]
pub trait SettingsRepository: Send + Sync {
    async fn get_settings(&self) -> Result<Option<Model>, DbErr>;
    async fn update_settings(&self, settings: Model) -> Result<(), DbErr>;
}

#[async_trait]
impl SettingsRepository for DatabaseService {
    async fn get_settings(&self) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(1).one(&self.connection).await
    }
    async fn update_settings(&self, settings: Model) -> Result<(), DbErr> {
        Entity::update(ActiveModel {
            moderation_duration: Set(settings.moderation_duration),
            alert_paused: Set(settings.alert_paused),
            remove_links: Set(settings.remove_links),
            black_list: Set(settings.black_list),
            tts_volume: Set(settings.tts_volume),
            language: Set(settings.language),
            id: Set(1),
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
}
