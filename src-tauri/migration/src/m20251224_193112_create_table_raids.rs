use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table("raids")
                    .if_not_exists()
                    .col(pk_uuid("id"))
                    .col(string("service_id"))
                    .col(uuid_uniq("message_id"))
                    .col(string("from_broadcaster_user_name"))
                    .col(string("from_broadcaster_user_id"))
                    .col(string("service"))
                    .col(integer("viewers"))
                    .col(boolean("played"))
                    .col(integer("created_at"))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table("raids").to_owned())
            .await
    }
}
