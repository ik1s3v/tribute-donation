use async_trait::async_trait;
use entity::{
    message::{self, ClientMessage},
    raid,
};

use crate::services::DatabaseService;

#[async_trait]
pub trait RaidsRepository: Send + Sync {
    async fn save_raid_message(&self, client_message: ClientMessage) -> Result<(), String>;
}

#[async_trait]
impl RaidsRepository for DatabaseService {
    async fn save_raid_message(&self, client_message: ClientMessage) -> Result<(), String> {
        if let Some(raid) = client_message.raid {
            raid::ActiveModel::builder()
                .set_created_at(raid.created_at)
                .set_id(raid.id)
                .set_played(raid.played)
                .set_service(raid.service)
                .set_service_id(raid.service_id)
                .set_from_broadcaster_user_id(raid.from_broadcaster_user_id)
                .set_from_broadcaster_user_name(raid.from_broadcaster_user_name)
                .set_viewers(raid.viewers)
                .set_message(
                    message::ActiveModel::builder()
                        .set_id(client_message.id)
                        .set_type(client_message.r#type)
                        .set_created_at(client_message.created_at),
                )
                .insert(&self.connection)
                .await
                .map_err(|e| {
                    log::error!("Save raid error: {}", e.to_string());
                    e.to_string()
                })?;
        }

        Ok(())
    }
}
