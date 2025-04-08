use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(MediaSettings::Table)
                    .if_not_exists()
                    .col(pk_auto(MediaSettings::Id))
                    .col(string(MediaSettings::Youtube))
                    .col(string(MediaSettings::Twitch))
                    .col(string(MediaSettings::Tiktok))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(MediaSettings::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum MediaSettings {
    #[sea_orm(iden = "media_settings")]
    Table,
    Id,
    Youtube,
    Twitch,
    Tiktok,
}
