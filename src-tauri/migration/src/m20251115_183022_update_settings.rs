use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        if !manager
            .has_column(Settings::Table.to_string(), Settings::Currency.to_string())
            .await?
        {
            manager
                .alter_table(
                    Table::alter()
                        .table(Settings::Table)
                        .add_column(
                            ColumnDef::new(Settings::Currency)
                                .text()
                                .default(entity::message::Currency::EUR),
                        )
                        .to_owned(),
                )
                .await?;
        }

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(Settings::Table)
                    .drop_column(Settings::Currency)
                    .to_owned(),
            )
            .await?;

        Ok(())
    }
}
#[derive(Iden)]
enum Settings {
    Table,
    Currency,
}
