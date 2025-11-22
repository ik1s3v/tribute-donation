use entity::goal::*;
use migration::Expr;

use crate::services::DatabaseService;
use async_trait::async_trait;
use sea_orm::{ActiveValue::Set, DbErr, EntityTrait, QueryFilter, QueryOrder, QuerySelect};
#[async_trait]
pub trait GoalsRepository: Send + Sync {
    async fn get_goals(&self, limit: u64, offset: u64) -> Result<Vec<Model>, DbErr>;
    async fn get_goal_by_id(&self, id: String) -> Result<Option<Model>, DbErr>;
    async fn update_goal_settings(&self, goal: Model) -> Result<Model, DbErr>;
    async fn update_goal_amount(&self, amount: u32) -> Result<(), DbErr>;
    async fn create_goal(&self, goal: Model) -> Result<(), DbErr>;
    async fn get_not_ended_goal(&self) -> Result<Option<Model>, DbErr>;
    async fn finish_goal(&self, id: String) -> Result<(), DbErr>;
}

#[async_trait]
impl GoalsRepository for DatabaseService {
    async fn finish_goal(&self, id: String) -> Result<(), DbErr> {
        Entity::update(ActiveModel {
            id: Set(id),
            ended: Set(true),
            ..ActiveModel::default()
        })
        .exec(&self.connection)
        .await?;
        Ok(())
    }
    async fn get_not_ended_goal(&self) -> Result<Option<Model>, DbErr> {
        Entity::find()
            .filter(Expr::col(Column::Ended).eq(false))
            .one(&self.connection)
            .await
    }
    async fn update_goal_amount(&self, amount: u32) -> Result<(), DbErr> {
        Entity::update_many()
            .col_expr(
                Column::CurrentAmount,
                Expr::col(Column::CurrentAmount).add(amount),
            )
            .filter(Expr::col(Column::Ended).eq(false))
            .exec(&self.connection)
            .await?;

        Ok(())
    }
    async fn get_goals(&self, limit: u64, offset: u64) -> Result<Vec<Model>, DbErr> {
        Entity::find()
            .order_by_desc(Column::StartDate)
            .limit(limit)
            .offset(offset)
            .all(&self.connection)
            .await
    }
    async fn get_goal_by_id(&self, id: String) -> Result<Option<Model>, DbErr> {
        Entity::find_by_id(id).one(&self.connection).await
    }
    async fn update_goal_settings(&self, goal: Model) -> Result<Model, DbErr> {
        let updated_goal = Entity::update(ActiveModel {
            id: Set(goal.id),
            title: Set(goal.title),
            amount_raise: Set(goal.amount_raise),
            start_raising: Set(goal.start_raising),
            current_amount: Set(goal.current_amount),
            end_date: Set(goal.end_date),
            start_date: Set(goal.start_date),
            ended: Set(goal.ended),
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
        .await?;

        Ok(updated_goal)
    }
    async fn create_goal(&self, goal: Model) -> Result<(), DbErr> {
        Entity::insert(ActiveModel {
            id: Set(goal.id),
            title: Set(goal.title),
            amount_raise: Set(goal.amount_raise),
            start_raising: Set(goal.start_raising),
            current_amount: Set(goal.current_amount),
            end_date: Set(goal.end_date),
            start_date: Set(goal.start_date),
            ended: Set(goal.ended),
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
        .await?;

        Ok(())
    }
}
