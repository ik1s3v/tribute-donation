pub use sea_orm_migration::prelude::*;

mod m20250324_201351_create_messages_table;
mod m20250324_221133_create_table_settings;
mod m20250325_171158_create_table_alerts;
mod m20250325_185301_add_default_alert;
mod m20250325_185310_add_default_settings;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20250324_201351_create_messages_table::Migration),
            Box::new(m20250325_171158_create_table_alerts::Migration),
            Box::new(m20250325_185301_add_default_alert::Migration),
            Box::new(m20250324_221133_create_table_settings::Migration),
            Box::new(m20250325_185310_add_default_settings::Migration),
        ]
    }
}
