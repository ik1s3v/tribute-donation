use entity::alert::*;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, EntityTrait};
#[async_trait]
pub trait AlertsRepository: Send + Sync {
    async fn get_alerts(&self) -> Result<Vec<Model>, String>;
    async fn get_alert_by_id(&self, id: String) -> Result<Option<Model>, String>;
    async fn update_alert_settings(&self, alert: Model) -> Result<(), String>;
    async fn create_alert(&self, alert: Model) -> Result<(), String>;
    async fn delete_alert_by_id(&self, id: String) -> Result<(), String>;
}

#[async_trait]
impl AlertsRepository for DatabaseService {
    async fn get_alerts(&self) -> Result<Vec<Model>, String> {
        Entity::find().all(&self.connection).await.map_err(|e| {
            log::error!("Get alerts settings error: {}", e);
            e.to_string()
        })
    }
    async fn get_alert_by_id(&self, id: String) -> Result<Option<Model>, String> {
        Entity::find_by_id(id)
            .one(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get alert by id error: {}", e);
                e.to_string()
            })
    }
    async fn update_alert_settings(&self, alert: Model) -> Result<(), String> {
        Entity::update(ActiveModel {
            id: Set(alert.id),
            audio: Set(alert.audio),
            image: Set(alert.image),
            name: Set(alert.name),
            r#type: Set(alert.r#type),
            status: Set(alert.status),
            amount: Set(alert.amount),
            show_image: Set(alert.show_image),
            variation_conditions: Set(alert.variation_conditions),
            group_id: Set(alert.group_id),
            audio_volume: Set(alert.audio_volume),
            view_type: Set(alert.view_type),
            title_style: Set(alert.title_style),
            message_style: Set(alert.message_style),
        })
        .exec(&self.connection)
        .await
        .map_err(|e| {
            log::error!("Update alert settings error: {}", e);
            e.to_string()
        })?;
        Ok(())
    }
    async fn create_alert(&self, alert: Model) -> Result<(), String> {
        Entity::insert(ActiveModel {
            id: Set(alert.id),
            audio: Set(alert.audio),
            image: Set(alert.image),
            name: Set(alert.name),
            r#type: Set(alert.r#type),
            status: Set(alert.status),
            show_image: Set(alert.show_image),
            amount: Set(alert.amount),
            variation_conditions: Set(alert.variation_conditions),
            group_id: Set(alert.group_id),
            audio_volume: Set(alert.audio_volume),
            view_type: Set(alert.view_type),
            title_style: Set(alert.title_style),
            message_style: Set(alert.message_style),
        })
        .exec(&self.connection)
        .await
        .map_err(|e| {
            log::error!("Create alert error: {}", e);
            e.to_string()
        })?;
        Ok(())
    }
    async fn delete_alert_by_id(&self, id: String) -> Result<(), String> {
        Entity::delete_by_id(id)
            .exec(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Delete alert by id error: {}", e);
                e.to_string()
            })?;
        Ok(())
    }
}
