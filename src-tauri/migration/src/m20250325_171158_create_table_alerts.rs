use sea_orm_migration::{prelude::*, schema::*};
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Alerts::Table)
                    .if_not_exists()
                    .col(pk_uuid(Alerts::Id))
                    .col(string(Alerts::Audio))
                    .col(integer(Alerts::AudioVolume))
                    .col(string(Alerts::Image))
                    .col(string(Alerts::GroupId))
                    .col(string(Alerts::ViewType))
                    .col(string(Alerts::Name))
                    .col(string(Alerts::TitleStyle))
                    .col(string(Alerts::MessageStyle))
                    .to_owned(),
            )
            .await?;
        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Alerts::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
pub enum Alerts {
    Table,
    Id,
    Audio,
    AudioVolume,
    Image,
    GroupId,
    ViewType,
    TitleStyle,
    MessageStyle,
    Name,
}
