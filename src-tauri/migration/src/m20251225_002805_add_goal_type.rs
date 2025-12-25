use entity::goal::GoalType;
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(Goals::Table)
                    .add_column(
                        ColumnDef::new(Goals::Type)
                            .text()
                            .default(GoalType::Donation),
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
                    .table(Goals::Table)
                    .drop_column(Goals::Type)
                    .to_owned(),
            )
            .await?;
        Ok(())
    }
}
#[derive(Iden)]
enum Goals {
    Table,
    Type,
}
