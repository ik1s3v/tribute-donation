use async_trait::async_trait;
use entity::message::*;

use crate::services::DatabaseService;
use sea_orm::{
    ActiveValue::Set, ColumnTrait, DbErr, EntityTrait, QueryFilter, QueryOrder, QuerySelect,
};

#[async_trait]
pub trait MessagesRepository: Send + Sync {
    async fn save_message(&self, alert_message: Model) -> Result<(), DbErr>;
    async fn get_messages(&self, limit: u64, offset: u64) -> Result<Vec<Model>, DbErr>;
    async fn get_message_by_service_message_id(
        &self,
        service_message_id: String,
    ) -> Result<Option<Model>, DbErr>;
}

#[async_trait]
impl MessagesRepository for DatabaseService {
    async fn save_message(&self, alert_message: Model) -> Result<(), DbErr> {
        Entity::insert(ActiveModel {
            id: Set(alert_message.id),
            service_message_id: Set(alert_message.service_message_id),
            amount: Set(alert_message.amount),
            user_name: Set(alert_message.user_name),
            text: Set(alert_message.text),
            audio: Set(alert_message.audio),
            service: Set(alert_message.service),
            currency: Set(alert_message.currency),
            created_at: Set(alert_message.created_at),
            played: Set(alert_message.played),
            media: Set(alert_message.media),
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
    async fn get_messages(&self, limit: u64, offset: u64) -> Result<Vec<Model>, DbErr> {
        Entity::find()
            .order_by_desc(Column::CreatedAt)
            .limit(limit)
            .offset(offset)
            .all(&self.connection)
            .await
    }
    async fn get_message_by_service_message_id(
        &self,
        service_message_id: String,
    ) -> Result<Option<Model>, DbErr> {
        Entity::find()
            .filter(Column::ServiceMessageId.eq(service_message_id))
            .one(&self.connection)
            .await
    }
}
