use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "maption_settings")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: u8,
    pub price_for_meter: String,
    pub latitude: String,
    pub longitude: String,
    pub new_donation_adding_time: u32,
    pub timer_adding_time: u32,
    pub is_greater_timer_adding_time: bool,
    pub is_new_donation_adding_time: bool,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
