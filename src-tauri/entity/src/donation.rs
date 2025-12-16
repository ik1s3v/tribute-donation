use crate::{service::ServiceType, settings::Currency};
use sea_orm::{entity::prelude::*, FromJsonQueryResult};
use serde::{Deserialize, Serialize};

#[sea_orm::model]
#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "donations")]

pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: String,
    pub service_id: String,
    #[sea_orm(uniq)]
    pub message_id: String,
    pub amount: f64,
    pub user_name: String,
    pub currency: Currency,
    pub text: Option<String>,
    pub audio: Option<String>,
    pub service: ServiceType,
    #[sea_orm(column_type = "Text")]
    pub media: Option<Media>,
    pub played: bool,
    pub exchanged_amount: Option<f64>,
    pub exchanged_currency: Option<Currency>,
    pub created_at: i64,
    #[sea_orm(belongs_to, from = "message_id", to = "id")]
    pub message: HasOne<super::message::Entity>,
}

#[derive(Debug, Clone, Serialize, Deserialize, DerivePartialModel)]
#[sea_orm(entity = "Entity")]
pub struct Donation {
    pub id: String,
    pub service_id: String,
    pub message_id: String,
    pub amount: f64,
    pub user_name: String,
    pub currency: Currency,
    pub text: Option<String>,
    pub audio: Option<String>,
    pub service: ServiceType,
    pub media: Option<Media>,
    pub played: bool,
    pub exchanged_amount: Option<f64>,
    pub exchanged_currency: Option<Currency>,
    pub created_at: i64,
}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Eq, FromJsonQueryResult)]

pub struct Media {
    pub url: String,
    pub media_type: MediaType,
    pub expires: Option<u64>,
    pub temporary_src: Option<String>,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Serialize, Deserialize, Eq)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum MediaType {
    #[sea_orm(string_value = "Youtube")]
    Youtube,
    #[sea_orm(string_value = "Twitch")]
    Twitch,
    #[sea_orm(string_value = "TikTok")]
    TikTok,
}
