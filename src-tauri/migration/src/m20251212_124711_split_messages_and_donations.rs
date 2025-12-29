use sea_orm_migration::prelude::*;
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let db = manager.get_connection();
        let sql = "INSERT INTO donations (id,service_id, message_id, amount, user_name, currency, text, audio, service, media, played, created_at) 
                   SELECT id,service_id, id, amount, user_name, currency, text, audio, service, media, played, created_at FROM messages";

        db.execute_unprepared(sql).await?;

        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::Amount)
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::UserName)
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::Currency)
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::Text)
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::Audio)
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::ServiceId)
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::Service)
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::Media)
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .drop_column(Messages::Played)
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
                    .add_column(ColumnDef::new(Messages::ServiceId).string())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::Amount).float())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::UserName).string())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::Currency).string())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::Text).null().string())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::Audio).null().string())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::Media).null().string())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::Service).string())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::Played).boolean())
                    .to_owned(),
            )
            .await?;
        manager
            .alter_table(
                Table::alter()
                    .table(Messages::Table)
                    .add_column(ColumnDef::new(Messages::CreatedAt).integer())
                    .to_owned(),
            )
            .await?;

        let db = manager.get_connection();
        let sql = "UPDATE messages 
                   SET service_id=donations.service_id, amount=donations.amount, user_name=donations.user_name, currency=donations.currency, text=donations.text, audio=donations.audio, service=donations.service, media=donations.media, played=donations.played
                   FROM donations 
                   WHERE messages.id = donations.message_id";
        db.execute_unprepared(sql).await?;

        Ok(())
    }
}

#[derive(Iden)]
enum Messages {
    Table,
    ServiceId,
    Amount,
    UserName,
    Text,
    Audio,
    Media,
    Currency,
    Played,
    Service,
    CreatedAt,
}
