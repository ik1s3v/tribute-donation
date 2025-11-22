use entity::service::*;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, DbErr, EntityTrait};
#[async_trait]
pub trait ServicesRepository: Send + Sync {
    async fn get_services(&self) -> Result<Vec<Model>, DbErr>;
    async fn get_service_by_id(&self, id: ServiceType) -> Result<Option<Model>, DbErr>;
    async fn update_service(&self, service: Model) -> Result<(), DbErr>;
}

#[async_trait]
impl ServicesRepository for DatabaseService {
    async fn get_services(&self) -> Result<Vec<Model>, DbErr> {
        Entity::find().all(&self.connection).await
    }
    async fn get_service_by_id(&self, id: ServiceType) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(id).one(&self.connection).await
    }

    async fn update_service(&self, service: Model) -> Result<(), DbErr> {
        Entity::update(ActiveModel {
            id: Set(service.id),
            active: Set(service.active),
            authorized: Set(service.authorized),
            token: Set(service.token),
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
}
