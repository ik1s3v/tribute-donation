use crate::{
    enums::AppEvent,
    repositories::ServicesRepository,
    services::{DatabaseService, EventMessage, WebSocketBroadcaster},
};
use entity::service::{ServiceAuth, ServiceType, TwitchAuth, TwitchIntegrationSettings};
use futures::StreamExt;
use reqwest::StatusCode;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use tauri::{AppHandle, Manager, State};
use tokio_tungstenite::{connect_async, tungstenite::Message};

enum WebSocketInstruction {
    Continue,
    Reconnect(String),
    Notification(EventSubMessage),
    SubscribeError,
    Revocation,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct SubscriptionRequestBody {
    pub r#type: String,
    pub version: String,
    pub condition: SubscriptionCondition,
    pub transport: SubscriptionTransport,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct TwitchReward {
    pub id: String,
    pub prompt: String,
    pub title: String,
    pub cost: u32,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct AddTwitchRewardBody {
    pub title: String,
    pub cost: u32,
    pub background_color: String,
    pub is_user_input_required: bool,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct SubscriptionCondition {
    pub broadcaster_user_id: String,
    pub user_id: Option<String>,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct SubscriptionTransport {
    pub method: String,
    pub session_id: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct TwitchDeviceCodeResponse {
    pub device_code: String,
    pub user_code: String,
    pub verification_uri: String,
    pub expires_in: u32,
    pub interval: u32,
}

#[derive(Deserialize, Debug)]
pub struct TwitchBadResponse {
    pub error: Option<String>,
    pub status: u16,
    pub message: String,
}
#[derive(Deserialize, Debug)]
pub struct TwitchTokenResponse {
    pub access_token: String,
    pub refresh_token: String,
    pub expires_in: u32,
    pub scope: Vec<String>,
    pub token_type: String,
}
#[derive(Deserialize, Debug)]
pub struct TwitchRefreshTokenResponse {
    pub access_token: String,
    pub refresh_token: String,
    pub scope: Vec<String>,
    pub token_type: String,
}

#[derive(Deserialize, Debug)]
pub struct TwitchUsersResponse {
    pub data: Vec<TwitchUser>,
}
#[derive(Deserialize, Debug, Clone)]
pub struct TwitchUser {
    pub id: String,
    pub login: String,
    pub display_name: String,
    pub r#type: String,
    pub broadcaster_type: String,
    pub description: String,
    pub profile_image_url: String,
    pub offline_image_url: String,
    pub view_count: u64,
    pub email: String,
    pub created_at: String,
}
#[derive(Deserialize, Debug, Clone)]
pub struct TwitchTokenInfo {
    pub client_id: String,
    pub login: String,
    pub user_id: String,
    pub expires_in: u32,
    pub scopes: Vec<String>,
}

#[derive(Debug, Deserialize)]
pub struct EventSubMessage {
    pub metadata: MessageMetadata,
    pub payload: MessagePayload,
}

#[derive(Debug, Deserialize)]
pub struct MessageMetadata {
    pub message_type: String,
    pub message_id: String,
    pub message_timestamp: String,
    pub subscription_type: Option<String>,
    pub subscription_version: Option<String>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct SessionPayload {
    pub session: SessionDetails,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Condition {
    pub broadcaster_user_id: String,
    pub user_id: Option<String>,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Transport {
    pub method: String,
    pub session_id: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Event {
    pub user_id: Option<String>,
    pub id: Option<String>,
    pub user_login: Option<String>,
    pub user_name: Option<String>,
    pub user_input: Option<String>,
    pub status: Option<String>,
    pub broadcaster_user_id: Option<String>,
    pub broadcaster_user_login: Option<String>,
    pub broadcaster_user_name: Option<String>,
    pub followed_at: Option<String>,
    pub redeemed_at: Option<String>,
    pub reward: Option<TwitchReward>,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct EventPayload {
    pub subscription: Subscription,
    pub event: Event,
}
#[derive(Debug, Deserialize)]
pub struct Reward {
    pub id: String,
    pub title: String,
    pub cost: u64,
    pub prompt: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Subscription {
    pub id: String,
    pub status: String,
    pub r#type: SubscriptionType,
    pub version: String,
    pub cost: u8,
    pub condition: Condition,
    pub transport: Transport,
    pub created_at: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub enum SubscriptionType {
    #[serde(rename = "channel.channel_points_custom_reward_redemption.add")]
    ChannelPointsCustomRewardRedemptionAdd,
    #[serde(rename = "channel.subscribe")]
    ChannelSubscribe,
    #[serde(rename = "channel.follow")]
    ChannelFollow,
    #[serde(rename = "channel.subscription.gift")]
    ChannelSubscriptionGift,
    #[serde(rename = "channel.subscription.message")]
    ChannelSubscriptionMessage,
    #[serde(rename = "channel.cheer")]
    ChannelCheer,
    #[serde(other)]
    Unknown,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct SessionDetails {
    pub id: String,
    pub keepalive_timeout_seconds: Option<u64>,
    pub status: Option<String>,
    pub connected_at: String,
    pub reconnect_url: Option<String>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(untagged)]
pub enum MessagePayload {
    Welcome(SessionPayload),
    Reconnect(SessionPayload),
    Event(EventPayload),
    Generic(serde_json::Value),
}

#[derive(Clone, Debug)]
pub struct TwitchService {
    client_id: String,
    scopes: String,
    websocket_eventsub_url: String,
    api_endpoint: String,
    auth_endpoint: String,
    eventsub_endpoint: String,
    http_client: reqwest::Client,
}

impl TwitchService {
    pub fn new() -> Self {
        #[cfg(not(debug_assertions))]
        let auth_endpoint = "https://id.twitch.tv/oauth2".to_string();
        #[cfg(debug_assertions)]
        let auth_endpoint = "http://localhost:8080/auth".to_string();
        #[cfg(not(debug_assertions))]
        let api_endpoint = "https://api.twitch.tv/helix".to_string();
        #[cfg(debug_assertions)]
        let api_endpoint = "http://localhost:8080/mock".to_string();
        #[cfg(not(debug_assertions))]
        let websocket_eventsub_url =
            "wss://eventsub.wss.twitch.tv/ws?keepalive_timeout_seconds=30".to_string();
        #[cfg(debug_assertions)]
        let websocket_eventsub_url = "ws://localhost:8081/ws".to_string();
        #[cfg(not(debug_assertions))]
        let eventsub_endpoint = api_endpoint.clone();
        #[cfg(debug_assertions)]
        let eventsub_endpoint = "http://localhost:8081".to_string();

        Self {
            client_id: std::env::var("TWITCH_CLIENT_ID").unwrap(),
            scopes: "user:read:email channel:read:subscriptions channel:manage:redemptions"
                .to_string(),
            websocket_eventsub_url,
            api_endpoint,
            auth_endpoint,
            eventsub_endpoint,
            http_client: reqwest::Client::builder().build().unwrap(),
        }
    }

    pub async fn get_device_code(&self) -> Result<TwitchDeviceCodeResponse, String> {
        let mut params = HashMap::new();

        params.insert("client_id", self.client_id.clone());
        params.insert("scopes", self.scopes.clone());
        let response = self
            .http_client
            .post("https://id.twitch.tv/oauth2/device")
            .form(&params)
            .send()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;

        let device_code_response: TwitchDeviceCodeResponse =
            response.json().await.map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
        Ok(device_code_response)
    }

    pub async fn get_token(&self, app: AppHandle, device_code: String) -> Result<(), String> {
        let database_service = app.state::<DatabaseService>();

        let mut params = HashMap::new();

        params.insert("client_id", self.client_id.clone());
        params.insert("scopes", self.scopes.clone());
        params.insert("device_code", device_code);
        params.insert(
            "grant_type",
            "urn:ietf:params:oauth:grant-type:device_code".to_string(),
        );

        let response = self
            .http_client
            .post("https://id.twitch.tv/oauth2/token")
            .form(&params)
            .send()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
        if !response.status().is_success() {
            let err_text = response.text().await.map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
            log::error!("Twitch token error response: {}", err_text);
            return Err(err_text);
        }
        let token_response: TwitchTokenResponse =
            response.json().await.map_err(|e| e.to_string())?;
        let token_info: TwitchTokenInfo = self
            .validate_token(
                token_response.access_token.clone(),
                "https://id.twitch.tv/oauth2".to_string(),
            )
            .await
            .map_err(|e| {
                log::error!("{}", e.message);
                e.message
            })?;
        let auth = TwitchAuth {
            access_token: token_response.access_token.clone(),
            refresh_token: token_response.refresh_token,
            token_type: token_response.token_type,
            expires_in: token_response.expires_in,
            user_id: token_info.user_id.clone(),
        };

        database_service
            .update_service_auth(ServiceType::Twitch, Some(ServiceAuth::Twitch(auth)), true)
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;

        #[cfg(debug_assertions)]
        {
            self.get_token_mock(app.clone()).await?;
        }

        Ok(())
    }

    async fn get_token_mock(&self, app: AppHandle) -> Result<(), String> {
        let database_service = app.state::<DatabaseService>();

        let user_id = std::env::var("TWITCH_USER_ID_MOCK").unwrap();
        let client_id = std::env::var("TWITCH_CLIENT_ID_MOCK").unwrap();
        let client_secret = std::env::var("TWITCH_CLIENT_SECRET_MOCK").unwrap();

        let mut params = HashMap::new();

        params.insert("client_id", client_id);
        params.insert("client_secret", client_secret);
        params.insert("grant_type", "user_token".to_string());
        params.insert("user_id", user_id.clone());
        params.insert("scope", self.scopes.clone());

        let response = self
            .http_client
            .post(format!("{}/authorize", self.auth_endpoint))
            .query(&params)
            .send()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
        if !response.status().is_success() {
            let err_text = response.text().await.map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
            log::error!("Twitch mock token error response: {}", err_text);
            return Err(err_text);
        }
        let token_response: TwitchTokenResponse =
            response.json().await.map_err(|e| e.to_string())?;

        let auth = TwitchAuth {
            access_token: token_response.access_token.clone(),
            refresh_token: token_response.refresh_token,
            token_type: token_response.token_type,
            expires_in: token_response.expires_in,
            user_id: user_id.clone(),
        };

        database_service
            .update_service_auth(ServiceType::Twitch, Some(ServiceAuth::Twitch(auth)), true)
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;

        Ok(())
    }

    pub async fn refresh_token(
        &self,

        client_id: String,
        refresh_token: String,
    ) -> Result<TwitchRefreshTokenResponse, TwitchBadResponse> {
        let mut params = HashMap::new();

        params.insert("grant_type", "refresh_token".to_string());
        params.insert(
            "refresh_token",
            urlencoding::encode(&refresh_token).to_string(),
        );
        params.insert("client_id", client_id);

        let response = self
            .http_client
            .post(format!("{}/token", self.auth_endpoint))
            .form(&params)
            .send()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                TwitchBadResponse {
                    error: None,
                    message: e.to_string(),
                    status: 5000,
                }
            })?;
        if !response.status().is_success() {
            let bad_response: TwitchBadResponse = response.json().await.map_err(|e| {
                log::error!("{}", e.to_string());
                TwitchBadResponse {
                    error: None,
                    message: e.to_string(),
                    status: 5000,
                }
            })?;

            return Err(bad_response);
        }

        let refresh_token_response: TwitchRefreshTokenResponse =
            response.json().await.map_err(|e| {
                log::error!("{}", e.to_string());
                TwitchBadResponse {
                    error: None,
                    message: e.to_string(),
                    status: 5000,
                }
            })?;

        Ok(refresh_token_response)
    }

    pub async fn connect(&self, app: AppHandle) -> Result<(), String> {
        let database_service = app.state::<DatabaseService>();
        let service = database_service
            .get_service_by_id(ServiceType::Twitch)
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
        if let Some(service) = service {
            if service.authorized {
                if let Some(ServiceAuth::Twitch(auth)) = service.auth {
                    let token = auth.access_token;
                    let user_id = auth.user_id;
                    let expires_in = auth.expires_in;
                    let refresh_token = auth.refresh_token;
                    match self
                        .validate_token(token.clone(), self.auth_endpoint.clone())
                        .await
                    {
                        Ok(twitch_token_info) => {
                            if twitch_token_info.expires_in < 60 {
                                match self
                                    .refresh_token(self.client_id.clone(), refresh_token)
                                    .await
                                {
                                    Ok(refresh_token_response) => {
                                        let auth = TwitchAuth {
                                            access_token: refresh_token_response
                                                .access_token
                                                .clone(),
                                            refresh_token: refresh_token_response.refresh_token,
                                            token_type: refresh_token_response.token_type,
                                            expires_in: expires_in.clone(),
                                            user_id: user_id.clone(),
                                        };
                                        database_service
                                            .update_service_auth(
                                                ServiceType::Twitch,
                                                Some(ServiceAuth::Twitch(auth)),
                                                true,
                                            )
                                            .await
                                            .unwrap();
                                        self.run_websocket_client(token.clone(), user_id, app)
                                            .await?;
                                        return Ok(());
                                    }
                                    Err(e) => {
                                        if e.status == StatusCode::BAD_REQUEST.as_u16() {
                                            database_service
                                                .update_service_auth(
                                                    ServiceType::Twitch,
                                                    None,
                                                    false,
                                                )
                                                .await
                                                .unwrap();
                                        }
                                        return Ok(());
                                    }
                                };
                            } else {
                                self.run_websocket_client(token.clone(), user_id, app)
                                    .await?;
                                return Ok(());
                            }
                        }
                        Err(e) => {
                            if e.status == StatusCode::UNAUTHORIZED.as_u16() {
                                match self
                                    .refresh_token(self.client_id.clone(), refresh_token)
                                    .await
                                {
                                    Ok(refresh_token_response) => {
                                        let auth = TwitchAuth {
                                            refresh_token: refresh_token_response
                                                .refresh_token
                                                .clone(),
                                            access_token: refresh_token_response
                                                .access_token
                                                .clone(),
                                            token_type: refresh_token_response.token_type.clone(),
                                            expires_in: expires_in.clone(),
                                            user_id: user_id.clone(),
                                        };

                                        database_service
                                            .update_service_auth(
                                                ServiceType::Twitch,
                                                Some(ServiceAuth::Twitch(auth)),
                                                true,
                                            )
                                            .await
                                            .unwrap();
                                        self.run_websocket_client(
                                            refresh_token_response.access_token,
                                            user_id,
                                            app,
                                        )
                                        .await?;
                                        return Ok(());
                                    }
                                    Err(e) => {
                                        if e.status == StatusCode::BAD_REQUEST.as_u16() {
                                            database_service
                                                .update_service_auth(
                                                    ServiceType::Twitch,
                                                    None,
                                                    false,
                                                )
                                                .await
                                                .unwrap();
                                        }
                                        return Ok(());
                                    }
                                };
                            }
                        }
                    };
                }
            }
        }
        Ok(())
    }

    pub async fn run_websocket_client(
        &self,
        token: String,
        user_id: String,
        app: AppHandle,
    ) -> Result<(), String> {
        let initial_url = self.websocket_eventsub_url.clone();
        let client_id = self.client_id.clone();
        let eventsub_endpoint: String = self.eventsub_endpoint.clone();
        let http_client = self.http_client.clone();

        tauri::async_runtime::spawn(async move {
            let mut current_url = initial_url;
            let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
            'connection_loop: loop {
                log::info!("Connecting to Twitch EventSub: {}", current_url);

                match connect_async(&current_url).await {
                    Ok((mut socket, _)) => {
                        log::info!("WebSocket connected.");
                        while let Some(msg_result) = socket.next().await {
                            match msg_result {
                                Ok(Message::Text(text)) => {
                                    let instruction = Self::handle_text_message(
                                        &text,
                                        http_client.clone(),
                                        &token,
                                        &user_id,
                                        &client_id,
                                        &eventsub_endpoint,
                                    )
                                    .await;
                                    match instruction {
                                        WebSocketInstruction::Reconnect(new_url) => {
                                            log::warn!("Twitch requested reconnect. Swapping URL.");
                                            current_url = new_url;
                                            break;
                                        }
                                        WebSocketInstruction::Notification(event_msg) => {
                                            if let MessagePayload::Event(payload) =
                                                event_msg.payload
                                            {
                                                match payload.subscription.r#type  {
                                                SubscriptionType::ChannelPointsCustomRewardRedemptionAdd =>{
                                                    if let Some(_)=payload.event.clone().reward {
                                                    let event_message = EventMessage {
                                                        event: AppEvent::TwitchRewardRedemptionAdd,
                                                        data: payload,
                                                    };

                                                    websocket_broadcaster
                                                        .broadcast_event_message(&event_message)
                                                        .await;
                                                }


                                                },
                                                // SubscriptionType::ChannelSubscribe =>{
                                                //     if let Some(_)=payload.event.clone().reward {
                                                //     let event_message = EventMessage {
                                                //         event: AppEvent::TwitchRewardRedemptionAdd,
                                                //         data: payload,
                                                //     };

                                                //     websocket_broadcaster
                                                //         .broadcast_event_message(&event_message)
                                                //         .await;
                                                // }


                                                // },
                                                _=>{}
                                               }
                                            }
                                        }
                                        WebSocketInstruction::SubscribeError
                                        | WebSocketInstruction::Revocation => {
                                            log::error!(
                                                "Fatal instruction received. Exiting connection loop."
                                            );
                                            break 'connection_loop;
                                        }
                                        WebSocketInstruction::Continue => {}
                                    }
                                }
                                // Ok(Message::Ping(data)) => {
                                //     let _ = socket.send(Message::Pong(data)).await;
                                // }
                                Ok(Message::Close(_)) => {
                                    log::warn!("Twitch closed connection.");
                                    break;
                                }
                                Err(e) => {
                                    log::error!("WebSocket error: {}", e);
                                    break;
                                }
                                _ => {}
                            }
                        }
                    }
                    Err(e) => {
                        log::error!("Failed to connect: {}. Retrying in 5s...", e);
                        tokio::time::sleep(std::time::Duration::from_secs(5)).await;
                    }
                }
            }
        });

        Ok(())
    }

    pub async fn add_custom_rewards(
        &self,
        reqwest_client: State<'_, reqwest::Client>,
        access_token: &str,
        user_id: &str,
        mut settings: TwitchIntegrationSettings,
    ) -> Result<TwitchIntegrationSettings, String> {
        for reward in &mut settings.rewards {
            let twitch_reward_body = AddTwitchRewardBody {
                title: settings.rewards_name.clone(),
                cost: reward.cost,
                background_color: reward.color.clone(),
                is_user_input_required: true,
            };
            let response = reqwest_client
                .post(format!(
                    "{}/channel_points/custom_rewards",
                    self.api_endpoint
                ))
                .header("Authorization", format!("Bearer {}", access_token))
                .header(
                    "Client-Id",
                    std::env::var("TWITCH_CLIENT_ID_MOCK").unwrap_or(self.client_id.clone()),
                )
                .query(&[("broadcaster_id", user_id)])
                .json(&twitch_reward_body)
                .send()
                .await
                .map_err(|e| {
                    log::error!("{}", e.to_string());
                    e.to_string()
                })?;
            if !response.status().is_success() {
                let err_text = response.text().await.map_err(|e| {
                    log::error!("{}", e.to_string());
                    e.to_string()
                })?;
                log::error!("Twitch subscription error response: {}", err_text);
                return Err(err_text);
            }

            let json: serde_json::Value = response.json().await.map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
            let id = json["data"][0]["id"].as_str().unwrap();
            reward.reward_id = Some(id.to_string());
        }
        Ok(settings)
    }

    pub async fn remove_custom_rewards(
        &self,
        reqwest_client: State<'_, reqwest::Client>,
        access_token: &str,
        user_id: &str,
        settings: TwitchIntegrationSettings,
    ) -> Result<(), String> {
        for reward in settings.rewards {
            if let Some(reward_id) = reward.reward_id {
                let response = reqwest_client
                    .delete(format!(
                        "{}/channel_points/custom_rewards",
                        self.api_endpoint
                    ))
                    .header("Authorization", format!("Bearer {}", access_token))
                    .header(
                        "Client-Id",
                        std::env::var("TWITCH_CLIENT_ID_MOCK").unwrap_or(self.client_id.clone()),
                    )
                    .query(&[("broadcaster_id", user_id), ("id", &reward_id)])
                    .send()
                    .await
                    .map_err(|e| {
                        log::error!("{}", e.to_string());
                        e.to_string()
                    })?;
                if !response.status().is_success() {
                    let err_text = response.text().await.map_err(|e| {
                        log::error!("{}", e.to_string());
                        e.to_string()
                    })?;
                    log::error!("Twitch subscription error response: {}", err_text);
                    return Err(err_text);
                }
            }
        }
        Ok(())
    }

    async fn handle_text_message(
        text: &str,
        http_client: reqwest::Client,
        token: &str,
        user_id: &str,
        client_id: &str,
        eventsub_endpoint: &str,
    ) -> WebSocketInstruction {
        let event_msg: EventSubMessage = match serde_json::from_str(text) {
            Ok(m) => m,
            Err(e) => {
                log::error!("Failed to parse message: {}", e);
                return WebSocketInstruction::Continue;
            }
        };

        match event_msg.metadata.message_type.as_str() {
            "session_welcome" => {
                if let MessagePayload::Welcome(payload) = event_msg.payload {
                    let session_id = payload.session.id;
                    log::info!("Session Welcome: ID {}", session_id);

                    if let Err(e) = Self::subscriptions(
                        http_client.clone(),
                        token.to_string(),
                        session_id,
                        user_id.to_string(),
                        client_id.to_string(),
                        eventsub_endpoint.to_string(),
                    )
                    .await
                    {
                        log::error!("Failed to subscribe: {}", e);
                        return WebSocketInstruction::SubscribeError;
                    } else {
                        log::info!("Twitch events subscribed successfully");
                    }
                }
                WebSocketInstruction::Continue
            }
            "session_keepalive" => {
                log::debug!("Keepalive received");
                WebSocketInstruction::Continue
            }
            "notification" => WebSocketInstruction::Notification(event_msg),
            "session_reconnect" => {
                if let MessagePayload::Reconnect(payload) = event_msg.payload {
                    if let Some(new_url) = payload.session.reconnect_url {
                        return WebSocketInstruction::Reconnect(new_url);
                    }
                }
                log::error!("Received reconnect request but no URL found.");
                WebSocketInstruction::Continue
            }
            "revocation" => {
                log::warn!("Subscription revoked.");
                WebSocketInstruction::Revocation
            }
            _ => {
                log::debug!(
                    "Unhandled message type: {}",
                    event_msg.metadata.message_type
                );
                WebSocketInstruction::Continue
            }
        }
    }

    async fn get_user_info(&self, token: String, client_id: String) -> Result<TwitchUser, String> {
        let response = self
            .http_client
            .get("https://api.twitch.tv/helix/users")
            .header("Authorization", format!("Bearer {}", token))
            .header("Client-Id", client_id)
            .send()
            .await
            .unwrap();
        let users: TwitchUsersResponse = response.json().await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
        let user = users.data.first().ok_or("No user data found")?;
        Ok(user.clone())
    }

    async fn validate_token(
        &self,
        token: String,
        auth_endpoint: String,
    ) -> Result<TwitchTokenInfo, TwitchBadResponse> {
        let response = self
            .http_client
            .get(format!("{}/validate", auth_endpoint))
            .header("Authorization", format!("OAuth {}", token))
            .send()
            .await
            .unwrap();
        if !response.status().is_success() {
            let bad_response: TwitchBadResponse = response.json().await.map_err(|e| {
                log::error!("{}", e.to_string());
                TwitchBadResponse {
                    error: None,
                    message: e.to_string(),
                    status: 5000,
                }
            })?;

            return Err(bad_response);
        }
        let token_info: TwitchTokenInfo = response.json().await.map_err(|e| {
            log::error!("{}", e.to_string());
            TwitchBadResponse {
                error: None,
                message: e.to_string(),
                status: 5000,
            }
        })?;
        Ok(token_info.clone())
    }

    async fn subscriptions(
        http_client: reqwest::Client,
        token: String,
        session_id: String,
        user_id: String,
        client_id: String,
        eventsub_endpoint: String,
    ) -> Result<(), String> {
        let response = http_client
            .post(format!("{}/eventsub/subscriptions", eventsub_endpoint))
            .header("Authorization", format!("Bearer {}", token))
            .header("Client-Id", client_id)
            .json(&SubscriptionRequestBody {
                r#type: "channel.subscribe".to_string(),
                version: "1".to_string(),
                condition: SubscriptionCondition {
                    broadcaster_user_id: user_id.clone(),
                    user_id: None,
                },
                transport: SubscriptionTransport {
                    method: "websocket".to_string(),
                    session_id,
                },
            })
            .send()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
        if !response.status().is_success() {
            let err_text = response.text().await.map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
            log::error!("Twitch subscribe subscription error response: {}", err_text);
            return Err(err_text);
        }

        Ok(())
    }
}
