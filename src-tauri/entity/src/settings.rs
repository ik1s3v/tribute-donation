use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

use crate::donation::Currency;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "settings")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: u8,
    pub moderation_duration: u32,
    pub alert_paused: bool,
    pub tts_volume: u32,
    pub remove_links: bool,
    pub black_list: String,
    pub language: String,
    pub currency: Currency,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
