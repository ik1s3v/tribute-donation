use migration::{Migrator, MigratorTrait};
use sea_orm::{ConnectOptions, Database, DatabaseConnection};
use std::path::PathBuf;
use tauri::is_dev;

#[derive(Clone, Debug)]
pub struct DatabaseService {
    pub connection: DatabaseConnection,
}
impl DatabaseService {
    pub async fn new(db_path: &PathBuf) -> Result<Self, String> {
        let db_url = format!("sqlite://{}?mode=rwc", db_path.to_str().unwrap());

        let mut options = ConnectOptions::new(db_url);
        options
            .max_connections(100)
            .min_connections(5)
            .sqlx_logging(true)
            .sqlx_logging_level(if is_dev() {
                log::LevelFilter::Info
            } else {
                log::LevelFilter::Error
            });

        let connection = Self::establish_connection(options).await?;
        Self::run_migrations(&connection).await?;

        Ok(Self { connection })
    }

    async fn establish_connection(options: ConnectOptions) -> Result<DatabaseConnection, String> {
        Database::connect(options).await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })
    }
    async fn run_migrations(connection: &DatabaseConnection) -> Result<(), String> {
        match Migrator::up(connection, None).await {
            Ok(_) => {
                log::info!("Migrations run");
                Ok(())
            }
            Err(e) => {
                log::error!("{}", e.to_string());
                Err(e.to_string())
            }
        }
    }
}
