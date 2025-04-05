use entity::media_settings::*;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, DbErr, EntityTrait};
#[async_trait]
pub trait MediaSettingsRepository: Send + Sync {
    async fn get_media_settings(&self) -> Result<Option<Model>, DbErr>;
    async fn update_media_settings(&self, media_settings: Model) -> Result<(), DbErr>;
}

#[async_trait]
impl MediaSettingsRepository for DatabaseService {
    async fn get_media_settings(&self) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(1).one(&self.connection).await
    }

    async fn update_media_settings(&self, alert: Model) -> Result<(), DbErr> {
        Entity::update(ActiveModel {
            id: Set(alert.id),
            youtube: Set(alert.youtube),
            twitch: Set(alert.twitch),
            tiktok: Set(alert.tiktok),
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
}
