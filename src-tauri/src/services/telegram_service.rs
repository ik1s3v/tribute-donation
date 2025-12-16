use super::DatabaseService;
use crate::{
    app_event::AppEvent,
    repositories::ServicesRepository,
    utils::{on_new_donation, parse_message_to_tribute_donate_message},
};
use entity::{
    service::{Model as Service, ServiceType},
    settings::Currency,
};
use grammers_client::{
    session::Session,
    types::{LoginToken, PasswordToken},
    Client, Config, FixedReconnect, InitParams, SignInError, Update,
};
use serde::Serialize;
use std::path::{Path, PathBuf};
use tauri::{AppHandle, Manager};
use tokio::sync::Mutex;

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
        let reconnection_policy = &*Box::leak(Box::new(FixedReconnect {
            attempts: 10,
            delay: std::time::Duration::from_secs(1),
        }));
        let telegram_client = Client::connect(Config {
            session: Session::load_file_or_create(&*self.session_path).map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?,
            api_id: self.api_id,
            api_hash: self.api_hash.clone(),

            params: InitParams {
                reconnection_policy: reconnection_policy,
                ..Default::default()
            },
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
        let database_service = app.state::<DatabaseService>();
        if is_authorized {
            database_service
                .update_service(Service {
                    id: ServiceType::TributeBot,
                    authorized: true,
                    ..Default::default()
                })
                .await
                .unwrap();
            self.listen_tribute(app).await?;
        } else {
            database_service
                .update_service(Service {
                    id: ServiceType::TributeBot,
                    authorized: false,
                    ..Default::default()
                })
                .await
                .unwrap();
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
                        on_new_donation(
                            message.id().to_string(),
                            ServiceType::TributeBot,
                            donate_message.user_name,
                            donate_message.currency,
                            donate_message.amount,
                            donate_message.text,
                            app.clone(),
                        )
                        .await;
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
        let database_service = app_handle.state::<DatabaseService>();
        match sign_in {
            Ok(_) => {
                telegram_client
                    .session()
                    .save_to_file(&*self.session_path)
                    .unwrap();
                database_service
                    .update_service(Service {
                        id: ServiceType::TributeBot,
                        authorized: true,
                        ..Default::default()
                    })
                    .await
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
        let database_service = app_handle.state::<DatabaseService>();
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
                database_service
                    .update_service(Service {
                        id: ServiceType::TributeBot,
                        authorized: true,
                        ..Default::default()
                    })
                    .await
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
