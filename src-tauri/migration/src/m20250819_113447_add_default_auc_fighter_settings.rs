use entity::auc_fighter_settings::*;
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
            round_duration: Set(120000),
            is_add_players: Set(true),
        }
        .insert(connection)
        .await?;
        Ok(())
    }
}
