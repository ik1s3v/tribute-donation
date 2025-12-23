use async_trait::async_trait;
use entity::{donation, follow, message::*, subscription};

use crate::services::DatabaseService;
use sea_orm::{EntityTrait, QueryOrder, QuerySelect};

#[async_trait]
pub trait MessagesRepository: Send + Sync {
    async fn get_messages(&self, limit: u64, offset: u64) -> Result<Vec<ClientMessage>, String>;
}

#[async_trait]
impl MessagesRepository for DatabaseService {
    async fn get_messages(&self, limit: u64, offset: u64) -> Result<Vec<ClientMessage>, String> {
        let client_messages: Vec<ClientMessage> = Entity::find()
            .left_join(donation::Entity)
            .left_join(follow::Entity)
            .left_join(subscription::Entity)
            .order_by_desc(Column::CreatedAt)
            .limit(limit)
            .offset(offset)
            .into_partial_model()
            .all(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get messages error: {}", e);
                e.to_string()
            })?;

        Ok(client_messages)
    }
}
