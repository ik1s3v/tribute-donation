use sea_orm_migration::{prelude::*, schema::*};
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Goals::Table)
                    .if_not_exists()
                    .col(pk_uuid(Goals::Id))
                    .col(string(Goals::Title))
                    .col(integer(Goals::AmountRaise))
                    .col(integer(Goals::StartRaising))
                    .col(integer(Goals::CurrentAmount))
                    .col(integer(Goals::EndDate))
                    .col(integer(Goals::StartDate))
                    .col(integer(Goals::BarHeight))
                    .col(integer(Goals::RoundingRadius))
                    .col(integer(Goals::BarStrokeThickness))
                    .col(string(Goals::BackgroundBarColor))
                    .col(string(Goals::ProgressBarColor))
                    .col(string(Goals::GoalTitleType))
                    .col(string(Goals::GoalProgressBar))
                    .col(string(Goals::RemainingTime))
                    .col(string(Goals::ProgressBarLayout))
                    .col(boolean(Goals::GoalAmountLimits))
                    .col(boolean(Goals::WidgetBackground))
                    .col(boolean(Goals::Ended))
                    .col(string(Goals::WidgetBackgroundColor))
                    .col(string(Goals::TitleStyle))
                    .col(string(Goals::ProgressStyle))
                    .col(string(Goals::LimitsStyle))
                    .to_owned(),
            )
            .await?;
        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Goals::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
pub enum Goals {
    Table,
    Id,
    Title,
    AmountRaise,
    StartRaising,
    CurrentAmount,
    EndDate,
    StartDate,
    Ended,
    BarHeight,
    RoundingRadius,
    BarStrokeThickness,
    BackgroundBarColor,
    ProgressBarColor,
    GoalTitleType,
    GoalProgressBar,
    RemainingTime,
    ProgressBarLayout,
    GoalAmountLimits,
    WidgetBackground,
    WidgetBackgroundColor,
    TitleStyle,
    ProgressStyle,
    LimitsStyle,
}
