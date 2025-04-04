use crate::constants::{SQLITE_DB, STATIC_DIR, WS_WIDGET_PORT};
use crate::services::{
    DatabaseService, HttpService, TTSService, TelegramService, WebSocketService,
};
use crate::utils::copy_assets_to_static;
use std::env;
use std::sync::Arc;
use tauri::path::BaseDirectory;
use tauri::{AppHandle, Manager, State};
use tokio::sync::Mutex;
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

    let database_service = Arc::new(DatabaseService::new(&db_path).await?);

    let websocket_service = Arc::new(WebSocketService::new(
        Arc::clone(&database_service),
        Arc::clone(&Arc::new(app.clone())),
    ));
    websocket_service
        .start(&format!("127.0.0.1:{}", WS_WIDGET_PORT))
        .await?;

    copy_assets_to_static(&assets_path, &static_path)?;

    let http_service = Arc::new(HttpService::new(widget_path.clone(), static_path.clone()));

    http_service.run().await?;

    let tts_service = Arc::new(TTSService::new(static_path.clone()));
    let api_id: i32 = env!("API_ID").parse().expect("API_ID must be a valid i32");
    let api_hash: String = env!("API_HASH").to_string();

    let session_path = app
        .path()
        .resolve("telegram.session", BaseDirectory::AppLocalData)
        .unwrap();
    let mut telegram_service = TelegramService::new(
        api_id,
        api_hash,
        session_path,
        Arc::clone(&websocket_service),
        Arc::clone(&tts_service),
        Arc::clone(&database_service),
    );
    telegram_service.connect().await?;

    app.manage(database_service);
    app.manage(http_service);
    app.manage(websocket_service);
    app.manage(Mutex::new(telegram_service));
    Ok(())
}
