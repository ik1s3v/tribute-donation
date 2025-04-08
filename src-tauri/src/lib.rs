pub mod commands;
pub mod constants;
pub mod enums;
pub mod repositories;
pub mod services;
pub mod utils;

use crate::commands::*;
use crate::enums::*;
use grammers_client::types::{LoginToken, PasswordToken};

use tauri::is_dev;
use tokio::sync::Mutex;
use utils::register_shortcuts;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app: &mut tauri::App| {
            register_shortcuts(app)?;
            Ok(())
        })
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_single_instance::init(|_, _, _| {}))
        .plugin(
            tauri_plugin_log::Builder::new()
                .level(if is_dev() {
                    log::LevelFilter::Info
                } else {
                    log::LevelFilter::Error
                })
                .build(),
        )
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .manage(ExecutionFlag(Mutex::new(false)))
        .manage(Mutex::new(None::<LoginToken>))
        .manage(Mutex::new(None::<PasswordToken>))
        .invoke_handler(tauri::generate_handler![
            is_authorized,
            request_login_code,
            get_messages,
            sign_in,
            skip_alert,
            replay_alert,
            get_alert_by_id,
            get_alerts,
            get_settings,
            update_alert_settings,
            update_settings,
            check_password,
            get_media_settings,
            update_media_settings,
            skip_media,
            pause_media,
            play_media,
            replay_media,
            init
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
