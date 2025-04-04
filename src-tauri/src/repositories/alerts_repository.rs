use entity::alert::*;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, DbErr, EntityTrait};
#[async_trait]
pub trait AlertsRepository: Send + Sync {
    async fn get_alerts(&self) -> Result<Vec<Model>, DbErr>;
    async fn get_alert_by_id(&self, id: String) -> Result<Option<Model>, DbErr>;
    async fn update_alert_settings(&self, alert: Model) -> Result<(), DbErr>;
}

#[async_trait]
impl AlertsRepository for DatabaseService {
    async fn get_alerts(&self) -> Result<Vec<Model>, DbErr> {
        Entity::find().all(&self.connection).await
    }
    async fn get_alert_by_id(&self, id: String) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(id).one(&self.connection).await
    }
    async fn update_alert_settings(&self, alert: Model) -> Result<(), DbErr> {
        Entity::update(ActiveModel {
            id: Set(alert.id),
            audio: Set(alert.audio),
            image: Set(alert.image),
            name: Set(alert.name),
            group_id: Set(alert.group_id),
            audio_volume: Set(alert.audio_volume),
            view_type: Set(alert.view_type),
            title_style: Set(alert.title_style),
            message_style: Set(alert.message_style),
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
}
