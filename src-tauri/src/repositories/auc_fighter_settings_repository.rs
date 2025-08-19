use crate::services::DatabaseService;
use async_trait::async_trait;
use entity::auc_fighter_settings::*;
use sea_orm::{ActiveValue::Set, DbErr, EntityTrait};

#[async_trait]
pub trait AucFighterSettingsRepository: Send + Sync {
    async fn get_auc_fighter_settings(&self) -> Result<Option<Model>, DbErr>;
    async fn update_auc_fighter_settings(&self, settings: Model) -> Result<(), DbErr>;
}

#[async_trait]
impl AucFighterSettingsRepository for DatabaseService {
    async fn get_auc_fighter_settings(&self) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(1).one(&self.connection).await
    }
    async fn update_auc_fighter_settings(&self, auc_fighter_settings: Model) -> Result<(), DbErr> {
        Entity::update(ActiveModel {
            round_duration: Set(auc_fighter_settings.round_duration),
            is_add_players: Set(auc_fighter_settings.is_add_players),
            id: Set(1),
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
}
