use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(AucFighterSettings::Table)
                    .if_not_exists()
                    .col(pk_auto(AucFighterSettings::Id))
                    .col(integer(AucFighterSettings::RoundDuration))
                    .col(boolean(AucFighterSettings::IsAddPlayers))
                    .to_owned(),
            )
            .await?;
        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(AucFighterSettings::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum AucFighterSettings {
    #[sea_orm(iden = "auc_fighter_settings")]
    Table,
    Id,
    RoundDuration,
    IsAddPlayers,
}
