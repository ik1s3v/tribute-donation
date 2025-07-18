use crate::services::DatabaseService;
use async_trait::async_trait;
use entity::maption_settings::*;
use sea_orm::{ActiveValue::Set, DbErr, EntityTrait};

#[async_trait]
pub trait MaptionSettingsRepository: Send + Sync {
    async fn get_maption_settings(&self) -> Result<Option<Model>, DbErr>;
    async fn update_maption_settings(&self, settings: Model) -> Result<(), DbErr>;
}

#[async_trait]
impl MaptionSettingsRepository for DatabaseService {
    async fn get_maption_settings(&self) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(1).one(&self.connection).await
    }
    async fn update_maption_settings(&self, maption_settings: Model) -> Result<(), DbErr> {
        Entity::update(ActiveModel {
            price_for_meter: Set(maption_settings.price_for_meter),
            latitude: Set(maption_settings.latitude),
            longitude: Set(maption_settings.longitude),
            timer_adding_time: Set(maption_settings.timer_adding_time),
            new_donation_adding_time: Set(maption_settings.new_donation_adding_time),
            is_greater_timer_adding_time: Set(maption_settings.is_greater_timer_adding_time),
            is_new_donation_adding_time: Set(maption_settings.is_new_donation_adding_time),
            id: Set(1),
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
}
