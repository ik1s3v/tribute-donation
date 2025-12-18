use entity::service::*;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveModelTrait, ActiveValue::Set, DbErr, EntityTrait, QuerySelect};
#[async_trait]
pub trait ServicesRepository: Send + Sync {
    async fn get_services(&self) -> Result<Vec<Model>, DbErr>;
    async fn get_service_by_id(&self, id: ServiceType) -> Result<Option<Model>, DbErr>;
    async fn get_service_with_auth_by_id(&self, id: ServiceType) -> Result<Option<Model>, DbErr>;
    async fn update_service_settings(
        &self,
        id: ServiceType,
        settings: ServiceSettings,
    ) -> Result<(), DbErr>;
    async fn update_service_auth(
        &self,
        id: ServiceType,
        auth: Option<ServiceAuth>,
        authorized: bool,
    ) -> Result<(), DbErr>;
}

#[async_trait]
impl ServicesRepository for DatabaseService {
    async fn get_services(&self) -> Result<Vec<Model>, DbErr> {
        Entity::find()
            .select_only()
            .column(Column::Id)
            .column(Column::Settings)
            .column(Column::Authorized)
            .all(&self.connection)
            .await
    }
    async fn get_service_by_id(&self, id: ServiceType) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(id)
            .select_only()
            .column(Column::Id)
            .column(Column::Settings)
            .column(Column::Authorized)
            .one(&self.connection)
            .await
    }
    async fn get_service_with_auth_by_id(&self, id: ServiceType) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(id).one(&self.connection).await
    }

    async fn update_service_settings(
        &self,
        id: ServiceType,
        settings: ServiceSettings,
    ) -> Result<(), DbErr> {
        let pear = self.get_service_by_id(id).await?;
        let mut pear: ActiveModel = pear.unwrap().into();
        pear.settings = Set(Some(settings));
        pear.update(&self.connection).await?;

        Ok(())
    }

    async fn update_service_auth(
        &self,
        id: ServiceType,
        auth: Option<ServiceAuth>,
        authorized: bool,
    ) -> Result<(), DbErr> {
        let service = Entity::find_by_id(id)
            .one(&self.connection)
            .await?
            .ok_or(DbErr::Custom("Service not found".to_owned()))?;
        let mut service_active_model: ActiveModel = service.into();
        service_active_model.auth = Set(auth);
        service_active_model.authorized = Set(authorized);
        service_active_model.update(&self.connection).await?;

        Ok(())
    }
}
