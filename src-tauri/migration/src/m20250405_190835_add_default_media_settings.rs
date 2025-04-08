use entity::media_settings::*;
use sea_orm_migration::prelude::*;
use sea_orm_migration::sea_orm::entity::*;
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let connection = manager.get_connection();
        let media_platform_settings = MediaPlatformSettings {
            enabled: true,
            video_volume: 50,
            min_amount_eur: 0,
            min_amount_rub: 0,
            min_views: 5000,
        };
        ActiveModel {
            id: Set(1),
            youtube: Set(media_platform_settings.clone()),
            twitch: Set(media_platform_settings.clone()),
            tiktok: Set(media_platform_settings.clone()),
        }
        .insert(connection)
        .await?;
        Ok(())
    }
}
