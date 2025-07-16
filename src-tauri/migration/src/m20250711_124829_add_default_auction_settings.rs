use entity::auction_settings::*;
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
            leader_change_adding_time: Set(30000),
            new_lot_adding_time: Set(60000),
            new_donation_adding_time: Set(30000),
            timer_adding_time: Set(120000),
            is_greater_timer_adding_time: Set(false),
            is_show_odds: Set(false),
            is_show_total_sum: Set(false),
            is_new_lot_adding_time: Set(true),
            is_leader_change_adding_time: Set(true),
            is_new_donation_adding_time: Set(true),
        }
        .insert(connection)
        .await?;
        Ok(())
    }
}
