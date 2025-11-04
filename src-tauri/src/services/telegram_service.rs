use super::{DatabaseService, MediaService, TTSService, WebSocketBroadcaster};
use crate::{
    app_event::AppEvent,
    repositories::{GoalsRepository, MessagesRepository, SettingsRepository},
    utils::{parse_message_to_tribute_donate_message, remove_black_listed_words, remove_links},
};
use chrono::Utc;
use entity::message::{Currency, Model as Message, Platform};
use grammers_client::{
    session::Session,
    types::{LoginToken, PasswordToken},
    Client, Config, SignInError, Update,
};
use serde::Serialize;
use std::path::{Path, PathBuf};
use tauri::{AppHandle, Manager};
use tokio::sync::Mutex;
use uuid::Uuid;

#[derive(Serialize, Clone, Debug)]
pub struct EventMessage<T> {
    pub event: AppEvent,
    pub data: T,
}
#[derive(Clone, Debug)]
pub struct TributeDonateMessage {
    pub id: i32,
    pub user_name: String,
    pub text: Option<String>,
    pub amount: f64,
    pub currency: Currency,
}

#[derive(Clone)]
pub struct TelegramService {
    api_id: i32,
    api_hash: String,
    session_path: PathBuf,
}

impl TelegramService {
    pub fn new(api_id: i32, api_hash: String, session_path: impl AsRef<Path>) -> Self {
        Self {
            api_id,
            api_hash,
            session_path: session_path.as_ref().to_path_buf(),
        }
    }

    pub async fn connect(&mut self, app: AppHandle) -> Result<(), String> {
        let telegram_client = Client::connect(Config {
            session: Session::load_file_or_create(&*self.session_path).map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?,
            api_id: self.api_id,
            api_hash: self.api_hash.clone(),
            params: Default::default(),
        })
        .await
        .map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
        let is_authorized = telegram_client.is_authorized().await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
        app.manage(telegram_client);
        if is_authorized {
            self.listen_tribute(app).await?;
        }
        Ok(())
    }

    pub async fn listen_tribute(&self, app: AppHandle) -> Result<(), String> {
        #[cfg(not(debug_assertions))]
        let tribute_id: i64 = 6675346585;
        #[cfg(debug_assertions)]
        let tribute_id: i64 = std::env::var("TRIBUTE_ID").unwrap().parse().unwrap();
        tauri::async_runtime::spawn(async move {
            let telegram_client = app.state::<Client>();
            let database_service = app.state::<DatabaseService>();
            let tts_service = app.state::<TTSService>();
            let media_service = app.state::<MediaService>();
            let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
            loop {
                let update = match telegram_client.next_update().await {
                    Ok(update) => update,
                    Err(e) => {
                        log::error!("Failed to get next update: {}", e.to_string());
                        continue;
                    }
                };
                match update {
                    Update::NewMessage(message)
                        if cfg!(debug_assertions)
                            && message.outgoing()
                            && message.chat().id() == tribute_id
                            || !cfg!(debug_assertions)
                                && !message.outgoing()
                                && message.chat().id() == tribute_id =>
                    {
                        let donate_message = match parse_message_to_tribute_donate_message(
                            message.text(),
                            message.id(),
                        ) {
                            Some(message) => message,
                            None => continue,
                        };
                        let media = media_service.get_media(&donate_message, app.clone()).await;
                        let settings = match database_service
                            .get_settings()
                            .await
                            .map_err(|e| {
                                log::error!("{}", e.to_string());
                            })
                            .unwrap()
                        {
                            Some(settings) => settings,
                            None => continue,
                        };

                        let text = match donate_message.text {
                            Some(text) => {
                                let text_without_black_listed_words = remove_black_listed_words(
                                    text.as_str(),
                                    settings.black_list.as_str(),
                                );

                                if settings.remove_links {
                                    Some(remove_links(text_without_black_listed_words.as_str()))
                                } else {
                                    Some(text_without_black_listed_words)
                                }
                            }
                            None => None,
                        };

                        let telegram_message_id = message.id().to_string();

                        if let Ok(Some(_)) = database_service
                            .get_message_by_platform_message_id(telegram_message_id.clone())
                            .await
                        {
                            continue;
                        }
                        let audio = if let Some(text) = text.clone() {
                            match tts_service
                                .make_audio(
                                    &remove_links(&text),
                                    message.id().to_string(),
                                    app.clone(),
                                )
                                .await
                            {
                                Ok(audio) => Some(audio),
                                Err(e) => {
                                    log::error!("{}", e.to_string());
                                    let ws_message = EventMessage {
                                        event: AppEvent::MakeAudioError,
                                        data: e,
                                    };

                                    websocket_broadcaster
                                        .broadcast_event_message(&ws_message)
                                        .await
                                        .unwrap();
                                    None
                                }
                            }
                        } else {
                            None
                        };
                        let alert_message = Message {
                            id: Uuid::new_v4().to_string(),
                            user_name: donate_message.user_name,
                            amount: donate_message.amount,
                            text,
                            audio,
                            currency: donate_message.currency,
                            platform: Platform::Telegram,
                            platform_message_id: telegram_message_id,
                            played: false,
                            created_at: Utc::now().timestamp(),
                            media: media.clone(),
                        };
                        database_service
                            .save_message(alert_message.clone())
                            .await
                            .unwrap();

                        database_service
                            .update_goal_amount(donate_message.amount as u32)
                            .await
                            .unwrap();

                        let event_message = EventMessage {
                            event: AppEvent::Message,
                            data: alert_message.clone(),
                        };

                        websocket_broadcaster
                            .broadcast_event_message(&event_message)
                            .await
                            .unwrap();

                        if let Some(_) = media {
                            let event_message = EventMessage {
                                event: AppEvent::MediaMessage,
                                data: alert_message,
                            };

                            websocket_broadcaster
                                .broadcast_event_message(&event_message)
                                .await
                                .unwrap();
                        }
                    }
                    _ => {}
                }
            }
        });
        Ok(())
    }
    pub async fn request_login_code(
        &self,
        phone_number: String,
        app: AppHandle,
    ) -> Result<(), String> {
        let telegram_client = app.state::<Client>();
        let login_token_state = app.state::<Mutex<Option<LoginToken>>>();
        let mut login_token_guard = login_token_state.lock().await;
        match telegram_client.request_login_code(&phone_number).await {
            Ok(login_token) => {
                *login_token_guard = Some(login_token);
            }
            Err(e) => {
                log::error!("{}", e.to_string());
                return Err(e.to_string());
            }
        }
        Ok(())
    }

