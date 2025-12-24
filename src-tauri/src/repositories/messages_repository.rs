use async_trait::async_trait;
use entity::{donation, follow, message::*, raid, subscription};

use crate::services::DatabaseService;
use sea_orm::{ColumnTrait, EntityTrait, QueryFilter, QueryOrder, QuerySelect};

#[async_trait]
pub trait MessagesRepository: Send + Sync {
    async fn get_messages(
        &self,
        limit: &u64,
        offset: &u64,
        exclude_donations: &bool,
        exclude_subscriptions: &bool,
        exclude_follows: &bool,
        exclude_raids: &bool,
    ) -> Result<Vec<ClientMessage>, String>;
}

#[async_trait]
impl MessagesRepository for DatabaseService {
    async fn get_messages(
        &self,
        limit: &u64,
        offset: &u64,
        exclude_donations: &bool,
        exclude_subscriptions: &bool,
        exclude_follows: &bool,
        exclude_raids: &bool,
    ) -> Result<Vec<ClientMessage>, String> {
        let mut query = Entity::find()
            .left_join(donation::Entity)
            .left_join(follow::Entity)
            .left_join(subscription::Entity)
            .left_join(raid::Entity);
        if *exclude_donations {
            query = query.filter(donation::Column::Id.is_null());
        }
        if *exclude_subscriptions {
            query = query.filter(subscription::Column::Id.is_null());
        }
        if *exclude_follows {
            query = query.filter(follow::Column::Id.is_null());
        }
        if *exclude_raids {
            query = query.filter(raid::Column::Id.is_null());
        }
        let client_messages: Vec<ClientMessage> = query
            .order_by_desc(Column::CreatedAt)
            .limit(*limit)
            .offset(*offset)
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
