pub mod commands;
pub mod constants;
pub mod enums;
pub mod repositories;
pub mod services;
pub mod utils;
use crate::commands::*;
use crate::enums::*;
use tokio::sync::Mutex;
use utils::register_shortcuts;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let mut builder = tauri::Builder::default();

    #[cfg(debug_assertions)]
    {
        let devtools = tauri_plugin_devtools::init();
        builder = builder.plugin(devtools);
    }

    #[cfg(not(debug_assertions))]
    {
        let log_plugin = tauri_plugin_log::Builder::new()
            .level(log::LevelFilter::Error)
            .build();

        builder = builder.plugin(log_plugin);
    }

    builder
        .setup(|app: &mut tauri::App| {
            register_shortcuts(app)?;
            Ok(())
        })
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_single_instance::init(|_, _, _| {}))
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .manage(ExecutionFlag(Mutex::new(false)))
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
            get_auction_settings,
            get_maption_settings,
            update_auction_settings,
            update_maption_settings,
            init
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
