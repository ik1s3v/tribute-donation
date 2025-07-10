use crate::constants::{SQLITE_DB, STATIC_DIR};
use crate::services::{
    AxumService, DatabaseService, MediaService, TTSService, TelegramService, WebSocketBroadcaster,
};
use crate::utils::copy_assets_to_static;
use grammers_client::types::{LoginToken, PasswordToken};
use lingua::Language::{
    Arabic, Chinese, English, French, German, Hindi, Portuguese, Russian, Spanish, Ukrainian,
};
use lingua::LanguageDetectorBuilder;
use std::env;
use tauri::path::BaseDirectory;
use tauri::{AppHandle, Manager, State};
use tokio::sync::{mpsc, Mutex};
use tokio_tungstenite::tungstenite::Message;
pub struct ExecutionFlag(pub Mutex<bool>);

#[tauri::command]
pub async fn init(app: AppHandle, flag: State<'_, ExecutionFlag>) -> Result<(), String> {
    let mut executed = flag.0.lock().await;
    if *executed {
        return Ok(());
    }
    *executed = true;

    let db_path = app
        .path()
        .resolve(SQLITE_DB.to_string(), BaseDirectory::AppLocalData)
        .unwrap();
    let widget_path = app
        .path()
        .resolve("dist-widget", BaseDirectory::Resource)
        .unwrap();
    let static_path = app
        .path()
        .resolve(format!("{}", STATIC_DIR), BaseDirectory::AppLocalData)
        .unwrap();
    let assets_path = app
        .path()
        .resolve("assets", BaseDirectory::Resource)
        .unwrap();

    let database_service = DatabaseService::new(&db_path).await?;
    app.manage(database_service);

    copy_assets_to_static(&assets_path, &static_path)?;

    let websocket_broadcaster = WebSocketBroadcaster::new();
    app.manage(websocket_broadcaster);

    let axum_service = AxumService::new(widget_path.clone(), static_path.clone());
    axum_service.run(app.clone()).await?;
    app.manage(axum_service);

    let language_detector = LanguageDetectorBuilder::from_languages(&[
        English, French, German, Spanish, Russian, Ukrainian, Portuguese, Hindi, Chinese, Arabic,
    ])
    .build();
    app.manage(language_detector);

    let tts_service = TTSService::new(static_path.clone());
    app.manage(tts_service);

    let api_id: i32 = env!("API_ID").parse().expect("API_ID must be a valid i32");
    let api_hash: String = env!("API_HASH").to_string();

    let session_path = app
        .path()
        .resolve("telegram.session", BaseDirectory::AppLocalData)
        .unwrap();
    let user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
    let reqwest_client = reqwest::Client::builder()
        .user_agent(user_agent)
        .build()
        .unwrap();
    app.manage(reqwest_client);

    let media_service = MediaService::new();
    app.manage(media_service);

    app.manage(Mutex::new(None::<LoginToken>));
    app.manage(Mutex::new(None::<PasswordToken>));
    let mut telegram_service = TelegramService::new(api_id, api_hash, session_path);
    telegram_service.connect(app.clone()).await?;
    app.manage(telegram_service);

    Ok(())
}
