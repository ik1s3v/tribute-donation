use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table("subscriptions")
                    .if_not_exists()
                    .col(pk_uuid("id"))
                    .col(string("service_id"))
                    .col(uuid_uniq("message_id"))
                    .col(string("user_name"))
                    .col(string("user_id"))
                    .col(string("service"))
                    .col(string("tier"))
                    .col(boolean("played"))
                    .col(boolean("is_gift"))
                    .col(boolean("is_anonymous"))
                    .col(integer("total"))
                    .col(integer_null("cumulative_total"))
                    .col(integer("subscribed_at"))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table("subscriptions").to_owned())
            .await
    }
}
