use async_trait::async_trait;
use entity::{
    donation,
    message::{self, ClientMessage},
};

use crate::services::DatabaseService;
use sea_orm::{ColumnTrait, EntityTrait, QueryFilter};

#[async_trait]
pub trait DonationsRepository: Send + Sync {
    async fn get_donation_by_service_id(
        &self,
        service_id: String,
    ) -> Result<Option<donation::Model>, String>;
    async fn save_donation_message(&self, client_message: ClientMessage) -> Result<(), String>;
}

#[async_trait]
impl DonationsRepository for DatabaseService {
    async fn get_donation_by_service_id(
        &self,
        service_id: String,
    ) -> Result<Option<donation::Model>, String> {
        donation::Entity::find()
            .filter(donation::Column::ServiceId.eq(service_id))
            .one(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get donation by service id error: {}", e);
                e.to_string()
            })
    }
    async fn save_donation_message(&self, client_message: ClientMessage) -> Result<(), String> {
        if let Some(donation) = client_message.donation {
            donation::ActiveModel::builder()
                .set_amount(donation.amount)
                .set_audio(donation.audio)
                .set_created_at(donation.created_at)
                .set_currency(donation.currency)
                .set_exchanged_amount(donation.exchanged_amount)
                .set_exchanged_currency(donation.exchanged_currency)
                .set_id(donation.id)
                .set_media(donation.media)
                .set_played(donation.played)
                .set_service(donation.service)
                .set_service_id(donation.service_id)
                .set_text(donation.text)
                .set_user_name(donation.user_name)
                .set_message(
                    message::ActiveModel::builder()
                        .set_id(client_message.id)
                        .set_type(client_message.r#type)
                        .set_created_at(client_message.created_at),
                )
                .insert(&self.connection)
                .await
                .map_err(|e| {
                    log::error!("Save donation message error: {}", e);
                    e.to_string()
                })?;
        }

        Ok(())
    }
}
