use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[sea_orm::model]
#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "messages")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: String,
    pub r#type: MessageType,
    pub created_at: i64,
    #[sea_orm(has_one)]
    pub donation: HasOne<super::donation::Entity>,
    #[sea_orm(has_one)]
    pub follow: HasOne<super::follow::Entity>,
    #[sea_orm(has_one)]
    pub subscription: HasOne<super::subscription::Entity>,
    #[sea_orm(has_one)]
    pub raid: HasOne<super::raid::Entity>,
}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Serialize, Deserialize, Eq)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum MessageType {
    #[sea_orm(string_value = "Donation")]
    Donation,
    #[sea_orm(string_value = "Subscription")]
    Subscription,
    #[sea_orm(string_value = "Follow")]
    Follow,
    #[sea_orm(string_value = "Raid")]
    Raid,
}

#[derive(Debug, Clone, Serialize, Deserialize, DerivePartialModel)]
#[sea_orm(entity = "Entity")]

pub struct ClientMessage {
    pub id: String,
    pub r#type: MessageType,
    pub created_at: i64,
    #[sea_orm(nested)]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub donation: Option<super::donation::Donation>,
    #[sea_orm(nested)]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub follow: Option<super::follow::Follow>,
    #[sea_orm(nested)]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub subscription: Option<super::subscription::Subscription>,
    #[sea_orm(nested)]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub raid: Option<super::raid::Raid>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]

pub struct MessagesFilter {
    pub exclude_follows: bool,
    pub exclude_subscriptions: bool,
    pub exclude_donations: bool,
    pub exclude_raids: bool,
}
