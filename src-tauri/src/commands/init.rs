use crate::constants::{SQLITE_DB, STATIC_DIR};
use crate::services::{
    AxumService, DatabaseService, ExchangeRatesService, MediaService, StreamElementsService,
    TTSService, TelegramService, TwitchService, WebSocketBroadcaster,
};
use crate::utils::copy_assets_to_static;
use grammers_client::types::{LoginToken, PasswordToken};
use lingua::Language::{
    Arabic, Chinese, English, French, German, Hindi, Portuguese, Russian, Spanish, Ukrainian,
};
use lingua::LanguageDetectorBuilder;
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

    let version = app.package_info().version.to_string();

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

    copy_assets_to_static(&assets_path, &static_path)?;
    let database_service = DatabaseService::new(&db_path, &version).await?;
    app.manage(database_service);

    let websocket_broadcaster = WebSocketBroadcaster::new();
    app.manage(websocket_broadcaster);

    let axum_service = AxumService::new(
        widget_path.clone(),
        static_path.clone(),
        auc_fighter_path.clone(),
    );
    axum_service.run(app.clone()).await?;
    app.manage(axum_service);

    let language_detector = LanguageDetectorBuilder::from_languages(&[
        English, French, German, Spanish, Russian, Ukrainian, Portuguese, Hindi, Chinese, Arabic,
    ])
    .build();
    app.manage(language_detector);

    let tts_service = TTSService::new(static_path.clone());
    app.manage(tts_service);

    let api_id: i32 = std::env::var("API_ID")
        .expect("API_ID not set")
        .parse()
        .expect("API_ID must be a valid i32");

    let api_hash: String = std::env::var("API_HASH").expect("API_HASH not set");

    let user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
    let reqwest_client = reqwest::Client::builder()
        .user_agent(user_agent)
        .build()
        .map_err(|e| format!("reqwest build error: {}", e))?;
    app.manage(reqwest_client);

    let media_service = MediaService::new();
    app.manage(media_service);

    let twitch_service = TwitchService::new();
    twitch_service.connect(app.clone()).await?;
    app.manage(twitch_service);

    let stream_elements_service = StreamElementsService::new();
    app.manage(stream_elements_service);

    let mut exchange_rates_service = ExchangeRatesService::new();
    exchange_rates_service.get_exchange_rates().await;
    app.manage(Mutex::new(exchange_rates_service));

    app.manage(Mutex::new(None::<LoginToken>));
    app.manage(Mutex::new(None::<PasswordToken>));

    let session_path = app
        .path()
        .resolve("telegram.session", BaseDirectory::AppLocalData)
        .map_err(|e| format!("Failed to resolve telegram session path: {}", e))?;
    let mut telegram_service = TelegramService::new(api_id, api_hash, session_path);
    telegram_service.connect(app.clone()).await?;
    app.manage(telegram_service);

    Ok(())
}
