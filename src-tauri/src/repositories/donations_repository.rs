use async_trait::async_trait;
use entity::{
    donation,
    message::{self, ClientMessage},
};
use sea_orm::TransactionError;

use crate::services::DatabaseService;
use sea_orm::{ColumnTrait, DbErr, EntityTrait, QueryFilter};

#[async_trait]
pub trait DonationsRepository: Send + Sync {
    async fn get_donation_by_service_id(
        &self,
        service_id: String,
    ) -> Result<Option<donation::Model>, DbErr>;
    async fn save_donation_message(
        &self,
        client_message: ClientMessage,
    ) -> Result<(), TransactionError<DbErr>>;
}

#[async_trait]
impl DonationsRepository for DatabaseService {
    async fn get_donation_by_service_id(
        &self,
        service_id: String,
    ) -> Result<Option<donation::Model>, DbErr> {
        donation::Entity::find()
            .filter(donation::Column::ServiceId.eq(service_id))
            .one(&self.connection)
            .await
    }
    async fn save_donation_message(
        &self,
        client_message: ClientMessage,
    ) -> Result<(), TransactionError<DbErr>> {
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
                .await?;
            // message::ActiveModel::builder()
            //     .set_id(client_message.id)
            //     .set_type(client_message.r#type)
            //     .set_created_at(client_message.created_at)
            //     .set_donation(
            //         donation::ActiveModel::builder()
            //             .set_amount(donation.amount)
            //             .set_audio(donation.audio)
            //             .set_created_at(donation.created_at)
            //             .set_currency(donation.currency)
            //             .set_exchanged_amount(donation.exchanged_amount)
            //             .set_exchanged_currency(donation.exchanged_currency)
            //             .set_id(donation.id)
            //             .set_media(donation.media)
            //             .set_played(donation.played)
            //             .set_service(donation.service)
            //             .set_service_id(donation.service_id)
            //             .set_text(donation.text)
            //             .set_user_name(donation.user_name),
            //     )
            //     .insert(&self.connection)
            //     .await?;
        }

        Ok(())
        // self.connection
        //     .transaction::<_, (), DbErr>(|txn| {
        //         Box::pin(async move {
        //             message::ActiveModel {
        //                 id: Set(message.id),
        //                 r#type: Set(message.r#type),
        //                 created_at: Set(message.created_at),
        //             }
        //             .insert(txn)
        //             .await?;

        //             donation::ActiveModel {
        //                 id: Set(donation.id),
        //                 service_id: Set(donation.service_id),
        //                 message_id: Set(donation.message_id),
        //                 amount: Set(donation.amount),
        //                 user_name: Set(donation.user_name),
        //                 currency: Set(donation.currency),
        //                 text: Set(donation.text),
        //                 audio: Set(donation.audio),
        //                 service: Set(donation.service),
        //                 media: Set(donation.media),
        //                 played: Set(donation.played),
        //                 exchanged_amount: Set(donation.exchanged_amount),
        //                 exchanged_currency: Set(donation.exchanged_currency),
        //                 created_at: Set(donation.created_at),
        //             }
        //             .insert(txn)
        //             .await?;

        //             Ok(())
        //         })
        //     })
        //     .await
    }
}
