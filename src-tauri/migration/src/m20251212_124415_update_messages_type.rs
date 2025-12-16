use entity::message::MessageType;
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(
                        ColumnDef::new(Messages::Type)
                            .text()
                            .default(MessageType::Donation),
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
                    .table(Messages::Table)
                    .drop_column(Messages::Type)
                    .to_owned(),
            )
            .await?;

        Ok(())
    }
}
#[derive(Iden)]
enum Messages {
    Table,
    Type,
}
