use entity::alert::AlertType;
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(Alerts::Table)
                    .add_column(
                        ColumnDef::new(Alerts::Type)
                            .text()
                            .default(AlertType::Donation),
                    )
                    .to_owned(),
            )
            .await?;
        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(Alerts::Table)
                    .drop_column(Alerts::Type)
                    .to_owned(),
            )
            .await?;
        Ok(())
    }
}
#[derive(Iden)]
enum Alerts {
    Table,
    Type,
}
