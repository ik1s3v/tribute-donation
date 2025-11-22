use sea_orm_migration::prelude::*;
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let connection = manager.get_connection();
        let sql_youtube = r#"
            UPDATE media_settings
            SET youtube = json_remove(
                    json_set(youtube, '$.min_amount', json_extract(youtube, '$.min_amount_eur')),
                    '$.min_amount_eur', 
                    '$.min_amount_rub'
            )
            WHERE json_extract(youtube, '$.min_amount_eur') IS NOT NULL;
        "#;
        let sql_twitch = r#"
            UPDATE media_settings
            SET twitch = json_remove(
                    json_set(twitch, '$.min_amount', json_extract(twitch, '$.min_amount_eur')),
                    '$.min_amount_eur', 
                    '$.min_amount_rub'
            )
            WHERE json_extract(twitch, '$.min_amount_eur') IS NOT NULL;
        "#;
        let sql_tiktok = r#"
            UPDATE media_settings
            SET tiktok = json_remove(
                    json_set(tiktok, '$.min_amount', json_extract(tiktok, '$.min_amount_eur')),
                    '$.min_amount_eur', 
                    '$.min_amount_rub'
            )
            WHERE json_extract(tiktok, '$.min_amount_eur') IS NOT NULL;
        "#;

        connection.execute_unprepared(sql_youtube).await?;
        connection.execute_unprepared(sql_twitch).await?;
        connection.execute_unprepared(sql_tiktok).await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let connection = manager.get_connection();
        let sql = r#"
            UPDATE media_settings
            SET 
                youtube = json_remove(json_patch(youtube, '{"min_amount_eur":0,"min_amount_rub":0}'), '$.min_amount'),
                twitch  = json_remove(json_patch(twitch,  '{"min_amount_eur":0,"min_amount_rub":0}'), '$.min_amount'),
                tiktok  = json_remove(json_patch(tiktok,  '{"min_amount_eur":0,"min_amount_rub":0}'), '$.min_amount');
        "#;

        connection.execute_unprepared(sql).await?;

        Ok(())
    }
}
