use std::{
    path::{Path, PathBuf},
    sync::Arc,
};

use crate::{
    app_event::AppEvent,
    constants::TRIBUTE_ID,
    repositories::{MessagesRepository, SettingsRepository},
    utils::{parse_message_to_tribute_donate_message, remove_black_listed_words, remove_links},
};
use chrono::Utc;
use entity::message::{Currency, Model as Message};
use grammers_client::{
    session::Session,
    types::{LoginToken, PasswordToken},
    Client, Config, SignInError, Update,
};
use serde::Serialize;
use uuid::Uuid;

use super::{DatabaseService, MediaService, TTSService, WebSocketService};

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
    client: Option<Client>,
    api_id: i32,
    api_hash: String,
    session_path: Arc<PathBuf>,
    websocket_service: Arc<WebSocketService>,
    tts_service: Arc<TTSService>,
    database_service: Arc<DatabaseService>,
    media_service: Arc<MediaService>,
}
impl TelegramService {
    pub fn new(
        api_id: i32,
        api_hash: String,
        session_path: impl AsRef<Path>,
        websocket_service: Arc<WebSocketService>,
        tts_service: Arc<TTSService>,
        database_service: Arc<DatabaseService>,
        media_service: Arc<MediaService>,
    ) -> Self {
        Self {
            client: None,
            api_id,
            api_hash,
            session_path: Arc::new(session_path.as_ref().to_path_buf()),
            websocket_service,
            tts_service,
            database_service,
            media_service,
        }
    }

    pub async fn connect(&mut self) -> Result<(), String> {
        let client = Client::connect(Config {
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

        let is_authorized = client.is_authorized().await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
        self.client = Some(client);
        if is_authorized {
            self.listen_tribute().await?;
        }
        Ok(())
    }
    pub async fn listen_tribute(&self) -> Result<(), String> {
        let client = Arc::clone(&Arc::new(
            self.client
                .to_owned()
                .ok_or("Telegram client is not initialized.".to_string())?,
        ));
        let database_service = Arc::clone(&self.database_service);
        let websocket_service = Arc::clone(&self.websocket_service);
        let tts_service = Arc::clone(&self.tts_service);
        let media_service = Arc::clone(&self.media_service);
        tauri::async_runtime::spawn(async move {
            loop {
                let update = match client.next_update().await {
                    Ok(update) => update,
                    Err(e) => {
                        log::error!("Failed to get next update: {}", e.to_string());
                        continue;
                    }
                };
                match update {
                    Update::NewMessage(message)
                        if !message.outgoing() && message.chat().id() == TRIBUTE_ID =>
                    {
                        let donate_message = match parse_message_to_tribute_donate_message(
                            message.text(),
                            message.id(),
                        ) {
                            Some(message) => message,
                            None => continue,
                        };
                        let media = media_service.get_media(&donate_message).await;
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
                            .get_message_by_telegram_id(telegram_message_id.clone())
                            .await
                        {
                            continue;
                        }
                        let audio = if let Some(text) = text.clone() {
                            match tts_service
                                .make_audio(text.as_str(), message.id().to_string())
                                .await
                            {
                                Ok(audio) => Some(audio),
                                Err(e) => {
                                    log::error!("{}", e.to_string());
                                    let ws_message = EventMessage {
                                        event: AppEvent::MakeAudioError,
                                        data: e,
                                    };

                                    websocket_service.broadcast_event_message(&ws_message).await;
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
                            telegram_message_id,
                            played: false,
                            created_at: Utc::now().timestamp(),
                            media,
                        };
                        database_service
                            .save_message(alert_message.clone())
                            .await
                            .unwrap();

                        let event_message = EventMessage {
                            event: AppEvent::Message,
                            data: alert_message,
                        };

                        websocket_service
                            .broadcast_event_message(&event_message)
                            .await;
                    }
                    _ => {}
                }
            }
        });
        Ok(())
    }
    pub async fn request_login_code(&mut self, phone_number: String) -> Result<LoginToken, String> {
        let client = self.client.as_ref().unwrap();
        match client.request_login_code(&phone_number).await {
            Ok(login_token) => return Ok(login_token),
            Err(e) => {
                log::error!("{}", e.to_string());
                return Err(e.to_string());
            }
        }
    }
    pub async fn sign_in(
        &self,
        phone_code: String,
        login_token: &LoginToken,
    ) -> Result<Option<PasswordToken>, String> {
        let client = self.client.as_ref().unwrap();
        let sign_in = client.sign_in(login_token, &phone_code).await;
        match sign_in {
            Ok(_) => {
                client.session().save_to_file(&*self.session_path).unwrap();
                self.listen_tribute().await?;
                return Ok(None);
            }
            Err(e) => match e {
                SignInError::PasswordRequired(password_token) => {
                    return Ok(Some(password_token));
                }
                _ => {
                    log::error!("{}", e.to_string());
                    return Err(e.to_string());
                }
            },
        };
    }

    pub async fn check_password(
        &self,
        password: String,
        password_token: PasswordToken,
    ) -> Result<(), String> {
        let client = self.client.as_ref().unwrap();
        let check_password = client.check_password(password_token, password).await;
        match check_password {
            Ok(_) => {
                client.session().save_to_file(&*self.session_path).unwrap();
                self.listen_tribute().await?;
                return Ok(());
            }
            Err(e) => {
                log::error!("{}", e.to_string());
                return Err(e.to_string());
            }
        };
    }

    pub async fn is_authorized(&self) -> Result<bool, String> {
        let is_authorized = self
            .client
            .as_ref()
            .unwrap()
            .is_authorized()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
        Ok(is_authorized)
    }
    pub async fn sign_out(&self) -> Result<(), String> {
        self.client
            .as_ref()
            .unwrap()
            .sign_out()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
        Ok(())
    }
}
