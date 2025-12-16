use async_trait::async_trait;
use entity::{donation, message::*};

use crate::services::DatabaseService;
use sea_orm::{DbErr, EntityTrait, QueryOrder, QuerySelect};

#[async_trait]
pub trait MessagesRepository: Send + Sync {
    async fn get_messages(&self, limit: u64, offset: u64) -> Result<Vec<ClientMessage>, DbErr>;
}

#[async_trait]
impl MessagesRepository for DatabaseService {
    async fn get_messages(&self, limit: u64, offset: u64) -> Result<Vec<ClientMessage>, DbErr> {
        let client_messages: Vec<ClientMessage> = Entity::find()
            .left_join(donation::Entity)
            .order_by_desc(Column::CreatedAt)
            .limit(limit)
            .offset(offset)
            .into_partial_model()
            .all(&self.connection)
            .await?;

        Ok(client_messages)
    }
}
