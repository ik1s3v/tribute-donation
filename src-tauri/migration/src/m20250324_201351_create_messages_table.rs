use sea_orm_migration::{prelude::*, schema::*}; 
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Messages::Table)
                    .if_not_exists()
                    .col(pk_uuid(Messages::Id))
                    .col(string(Messages::TelegramMessageId))
                    .col(float(Messages::Amount))
                    .col(string(Messages::UserName))
                    .col(string_null(Messages::Text))
                    .col(string_null(Messages::Audio))
                    .col(string_null(Messages::Media))
                    .col(string(Messages::Currency))
                    .col(boolean(Messages::Played))
                    .col(integer(Messages::CreatedAt))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Messages::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum Messages {
    #[sea_orm(iden = "messages")]
    Table,
    Id,
    TelegramMessageId,
    Amount,
    UserName,
    Text,
    Audio,
    Media,
    Currency,
    Played,
    CreatedAt,
}
