use sea_orm_migration::{prelude::*, schema::*};
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Donations::Table)
                    .if_not_exists()
                    .col(pk_uuid(Donations::Id))
                    .col(string(Donations::ServiceId))
                    .col(float(Donations::Amount))
                    .col(string(Donations::UserName))
                    .col(uuid_uniq(Donations::MessageId))
                    .col(string_null(Donations::Text))
                    .col(string_null(Donations::Audio))
                    .col(string_null(Donations::Media))
                    .col(string(Donations::Currency))
                    .col(boolean(Donations::Played))
                    .col(string(Donations::Service))
                    .col(float_null(Donations::ExchangedAmount))
                    .col(string_null(Donations::ExchangedCurrency))
                    .col(integer(Donations::CreatedAt))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Donations::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum Donations {
    Table,
    Id,
    ServiceId,
    Amount,
    UserName,
    Text,
    Audio,
    Media,
    Currency,
    Played,
    Service,
    MessageId,
    ExchangedAmount,
    ExchangedCurrency,
    CreatedAt,
}
