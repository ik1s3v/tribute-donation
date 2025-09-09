use sea_orm_migration::prelude::*;

use crate::m20250325_171158_create_table_alerts::Alerts;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let text_style = String::from(
            r#"{"bold":true,"font_size":60,"italics":false,"letter_spacing":0,"text_color":"rgb(255,255,255,1)","underline":false,"word_spacing":0}"#,
        );
        manager
            .exec_stmt(
                Query::insert()
                    .into_table(Alerts::Table)
                    .columns([
                        Alerts::Id,
                        Alerts::Audio,
                        Alerts::AudioVolume,
                        Alerts::Image,
                        Alerts::GroupId,
                        Alerts::ViewType,
                        Alerts::Name,
                        Alerts::TitleStyle,
                        Alerts::MessageStyle,
                    ])
                    .values_panic([
                        "default".into(),
                        "alert.mp3".into(),
                        50.into(),
                        "image.gif".into(),
                        "1".into(),
                        "Top".into(),
                        "default".into(),
                        text_style.clone().into(),
                        text_style.into(),
                    ])
                    .to_owned(),
            )
            .await?;
        Ok(())
    }
}
