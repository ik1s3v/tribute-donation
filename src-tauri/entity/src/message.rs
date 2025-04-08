use sea_orm::{entity::prelude::*, FromJsonQueryResult};
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "messages")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: String,
    pub telegram_message_id: String,
    pub amount: f64,
    pub user_name: String,
    pub currency: Currency,
    pub text: Option<String>,
    pub audio: Option<String>,
    #[sea_orm(column_type = "Text")]
    pub media: Option<Media>,
    pub played: bool,
    pub created_at: i64,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Serialize, Deserialize)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum Currency {
    #[sea_orm(string_value = "RUB")]
    RUB,
    #[sea_orm(string_value = "EUR")]
    EUR,
    #[sea_orm(string_value = "USD")]
    USD,
    #[sea_orm(string_value = "NONE")]
    NONE,
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
