use entity::settings::*;

use sea_orm_migration::prelude::*;
use sea_orm_migration::sea_orm::entity::*;
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let connection = manager.get_connection();
        ActiveModel {
            id: Set(1),
            moderation_duration: Set(0),
            alert_paused: Set(false),
            remove_links: Set(false),
            tts_volume: Set(50),
            black_list: Set("".to_string()),
            language: Set("en".to_string()),
        }
        .insert(connection)
        .await?;
        Ok(())
    }
}
