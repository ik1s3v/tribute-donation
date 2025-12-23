use entity::service::*;

use sea_orm_migration::prelude::prelude::Uuid;
use sea_orm_migration::prelude::*;
use sea_orm_migration::sea_orm::entity::*;
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let connection = manager.get_connection();
        ActiveModel {
            id: Set(ServiceType::TributeBot),
            authorized: Set(false),
            auth: Set(None),
            settings: Set(None),
        }
        .insert(connection)
        .await?;
        ActiveModel {
            id: Set(ServiceType::Streamelements),
            authorized: Set(false),
            auth: Set(None),
            settings: Set(None),
        }
        .insert(connection)
        .await?;
        let twitch_integration_settings = ServiceSettings::Twitch(TwitchIntegrationSettings {
            points_currency_ratio: 1.0,
            rewards_name: "Auction".to_string(),
            rewards: vec![TwitchIntegrationReward {
                id: Uuid::new_v4().to_string(),
                reward_id: None,
                subscription_id: None,
                cost: 100,
                color: "#1976d2".to_string(),
            }],
        });
        ActiveModel {
            id: Set(ServiceType::Twitch),
            authorized: Set(false),
            auth: Set(None),
            settings: Set(Some(twitch_integration_settings)),
        }
        .insert(connection)
        .await?;
        Ok(())
    }
    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let connection = manager.get_connection();
        Entity::delete_by_id(ServiceType::TributeBot)
            .exec(connection)
            .await?;
        Entity::delete_by_id(ServiceType::Streamelements)
            .exec(connection)
            .await?;
        Entity::delete_by_id(ServiceType::Twitch)
            .exec(connection)
            .await?;
        Ok(())
    }
}
