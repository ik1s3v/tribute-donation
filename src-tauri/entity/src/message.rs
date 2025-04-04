use sea_orm::entity::prelude::*;
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
    pub media: Option<String>,
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
