use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(MaptionSettings::Table)
                    .if_not_exists()
                    .col(pk_auto(MaptionSettings::Id))
                    .col(string(MaptionSettings::PriceForMeter))
                    .col(string(MaptionSettings::Latitude))
                    .col(string(MaptionSettings::Longitude))
                    .col(integer(MaptionSettings::NewDonationAddingTime))
                    .col(integer(MaptionSettings::TimerAddingTime))
                    .col(boolean(MaptionSettings::IsGreaterTimerAddingTime))
                    .col(boolean(MaptionSettings::IsNewDonationAddingTime))
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(MaptionSettings::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
enum MaptionSettings {
    #[sea_orm(iden = "maption_settings")]
    Table,
    Id,
    PriceForMeter,
    Latitude,
    Longitude,
    NewDonationAddingTime,
    TimerAddingTime,
    IsGreaterTimerAddingTime,
    IsNewDonationAddingTime,
}
