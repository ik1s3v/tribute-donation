use async_trait::async_trait;
use entity::donation::*;

use crate::services::DatabaseService;
use sea_orm::{
    ActiveValue::Set, ColumnTrait, DbErr, EntityTrait, QueryFilter, QueryOrder, QuerySelect,
};

#[async_trait]
pub trait DonationsRepository: Send + Sync {
    async fn save_donation(&self, donation: Model) -> Result<(), DbErr>;
    async fn get_donations(&self, limit: u64, offset: u64) -> Result<Vec<Model>, DbErr>;
    async fn get_donation_by_service_id(&self, service_id: String) -> Result<Option<Model>, DbErr>;
}

#[async_trait]
impl DonationsRepository for DatabaseService {
    async fn save_donation(&self, donation: Model) -> Result<(), DbErr> {
        Entity::insert(ActiveModel {
            id: Set(donation.id),
            service_id: Set(donation.service_id),
            amount: Set(donation.amount),
            user_name: Set(donation.user_name),
            text: Set(donation.text),
            audio: Set(donation.audio),
            service: Set(donation.service),
            currency: Set(donation.currency),
            created_at: Set(donation.created_at),
            played: Set(donation.played),
            media: Set(donation.media),
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
    async fn get_donations(&self, limit: u64, offset: u64) -> Result<Vec<Model>, DbErr> {
        Entity::find()
            .order_by_desc(Column::CreatedAt)
            .limit(limit)
            .offset(offset)
            .all(&self.connection)
            .await
    }
    async fn get_donation_by_service_id(&self, service_id: String) -> Result<Option<Model>, DbErr> {
        Entity::find()
            .filter(Column::ServiceId.eq(service_id))
            .one(&self.connection)
            .await
    }
}
