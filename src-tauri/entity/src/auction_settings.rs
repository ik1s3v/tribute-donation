use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "auction_settings")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: u8,
    pub leader_change_adding_time: u32,
    pub new_lot_adding_time: u32,
    pub new_donation_adding_time: u32,
    pub timer_adding_time: u32,
    pub is_greater_timer_adding_time: bool,
    pub is_show_odds: bool,
    pub is_show_total_sum: bool,
    pub is_new_lot_adding_time: bool,
    pub is_leader_change_adding_time: bool,
    pub is_new_donation_adding_time: bool,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
