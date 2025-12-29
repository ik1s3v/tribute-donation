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
    let mut builder = tauri::Builder::default()
        .plugin(tauri_plugin_websocket::init())
        .plugin(tauri_plugin_opener::init());

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
            sign_in,
            get_alert_by_id,
            get_alerts,
            get_settings,
            update_alert_settings,
            create_alert,
            delete_alert_by_id,
            update_settings,
            check_password,
            get_media_settings,
            update_media_settings,
            get_auction_settings,
            get_maption_settings,
            update_auction_settings,
            update_maption_settings,
            get_auc_fighter_settings,
            update_auc_fighter_settings,
            create_goal,
            update_goal_settings,
            get_goals,
            get_goal_by_id,
            get_not_ended_goal,
            get_not_ended_goals,
            finish_goal,
            update_service_auth,
            get_services,
            get_service_by_id,
            stream_elements_tip_event,
            get_exchange_rates,
            get_device_code,
            get_token,
            add_custom_rewards,
            remove_custom_rewards,
            twitch_connect,
            get_messages,
            update_service_settings,
            get_service_with_auth_by_id,
            tribute_bot_sign_out,
            twitch_sign_out,
            init
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
