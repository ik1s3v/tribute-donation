use std::path::PathBuf;

use tauri::{path::BaseDirectory, AppHandle, Manager};

use crate::constants::{SQLITE_DB, STATIC_DIR};

#[derive(Clone, Debug)]
pub struct ConfigService {
    pub db_path: PathBuf,
    pub widget_path: PathBuf,
    pub auc_fighter_path: PathBuf,
    pub static_path: PathBuf,
    pub assets_path: PathBuf,
    pub api_id: i32,
    pub api_hash: String,
    pub client_id: String,
}

impl ConfigService {
    pub fn new(app: &AppHandle) -> Result<Self, String> {
        #[cfg(not(debug_assertions))]
        let api_id: i32 = env!("API_ID").parse().expect("API_ID must be a valid i32");
        #[cfg(not(debug_assertions))]
        let api_hash: String = env!("API_HASH").to_string();
        #[cfg(not(debug_assertions))]
        let client_id: String = env!("TWITCH_CLIENT_ID").to_string();

        #[cfg(debug_assertions)]
        let api_id: i32 = std::env::var("API_ID")
            .expect("API_ID must be set")
            .parse()
            .expect("API_ID must be a valid i32");
        #[cfg(debug_assertions)]
        let api_hash: String = std::env::var("API_HASH").expect("API_HASH must be set");
        #[cfg(debug_assertions)]
        let client_id: String =
            std::env::var("TWITCH_CLIENT_ID").expect("TWITCH_CLIENT_ID must be set");

        let db_path = app
            .path()
            .resolve(SQLITE_DB.to_string(), BaseDirectory::AppLocalData)
            .map_err(|e| format!("Failed to resolve database path: {}", e))?;
        let widget_path = app
            .path()
            .resolve("dist-widget", BaseDirectory::Resource)
            .map_err(|e| format!("Failed to resolve widget path: {}", e))?;
        let auc_fighter_path = app
            .path()
            .resolve("auc-fighter", BaseDirectory::Resource)
            .map_err(|e| format!("Failed to resolve auc-fighter path: {}", e))?;
        let static_path = app
            .path()
            .resolve(format!("{}", STATIC_DIR), BaseDirectory::AppLocalData)
            .map_err(|e| format!("Failed to resolve static directory path: {}", e))?;
        let assets_path = app
            .path()
            .resolve("assets", BaseDirectory::Resource)
            .map_err(|e| format!("Failed to resolve assets path: {}", e))?;
        Ok(Self {
            db_path,
            widget_path,
            auc_fighter_path,
            static_path,
            assets_path,
            api_id,
            api_hash,
            client_id,
        })
    }
}
