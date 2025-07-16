use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(AuctionSettings::Table)
                    .if_not_exists()
                    .col(pk_auto(AuctionSettings::Id))
                    .col(integer(AuctionSettings::LeaderChangeAddingTime))
                    .col(integer(AuctionSettings::NewLotAddingTime))
                    .col(integer(AuctionSettings::NewDonationAddingTime))
                    .col(integer(AuctionSettings::TimerAddingTime))
                    .col(boolean(AuctionSettings::IsGreaterTimerAddingTime))
                    .col(boolean(AuctionSettings::IsShowOdds))
                    .col(boolean(AuctionSettings::IsShowTotalSum))
                    .col(boolean(AuctionSettings::IsNewLotAddingTime))
                    .col(boolean(AuctionSettings::IsLeaderChangeAddingTime))
                    .col(boolean(AuctionSettings::IsNewDonationAddingTime))
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(AuctionSettings::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum AuctionSettings {
    #[sea_orm(iden = "auction_settings")]
    Table,
    Id,
    LeaderChangeAddingTime,
    NewLotAddingTime,
    NewDonationAddingTime,
    TimerAddingTime,
    IsGreaterTimerAddingTime,
    IsShowOdds,
    IsShowTotalSum,
    IsNewLotAddingTime,
    IsLeaderChangeAddingTime,
    IsNewDonationAddingTime,
}