    pub async fn sign_in(&self, phone_code: String, app: AppHandle) -> Result<(), String> {
        let app_handle = app.clone();
        let telegram_client = app_handle.state::<Client>();
        let login_token_state = app_handle.state::<Mutex<Option<LoginToken>>>();
        let login_token_guard = login_token_state.lock().await;
        let login_token = login_token_guard.as_ref().unwrap();
        let password_token_state = app_handle.state::<Mutex<Option<PasswordToken>>>();
        let mut password_token_guard = password_token_state.lock().await;
        let sign_in = telegram_client.sign_in(login_token, &phone_code).await;
        match sign_in {
            Ok(_) => {
                telegram_client
                    .session()
                    .save_to_file(&*self.session_path)
                    .unwrap();
                self.listen_tribute(app).await?;
            }
            Err(e) => match e {
                SignInError::PasswordRequired(password_token) => {
                    *password_token_guard = Some(password_token);
                    return Err("Password required".to_string());
                }
                _ => {
                    log::error!("{}", e.to_string());
                    return Err(e.to_string());
                }
            },
        };
        Ok(())
    }

    pub async fn check_password(&self, password: String, app: AppHandle) -> Result<(), String> {
        let app_handle = app.clone();
        let password_token_state = app_handle.state::<Mutex<Option<PasswordToken>>>();
        let password_token_guard = password_token_state.lock().await;
        let password_token = password_token_guard.as_ref().unwrap();
        let telegram_client = app_handle.state::<Client>();
        let check_password = telegram_client
            .check_password(password_token.clone(), password)
            .await;
        match check_password {
            Ok(_) => {
                telegram_client
                    .session()
                    .save_to_file(&*self.session_path)
                    .unwrap();
                self.listen_tribute(app).await?;
                return Ok(());
            }
            Err(e) => {
                log::error!("{}", e.to_string());
                return Err(e.to_string());
            }
        };
    }

    pub async fn is_authorized(&self, app: AppHandle) -> Result<bool, String> {
        let telegram_client = app.state::<Client>();
        let is_authorized = telegram_client.is_authorized().await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
        Ok(is_authorized)
    }
    pub async fn sign_out(&self, app: AppHandle) -> Result<(), String> {
        let telegram_client = app.state::<Client>();
        telegram_client.sign_out().await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
        Ok(())
    }
}
