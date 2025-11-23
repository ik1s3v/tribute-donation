use sea_orm::{entity::prelude::*, FromJsonQueryResult};
use serde::{Deserialize, Serialize};

use crate::service::ServiceType;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "donations")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: String,
    pub service_id: String,
    pub amount: f64,
    pub user_name: String,
    pub currency: Currency,
    pub text: Option<String>,
    pub audio: Option<String>,
    pub service: ServiceType,
    #[sea_orm(column_type = "Text")]
    pub media: Option<Media>,
    pub played: bool,
    pub created_at: i64,
}

impl Model {
    pub fn to_client_donation(
        &self,
        exchanged_amount: f64,
        exchanged_currency: Currency,
    ) -> ClientDonation {
        ClientDonation {
            id: self.id.clone(),
            service_id: self.service_id.clone(),
            amount: self.amount,
            user_name: self.user_name.clone(),
            currency: self.currency.clone(),
            text: self.text.clone(),
            audio: self.audio.clone(),
            service: self.service.clone(),
            media: self.media.clone(),
            played: self.played,
            exchanged_amount,
            exchanged_currency,
            created_at: self.created_at,
        }
    }
}
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClientDonation {
    pub id: String,
    pub service_id: String,
    pub amount: f64,
    pub user_name: String,
    pub currency: Currency,
    pub text: Option<String>,
    pub audio: Option<String>,
    pub service: ServiceType,
    pub media: Option<Media>,
    pub played: bool,
    pub exchanged_amount: f64,
    pub exchanged_currency: Currency,
    pub created_at: i64,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Debug, Clone, PartialEq, EnumIter, Eq, DeriveActiveEnum, Serialize, Deserialize)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum Currency {
    #[sea_orm(string_value = "UAH")]
    UAH,
    #[sea_orm(string_value = "RUB")]
    RUB,
    #[sea_orm(string_value = "EUR")]
    EUR,
    #[sea_orm(string_value = "USD")]
    USD,
    #[sea_orm(string_value = "NONE")]
    NONE,
}

impl Currency {
    pub fn as_str(&self) -> &str {
        match self {
            Currency::UAH => "UAH",
            Currency::RUB => "RUB",
            Currency::EUR => "EUR",
            Currency::USD => "USD",
            Currency::NONE => "NONE",
        }
    }
}

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
