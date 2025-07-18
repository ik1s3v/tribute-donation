use entity::maption_settings::*;
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
            price_for_meter: Set("1".to_string()),
            latitude: Set("-16.5004".to_string()),
            longitude: Set("-151.7415".to_string()),
            new_donation_adding_time: Set(30000),
            timer_adding_time: Set(120000),
            is_greater_timer_adding_time: Set(false),
            is_new_donation_adding_time: Set(true),
        }
        .insert(connection)
        .await?;
        Ok(())
    }
}
