use async_trait::async_trait;
use entity::{
    message::{self, ClientMessage},
    subscription,
};
use sea_orm::TransactionError;

use crate::services::DatabaseService;
use sea_orm::DbErr;

#[async_trait]
pub trait SubscriptionsRepository: Send + Sync {
    async fn save_subscribe_message(
        &self,
        client_message: ClientMessage,
    ) -> Result<(), TransactionError<DbErr>>;
}

#[async_trait]
impl SubscriptionsRepository for DatabaseService {
    async fn save_subscribe_message(
        &self,
        client_message: ClientMessage,
    ) -> Result<(), TransactionError<DbErr>> {
        if let Some(subscription) = client_message.subscription {
            subscription::ActiveModel::builder()
                .set_subscribed_at(subscription.subscribed_at)
                .set_id(subscription.id)
                .set_played(subscription.played)
                .set_service(subscription.service)
                .set_service_id(subscription.service_id)
                .set_user_name(subscription.user_name)
                .set_user_id(subscription.user_id)
                .set_is_gift(subscription.is_gift)
                .set_is_anonymous(subscription.is_anonymous)
                .set_tier(subscription.tier)
                .set_total(subscription.total)
                .set_cumulative_total(subscription.cumulative_total)
                .set_message(
                    message::ActiveModel::builder()
                        .set_id(client_message.id)
                        .set_type(client_message.r#type)
                        .set_created_at(client_message.created_at),
                )
                .insert(&self.connection)
                .await?;
        }

        Ok(())
    }
}
