use entity::alert::*;
use sea_orm_migration::prelude::*;
use sea_orm_migration::sea_orm::entity::*;
#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let connection = manager.get_connection();
        let text_style = TextStyle {
            font_size: 60,
            text_color: "rgb(255,255,255,1)".to_string(),
            bold: true,
            italics: false,
            underline: false,
            letter_spacing: 0,
            word_spacing: 0,
        };
        ActiveModel {
            id: Set("default".to_string()),
            audio: Set("alert.mp3".to_string()),
            image: Set("image.gif".to_string()),
            group_id: Set("1".to_string()),
            name: Set("default".to_string()),
            audio_volume: Set(50),
            view_type: Set(ViewType::Top),
            title_style: Set(text_style.clone()),
            message_style: Set(text_style),
        }
        .insert(connection)
        .await?;
        Ok(())
    }
}
