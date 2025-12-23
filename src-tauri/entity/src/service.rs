use sea_orm::{entity::prelude::*, FromJsonQueryResult};
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "services")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: ServiceType,
    pub authorized: bool,
    #[sea_orm(column_type = "Json", nullable)]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub settings: Option<ServiceSettings>,
    #[sea_orm(column_type = "Json", nullable)]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub auth: Option<ServiceAuth>,
}
impl Default for Model {
    fn default() -> Self {
        Self {
            id: ServiceType::TributeBot,
            authorized: false,
            auth: None,
            settings: None,
        }
    }
}
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Serialize, Deserialize)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum ServiceType {
    #[sea_orm(string_value = "TributeBot")]
    TributeBot,
    #[sea_orm(string_value = "Streamelements")]
    Streamelements,
    #[sea_orm(string_value = "Twitch")]
    Twitch,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, FromJsonQueryResult)]
#[serde(untagged)]

pub enum ServiceSettings {
    Twitch(TwitchIntegrationSettings),
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, FromJsonQueryResult)]
#[serde(untagged)]

pub enum ServiceAuth {
    Twitch(TwitchAuth),
    StreamElements(StreamElementsAuth),
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct TwitchIntegrationSettings {
    pub points_currency_ratio: f64,
    pub rewards_name: String,
    pub rewards: Vec<TwitchIntegrationReward>,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct TwitchAuth {
    pub access_token: String,
    pub refresh_token: String,
    pub token_type: String,
    pub expires_in: u32,
    pub user_id: String,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct StreamElementsAuth {
    pub jwt_token: String,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct TwitchIntegrationReward {
    pub id: String,
    pub cost: u32,
    pub color: String,
    pub reward_id: Option<String>,
    pub subscription_id: Option<String>,
}
