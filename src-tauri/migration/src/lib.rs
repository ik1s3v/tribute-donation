pub use sea_orm_migration::prelude::*;

mod m20250324_201351_create_messages_table;
mod m20250324_221133_create_table_settings;
mod m20250325_171158_create_table_alerts;
mod m20250325_185301_add_default_alert;
mod m20250325_185310_add_default_settings;
mod m20250405_190810_create_table_media_settings;
mod m20250405_190835_add_default_media_settings;
mod m20250711_124016_crate_table_auction_settings;
mod m20250711_124829_add_default_auction_settings;
mod m20250717_152323_create_table_maption_settings;
mod m20250717_152358_add_default_maption_settings;
mod m20250819_113411_create_table_auc_fighter_settings;
mod m20250819_113447_add_default_auc_fighter_settings;
mod m20250909_130535_add_alert_columns;
mod m20250911_130555_create_table_goals;
mod m20251104_230710_update_messages_colums;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20250324_201351_create_messages_table::Migration),
            Box::new(m20250324_221133_create_table_settings::Migration),
            Box::new(m20250325_171158_create_table_alerts::Migration),
            Box::new(m20250325_185301_add_default_alert::Migration),
            Box::new(m20250325_185310_add_default_settings::Migration),
            Box::new(m20250405_190810_create_table_media_settings::Migration),
            Box::new(m20250405_190835_add_default_media_settings::Migration),
            Box::new(m20250711_124016_crate_table_auction_settings::Migration),
            Box::new(m20250711_124829_add_default_auction_settings::Migration),
            Box::new(m20250717_152323_create_table_maption_settings::Migration),
            Box::new(m20250717_152358_add_default_maption_settings::Migration),
            Box::new(m20250819_113411_create_table_auc_fighter_settings::Migration),
            Box::new(m20250819_113447_add_default_auc_fighter_settings::Migration),
            Box::new(m20250909_130535_add_alert_columns::Migration),
            Box::new(m20250911_130555_create_table_goals::Migration),
            Box::new(m20251104_230710_update_messages_colums::Migration),
        ]
    }
}
