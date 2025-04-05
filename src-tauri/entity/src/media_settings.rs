use sea_orm::{entity::prelude::*, FromJsonQueryResult};
use serde::{Deserialize, Serialize};
#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "media_settings")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: u8,
    #[sea_orm(column_type = "Text")]
    pub youtube: MediaPlatformSettings,
    #[sea_orm(column_type = "Text")]
    pub twitch: MediaPlatformSettings,
    #[sea_orm(column_type = "Text")]
    pub tiktok: MediaPlatformSettings,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Eq, FromJsonQueryResult)]
pub struct MediaPlatformSettings {
    pub enabled: bool,
    pub min_amount_eur: u64,
    pub min_amount_rub: u64,
    pub video_volume: u64,
    pub min_views: u64,
}
