use sea_orm_migration::{prelude::*, schema::*};
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Settings::Table)
                    .if_not_exists()
                    .col(pk_auto(Settings::Id))
                    .col(integer(Settings::ModerationDuration))
                    .col(integer(Settings::TtsVolume))
                    .col(boolean(Settings::AlertPaused))
                    .col(boolean(Settings::RemoveLinks))
                    .col(string(Settings::BlackList))
                    .col(string(Settings::Language))
                    .col(text(Settings::Currency))
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Settings::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum Settings {
    #[sea_orm(iden = "settings")]
    Table,
    Id,
    ModerationDuration,
    AlertPaused,
    RemoveLinks,
    TtsVolume,
    BlackList,
    Language,
    Currency,
}
