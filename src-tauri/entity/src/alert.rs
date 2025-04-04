use sea_orm::{entity::prelude::*, FromJsonQueryResult};
use serde::{Deserialize, Serialize};
#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "alerts")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: String,
    pub audio: String,
    pub audio_volume: u32,
    pub image: String,
    pub group_id: String,
    pub name: String,
    pub view_type: ViewType,
    #[sea_orm(column_type = "Text")]
    pub title_style: TextStyle,
    #[sea_orm(column_type = "Text")]
    pub message_style: TextStyle,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Eq, Deserialize, Serialize)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum ViewType {
    #[sea_orm(string_value = "Top")]
    Top,
    #[sea_orm(string_value = "Bottom")]
    Bottom,
    #[sea_orm(string_value = "Left")]
    Left,
    #[sea_orm(string_value = "Right")]
    Right,
    #[sea_orm(string_value = "Overlay")]
    Overlay,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, Eq, FromJsonQueryResult)]

pub struct TextStyle {
    pub font_size: u32,
    pub text_color: String,
    pub bold: bool,
    pub italics: bool,
    pub underline: bool,
    pub letter_spacing: u32,
    pub word_spacing: u32,
}
