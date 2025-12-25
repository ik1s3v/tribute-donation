use entity::goal::*;
use migration::Expr;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, EntityTrait, ExprTrait, QueryFilter, QueryOrder, QuerySelect};
#[async_trait]
pub trait GoalsRepository: Send + Sync {
    async fn get_goals(&self, limit: u64, offset: u64) -> Result<Vec<Model>, String>;
    async fn get_goal_by_id(&self, id: String) -> Result<Option<Model>, String>;
    async fn update_goal_settings(&self, goal: Model) -> Result<Model, String>;
    async fn update_goal_amount(&self, amount: u32, r#type: GoalType) -> Result<(), String>;
    async fn create_goal(&self, goal: Model) -> Result<(), String>;
    async fn get_not_ended_goal(&self, r#type: GoalType) -> Result<Option<Model>, String>;
    async fn get_not_ended_goals(&self) -> Result<Vec<Model>, String>;
    async fn finish_goal(&self, id: String) -> Result<(), String>;
}

#[async_trait]
impl GoalsRepository for DatabaseService {
    async fn finish_goal(&self, id: String) -> Result<(), String> {
        Entity::update(ActiveModel {
            id: Set(id),
            ended: Set(true),
            ..ActiveModel::default()
        })
        .exec(&self.connection)
        .await
        .map_err(|e| {
            log::error!("Finish goal error: {}", e);
            e.to_string()
        })?;
        Ok(())
    }
    async fn get_not_ended_goal(&self, r#type: GoalType) -> Result<Option<Model>, String> {
        Entity::find()
            .filter(Expr::col(Column::Ended).eq(false))
            .filter(Expr::col(Column::Type).eq(r#type))
            .one(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get not ended goal error: {}", e);
                e.to_string()
            })
    }
    async fn get_not_ended_goals(&self) -> Result<Vec<Model>, String> {
        Entity::find()
            .filter(Expr::col(Column::Ended).eq(false))
            .all(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get not ended goals error: {}", e);
                e.to_string()
            })
    }
    async fn update_goal_amount(&self, amount: u32, r#type: GoalType) -> Result<(), String> {
        Entity::update_many()
            .col_expr(
                Column::CurrentAmount,
                Expr::col(Column::CurrentAmount).add(amount),
            )
            .filter(Expr::col(Column::Ended).eq(false))
            .filter(Expr::col(Column::Type).eq(r#type))
            .filter(Expr::col(Column::Ended).eq(false))
            .exec(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Update goal amount error: {}", e);
                e.to_string()
            })?;

        Ok(())
    }
    async fn get_goals(&self, limit: u64, offset: u64) -> Result<Vec<Model>, String> {
        Entity::find()
            .order_by_desc(Column::StartDate)
            .limit(limit)
            .offset(offset)
            .all(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get goals error: {}", e);
                e.to_string()
            })
    }
    async fn get_goal_by_id(&self, id: String) -> Result<Option<Model>, String> {
        Entity::find_by_id(id)
            .one(&self.connection)
            .await
            .map_err(|e| {
                log::error!("Get goal by id error: {}", e);
                e.to_string()
            })
    }
    async fn update_goal_settings(&self, goal: Model) -> Result<Model, String> {
        let updated_goal = Entity::update(ActiveModel {
            id: Set(goal.id),
            title: Set(goal.title),
            amount_raise: Set(goal.amount_raise),
            start_raising: Set(goal.start_raising),
            current_amount: Set(goal.current_amount),
            end_date: Set(goal.end_date),
            start_date: Set(goal.start_date),
            ended: Set(goal.ended),
            r#type: Set(goal.r#type),
            goal_amount_limits: Set(goal.goal_amount_limits),
            widget_background: Set(goal.widget_background),
            bar_height: Set(goal.bar_height),
            rounding_radius: Set(goal.rounding_radius),
            bar_stroke_thickness: Set(goal.bar_stroke_thickness),
            background_bar_color: Set(goal.background_bar_color),
            progress_bar_color: Set(goal.progress_bar_color),
            widget_background_color: Set(goal.widget_background_color),
            goal_title_type: Set(goal.goal_title_type),
            goal_progress_bar: Set(goal.goal_progress_bar),
            remaining_time: Set(goal.remaining_time),
            progress_bar_layout: Set(goal.progress_bar_layout),
            title_style: Set(goal.title_style),
            progress_style: Set(goal.progress_style),
            limits_style: Set(goal.limits_style),
        })
        .exec(&self.connection)
        .await
        .map_err(|e| {
            log::error!("Update goal settings error: {}", e);
            e.to_string()
        })?;

        Ok(updated_goal)
    }
    async fn create_goal(&self, goal: Model) -> Result<(), String> {
        Entity::insert(ActiveModel {
            id: Set(goal.id),
            title: Set(goal.title),
            amount_raise: Set(goal.amount_raise),
            start_raising: Set(goal.start_raising),
            current_amount: Set(goal.current_amount),
            end_date: Set(goal.end_date),
            start_date: Set(goal.start_date),
            ended: Set(goal.ended),
            r#type: Set(goal.r#type),
            goal_amount_limits: Set(goal.goal_amount_limits),
            widget_background: Set(goal.widget_background),
            bar_height: Set(goal.bar_height),
            rounding_radius: Set(goal.rounding_radius),
            bar_stroke_thickness: Set(goal.bar_stroke_thickness),
            background_bar_color: Set(goal.background_bar_color),
            progress_bar_color: Set(goal.progress_bar_color),
            widget_background_color: Set(goal.widget_background_color),
            goal_title_type: Set(goal.goal_title_type),
            goal_progress_bar: Set(goal.goal_progress_bar),
            remaining_time: Set(goal.remaining_time),
            progress_bar_layout: Set(goal.progress_bar_layout),
            title_style: Set(goal.title_style),
            progress_style: Set(goal.progress_style),
            limits_style: Set(goal.limits_style),
        })
        .exec(&self.connection)
        .await
        .map_err(|e| {
            log::error!("Create goal error: {}", e);
            e.to_string()
        })?;

        Ok(())
    }
}
