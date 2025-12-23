use async_trait::async_trait;
use entity::{
    follow,
    message::{self, ClientMessage},
};
use sea_orm::TransactionError;

use crate::services::DatabaseService;
use sea_orm::DbErr;

#[async_trait]
pub trait FollowsRepository: Send + Sync {
    async fn save_follow_message(
        &self,
        client_message: ClientMessage,
    ) -> Result<(), TransactionError<DbErr>>;
}

#[async_trait]
impl FollowsRepository for DatabaseService {
    async fn save_follow_message(
        &self,
        client_message: ClientMessage,
    ) -> Result<(), TransactionError<DbErr>> {
        if let Some(follow) = client_message.follow {
            follow::ActiveModel::builder()
                .set_followed_at(follow.followed_at)
                .set_id(follow.id)
                .set_played(follow.played)
                .set_service(follow.service)
                .set_service_id(follow.service_id)
                .set_user_name(follow.user_name)
                .set_user_id(follow.user_id)
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
