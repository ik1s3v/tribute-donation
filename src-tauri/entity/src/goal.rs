use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

use crate::alert::TextStyle;
#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "goals")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: String,
    pub title: String,
    pub amount_raise: u32,
    pub start_raising: u32,
    pub current_amount: u32,
    pub end_date: u32,
    pub start_date: u32,
    pub ended: bool,
    pub goal_amount_limits: bool,
    pub widget_background: bool,
    pub bar_height: u32,
    pub rounding_radius: u32,
    pub bar_stroke_thickness: u32,
    pub background_bar_color: String,
    pub progress_bar_color: String,
    pub widget_background_color: String,
    pub goal_title_type: GoalTextPosition,
    pub goal_progress_bar: GoalTextPosition,
    pub remaining_time: GoalTextPosition,
    pub progress_bar_layout: GoalProgressLayout,
    #[sea_orm(column_type = "Text")]
    pub title_style: TextStyle,
    #[sea_orm(column_type = "Text")]
    pub progress_style: TextStyle,
    #[sea_orm(column_type = "Text")]
    pub limits_style: TextStyle,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Eq, Deserialize, Serialize)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum GoalTextPosition {
    #[sea_orm(string_value = "OnTop")]
    OnTop,
    #[sea_orm(string_value = "Inside")]
    Inside,
    #[sea_orm(string_value = "Below")]
    Below,
    #[sea_orm(string_value = "DoNotDisplay")]
    DoNotDisplay,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Eq, Deserialize, Serialize)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum GoalProgressLayout {
    #[sea_orm(string_value = "Percent")]
    Percent,
    #[sea_orm(string_value = "CurrentAmount")]
    CurrentAmount,
    #[sea_orm(string_value = "CurrentAmountPercent")]
    CurrentAmountPercent,
    #[sea_orm(string_value = "CurrentAmountRemainingAmount")]
    CurrentAmountRemainingAmount,
    #[sea_orm(string_value = "CurrentAmountRemainingAmountPercent")]
    CurrentAmountRemainingAmountPercent,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Eq, Deserialize, Serialize)]
#[sea_orm(rs_type = "String", db_type = "Text")]
pub enum GoalType {
    #[sea_orm(string_value = "Donation")]
    Donation,
    #[sea_orm(string_value = "Follow")]
    Follow,
    #[sea_orm(string_value = "Subscription")]
    Subscription,
}
