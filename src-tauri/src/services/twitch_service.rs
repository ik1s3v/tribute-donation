use crate::{
    enums::AppEvent,
    repositories::{FollowsRepository,  RaidsRepository, ServicesRepository, SubscriptionsRepository},
    services::{DatabaseService, EventMessage, WebSocketBroadcaster}, utils::goal_handler,
};
use chrono::Utc;
use entity::{
    follow::Follow, message::{ClientMessage, MessageType}, raid, service::{ServiceAuth, ServiceType, TwitchAuth, TwitchIntegrationReward}, subscription::{self}
};
use futures::{lock::Mutex, StreamExt};
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, sync::Arc, time::Duration};
use tauri::{AppHandle, Manager, State};
use tokio_tungstenite::{connect_async, tungstenite::Message};
use uuid::Uuid;

enum WebSocketInstruction {
    SessionWelcome(String),
    Continue,
    Reconnect(String),
    Notification(NotificationMessage),
    Revocation,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct SubscriptionRequestBody {
    pub r#type: String,
    pub version: String,
    pub condition: Condition,
    pub transport: Transport,
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
#[serde(untagged)]
pub enum Condition {
    Follow(FollowCondition),
    ChannelPointsCustomRewardRedemptionAdd(ChannelPointsCustomRewardRedemptionAddCondition),
    Raid(RaidCondition),
    Cheer(CheerCondition),
    Subscription(SubscriptionCondition),
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct SubscriptionCondition {
    pub broadcaster_user_id: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct ChannelPointsCustomRewardRedemptionAddCondition {
    pub broadcaster_user_id: String,
    pub reward_id: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct FollowCondition {
    pub broadcaster_user_id: String,
    pub moderator_user_id: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct RaidCondition {
    pub to_broadcaster_user_id: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct CheerCondition {
    pub broadcaster_user_id: String,
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
pub struct NotificationMessage {
    pub metadata: Metadata,
    pub payload: Payload,
}

#[derive(Debug, Deserialize)]
pub struct Metadata {
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
pub struct Transport {
    pub method: String,
    pub session_id: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(untagged)]

pub enum Event {
    ChannelPointsCustomRewardRedemptionAdd(ChannelPointsCustomRewardRedemptionAddEvent),
    SubscriptionMessage(SubscriptionMessageEvent),
    SubscriptionGift(SubscriptionGiftEvent),
    Cheer(CheerEvent),
    Subscribe(SubscribeEvent),
    Follow(FollowEvent),
    Raid(RaidEvent),
}
#[derive(Debug, Clone, Deserialize, Serialize)]
/// 7 fields
pub struct RaidEvent {
    pub from_broadcaster_user_id: String,
    pub from_broadcaster_user_login: String,
    pub from_broadcaster_user_name: String,
    pub to_broadcaster_user_id: String,
    pub to_broadcaster_user_login: String,
    pub to_broadcaster_user_name: String,
    pub viewers: u32,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
/// 9 fields
pub struct CheerEvent {
    pub is_anonymous: bool,
    pub user_id: Option<String>,    // null if is_anonymous=true
    pub user_login: Option<String>, // null if is_anonymous=true
    pub user_name: Option<String>,  // null if is_anonymous=true
    pub broadcaster_user_id: String,
    pub broadcaster_user_login: String,
    pub broadcaster_user_name: String,
    pub message: String,
    pub bits: u32,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
/// 7 fields
pub struct FollowEvent {
    pub user_id: String,
    pub user_login: String,
    pub user_name: String,
    pub broadcaster_user_id: String,
    pub broadcaster_user_login: String,
    pub broadcaster_user_name: String,
    pub followed_at: String,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
/// 11 fields
pub struct SubscriptionMessageEvent {
    pub user_id: String,
    pub user_login: String,
    pub user_name: String,
    pub broadcaster_user_id: String,
    pub broadcaster_user_login: String,
    pub broadcaster_user_name: String,
    pub tier: String,
    pub message: SubscriptionMessage,
    pub cumulative_months: u32,
    pub streak_months: Option<u32>, // null if not shared
    pub duration_months: u32,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct SubscriptionMessage {
    pub text: String,
    // emotes
}
#[derive(Debug, Clone, Deserialize, Serialize)]
/// 10 fields
pub struct SubscriptionGiftEvent {
    pub user_id: String,
    pub user_login: String,
    pub user_name: String,
    pub broadcaster_user_id: String,
    pub broadcaster_user_login: String,
    pub broadcaster_user_name: String,
    pub tier: String,
    pub total: u32,
    pub cumulative_total: Option<u32>, //null if anonymous or not shared by the user
    pub is_anonymous: bool,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
/// 8 fields
pub struct SubscribeEvent {
    pub user_id: String,
    pub user_login: String,
    pub user_name: String,
    pub broadcaster_user_id: String,
    pub broadcaster_user_login: String,
    pub broadcaster_user_name: String,
    pub tier: String,
    pub is_gift: bool,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
/// 11 fields
pub struct ChannelPointsCustomRewardRedemptionAddEvent {
    pub id: String,
    pub user_id: String,
    pub user_login: String,
    pub user_name: String,
    pub user_input: String,
    pub broadcaster_user_id: String,
    pub broadcaster_user_login: String,
    pub broadcaster_user_name: String,
    pub status: String,
    pub reward: Reward,
    pub redeemed_at: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct EventPayload {
    pub subscription: Subscription,
    pub event: Event,
}
#[derive(Debug, Clone, Deserialize, Serialize)]
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
    #[serde(rename = "channel.raid")]
    ChannelRaid,
    #[serde(other)]
    Unknown,
}
impl SubscriptionType {
    pub fn to_string(t: SubscriptionType) -> String {
        match t {
            SubscriptionType::ChannelPointsCustomRewardRedemptionAdd => {
                "channel.channel_points_custom_reward_redemption.add".to_string()
            }
            SubscriptionType::ChannelSubscribe => "channel.subscribe".to_string(),
            SubscriptionType::ChannelFollow => "channel.follow".to_string(),
            SubscriptionType::ChannelSubscriptionGift => "channel.subscription.gift".to_string(),
            SubscriptionType::ChannelSubscriptionMessage => {
                "channel.subscription.message".to_string()
            }
            SubscriptionType::ChannelCheer => "channel.cheer".to_string(),
            SubscriptionType::ChannelRaid => "channel.raid".to_string(),
            SubscriptionType::Unknown => "unknown".to_string(),
        }
    }
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
pub enum Payload {
    Welcome(SessionPayload),
    Reconnect(SessionPayload),
    Event(EventPayload),
    Generic(serde_json::Value),
}

#[derive(Clone, Debug)]
pub struct TwitchService {
    is_close_connection:Arc<Mutex<bool>>,
    client_id: String,
    scopes: String,
    websocket_eventsub_url: String,
    api_endpoint: String,
    auth_endpoint: String,
    eventsub_endpoint: String,
    http_client: reqwest::Client,
    pub session_id: Arc<Mutex<Option<String>>>,
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
            is_close_connection:Arc::new(Mutex::new(false)),
            client_id: std::env::var("TWITCH_CLIENT_ID").expect("TWITCH_CLIENT_ID not set"),
            scopes: "user:read:email channel:read:subscriptions moderator:read:followers channel:manage:redemptions"
                .to_string(),
            websocket_eventsub_url,
            api_endpoint,
            auth_endpoint,
            eventsub_endpoint,
            http_client: reqwest::Client::builder().timeout(Duration::from_secs(5)).build().expect("http_client build error"),
            session_id:Arc::new(Mutex::new(None))
        }
    }

    pub async fn connect(&self, app: AppHandle) -> Result<(), String> {
        self.run_websocket_client(app).await?;

        Ok(())
    }

    pub async fn check_auth(&self, app: &AppHandle) -> Result<TwitchAuth, String> {
    
        let database_service = app.state::<DatabaseService>();

        let auth = self.get_existing_auth(&database_service).await?;
        if cfg!(debug_assertions) {
            return self.get_token_mock().await;
        }

        self.refresh_and_update_auth(&database_service, &auth).await
    }

    async fn get_existing_auth(
        &self,
        database_service: &DatabaseService,
    ) -> Result<TwitchAuth, String> {
        let service = database_service
            .get_service_with_auth_by_id(ServiceType::Twitch)
            .await?;

        let service = service.ok_or_else(|| "Service not found".to_string())?;

        match service.auth {
            Some(ServiceAuth::Twitch(auth)) => Ok(auth),
            _ => Err("No Twitch authentication found".to_string()),
        }
    }

    async fn refresh_and_update_auth(
        &self,
        database_service: &DatabaseService,
        old_auth: &TwitchAuth,
    ) -> Result<TwitchAuth, String> {
        match self
            .refresh_token(&self.client_id, &old_auth.refresh_token)
            .await
        {
            Ok(response) => {
                let new_auth = TwitchAuth {
                    access_token: response.access_token,
                    refresh_token: response.refresh_token,
                    token_type: response.token_type,
                    expires_in: old_auth.expires_in,
                    user_id: old_auth.user_id.clone(),
                };
                self.set_authorized(database_service, Some(ServiceAuth::Twitch(new_auth.clone())),
                        true,false).await?;
                Ok(new_auth)
            }
            Err(e) => {
                log::warn!("Token refresh failed, clearing auth: {}", e);

                if let Err(update_err) = self
                    .set_authorized(database_service, None, false,true)
                    .await
                {
                    log::error!("Failed to clear invalid auth: {}", update_err);
                }

                Err("Token refresh failed".to_string())
            }
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

    pub async fn get_token(&self, device_code: String) -> Result<TwitchAuth, String> {
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
                &token_response.access_token,
                &"https://id.twitch.tv/oauth2".to_string(),
            )
            .await?;

        if cfg!(debug_assertions) {
            return self.get_token_mock().await;
        }

        let auth = TwitchAuth {
            access_token: token_response.access_token,
            refresh_token: token_response.refresh_token,
            token_type: token_response.token_type,
            expires_in: token_response.expires_in,
            user_id: token_info.user_id,
        };

        Ok(auth)
    }

    async fn get_token_mock(&self) -> Result<TwitchAuth, String> {
        let user_id = std::env::var("TWITCH_USER_ID_MOCK").expect("TWITCH_USER_ID_MOCK not set");
        let client_id =
            std::env::var("TWITCH_CLIENT_ID_MOCK").expect("TWITCH_CLIENT_ID_MOCK not set");
        let client_secret =
            std::env::var("TWITCH_CLIENT_SECRET_MOCK").expect("TWITCH_CLIENT_SECRET_MOCK not set");

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

        Ok(auth)
    }

    pub async fn refresh_token(
        &self,
        client_id: &String,
        refresh_token: &String,
    ) -> Result<TwitchRefreshTokenResponse, String> {
        let mut params = HashMap::new();

        params.insert("grant_type", "refresh_token".to_string());
        params.insert(
            "refresh_token",
            urlencoding::encode(&refresh_token).to_string(),
        );
        params.insert("client_id", client_id.to_owned());

        let response = self
            .http_client
            .post(format!("{}/token", self.auth_endpoint))
            .form(&params)
            .send()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;

        if !response.status().is_success() {
            let bad_response = response.json().await.map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;

            return Err(bad_response);
        }

        let refresh_token_response: TwitchRefreshTokenResponse =
            response.json().await.map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;

        Ok(refresh_token_response)
    }

    async fn validate_token(
        &self,
        token: &String,
        auth_endpoint: &String,
    ) -> Result<TwitchTokenInfo, String> {
        let response = self
            .http_client
            .get(format!("{}/validate", auth_endpoint))
            .header("Authorization", format!("OAuth {}", token))
            .send()
            .await
            .map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;
        if !response.status().is_success() {
            let bad_response = response.json().await.map_err(|e| {
                log::error!("{}", e.to_string());
                e.to_string()
            })?;

            return Err(bad_response);
        }

        let token_info: TwitchTokenInfo = response.json().await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
        Ok(token_info.clone())
    }

    pub async fn run_websocket_client(&self, app: AppHandle) -> Result<(), String> {
        tauri::async_runtime::spawn(async move {
            let twitch_service = app.state::<TwitchService>();
            let mut current_url = twitch_service.websocket_eventsub_url.clone();
            let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
            let database_service = app.state::<DatabaseService>();
            'connection_loop: loop {
                log::info!("Connecting to Twitch EventSub: {}", current_url);
                match connect_async(&current_url).await {
                    Ok((mut socket, _)) => {

                        log::info!("WebSocket connected.");
                        while let Some(msg_result) = socket.next().await {
                            let mut is_close_connection = twitch_service.is_close_connection.lock().await;
                            if *is_close_connection {
                                *is_close_connection=false;
                                break 'connection_loop;
                            }
                            drop(is_close_connection);
                            match msg_result {
                                Ok(Message::Text(text)) => {
                                    let instruction =
                                        twitch_service.handle_text_message(&text).await;
                                    match instruction {
                                        WebSocketInstruction::SessionWelcome(session_id) => {
                                            let mut session_id_guard =
                                                twitch_service.session_id.lock().await;
                                            *session_id_guard = Some(session_id.clone());
                                            drop(session_id_guard);
                                            let auth = twitch_service.check_auth(&app).await;
                                            if let Ok(auth) = auth {
                                                twitch_service
                                                    .create_subscriptions(
                                                        &session_id,
                                                        &auth.access_token,
                                                        &auth.user_id,
                                                    )
                                                    .await;
                                            }
                                            else {
                                                let _=twitch_service.set_authorized(&database_service, None, false, false).await;
                                                break 'connection_loop; 
                                            }
                                        }
                                        WebSocketInstruction::Notification(message) => {
                                            if let Payload::Event(payload) = message.payload {
                                                match payload.subscription.r#type  {
                                                    SubscriptionType::ChannelPointsCustomRewardRedemptionAdd => {
                                                        let event_message = EventMessage {
                                                            event: AppEvent::TwitchRewardRedemptionAdd,
                                                            data: payload,
                                                        };
                                                        websocket_broadcaster
                                                        .broadcast_event_message(&event_message)
                                                        .await;
                                                    }
                                                    SubscriptionType::ChannelFollow => {
                                                        if let Event::Follow(event)=payload.event {
                                                            let created_at = Utc::now().timestamp();
                                                            let message_id=Uuid::new_v4().to_string();
                                                            let client_message=ClientMessage{
                                                                id: message_id.clone(),
                                                                r#type: MessageType::Follow,
                                                                created_at: created_at.clone(),
                                                                donation: None,
                                                                subscription: None,
                                                                raid: None,
                                                                follow:Some(Follow {
                                                                    id: Uuid::new_v4().to_string(),
                                                                    user_id:event.user_id,
                                                                    service_id: payload.subscription.id,
                                                                    user_name: event.user_name,
                                                                    message_id:message_id,
                                                                    played: false,
                                                                    service:ServiceType::Twitch,
                                                                    followed_at: created_at
                                                                }),
                                                            };

                                                            let event_message = EventMessage {
                                                                event: AppEvent::Message,
                                                                data: client_message.clone(),
                                                            };

                                                            websocket_broadcaster
                                                                .broadcast_event_message(&event_message)
                                                                .await;
                                                            let _= database_service.save_follow_message(client_message).await;
                                                            let _= goal_handler(&database_service, &websocket_broadcaster, 1, entity::goal::GoalType::TwitchFollow).await;

                                                        }

                                                    },
                                                    SubscriptionType::ChannelSubscribe =>{
                                                        if let Event::Subscribe(event)=payload.event{
                                                            let created_at = Utc::now().timestamp();
                                                            let message_id=Uuid::new_v4().to_string();
                                                            let client_message=ClientMessage{
                                                                id: message_id.clone(),
                                                                r#type: MessageType::Subscription,
                                                                created_at: created_at.clone(),
                                                                donation: None,
                                                                follow: None,
                                                                raid: None,
                                                                subscription:Some(subscription::Subscription{
                                                                    id: Uuid::new_v4().to_string(),
                                                                    user_id:event.user_id,
                                                                    service_id: payload.subscription.id,
                                                                    user_name: event.user_name,
                                                                    message_id:message_id,
                                                                    played: false,
                                                                    service:ServiceType::Twitch,
                                                                    subscribed_at: created_at,
                                                                    is_gift: event.is_gift,
                                                                    is_anonymous:false,
                                                                    tier: event.tier,
                                                                    cumulative_total:None,
                                                                    total: 1,
                                                                }),
                                                            };
                                                            let event_message = EventMessage {
                                                                event: AppEvent::Message,
                                                                data: client_message.clone(),
                                                            };

                                                            websocket_broadcaster
                                                                .broadcast_event_message(&event_message)
                                                                .await;
                                                              let _= database_service.save_subscribe_message(client_message).await;
                                                              let _= goal_handler(&database_service, &websocket_broadcaster, 1, entity::goal::GoalType::TwitchSubscription).await;
                                                          
                                                        }
                                                    }
                                                    SubscriptionType::ChannelSubscriptionGift =>{
                                                         if let Event::SubscriptionGift(event)=payload.event{

                                                            let created_at = Utc::now().timestamp();
                                                            let message_id=Uuid::new_v4().to_string();
                                                            let client_message=ClientMessage{
                                                                id: message_id.clone(),
                                                                r#type: MessageType::Subscription,
                                                                created_at: created_at.clone(),
                                                                donation: None,
                                                                follow: None,
                                                                raid: None,
                                                                subscription:Some(subscription::Subscription{
                                                                    id: Uuid::new_v4().to_string(),
                                                                    user_id:event.user_id,
                                                                    service_id: payload.subscription.id,
                                                                    user_name: event.user_name,
                                                                    message_id:message_id,
                                                                    played: false,
                                                                    service:ServiceType::Twitch,
                                                                    subscribed_at: created_at,
                                                                    is_gift: true,
                                                                    is_anonymous:event.is_anonymous,
                                                                    tier: event.tier,
                                                                    cumulative_total: event.cumulative_total,
                                                                    total: event.total,
                                                                }),
                                                            };
                                                            let event_message = EventMessage {
                                                                event: AppEvent::Message,
                                                                data: client_message.clone(),
                                                            };

                                                            websocket_broadcaster
                                                                .broadcast_event_message(&event_message)
                                                                .await;
                                                             let _= database_service.save_subscribe_message(client_message).await;
                                                             let _= goal_handler(&database_service, &websocket_broadcaster, event.total, entity::goal::GoalType::TwitchSubscription).await;

                                                        }
                                                    }
                                                    SubscriptionType::ChannelSubscriptionMessage => {
                                                         if let Event::SubscriptionMessage(event)=payload.event{

                                                             let created_at = Utc::now().timestamp();
                                                             let message_id=Uuid::new_v4().to_string();
                                                             let client_message=ClientMessage{
                                                                 id: message_id.clone(),
                                                                 r#type: MessageType::Subscription,
                                                                 created_at: created_at.clone(),
                                                                 donation: None,
                                                                 follow: None,
                                                                 raid: None,
                                                                 subscription:Some(subscription::Subscription{
                                                                     id: Uuid::new_v4().to_string(),
                                                                     user_id:event.user_id,
                                                                     service_id: payload.subscription.id,
                                                                     user_name: event.user_name,
                                                                     message_id:message_id,
                                                                     played: false,
                                                                     service:ServiceType::Twitch,
                                                                     subscribed_at: created_at,
                                                                     is_gift: false,
                                                                     is_anonymous:false,
                                                                     tier: event.tier,
                                                                     cumulative_total: Some(event.cumulative_months),
                                                                     total: 1,
                                                                 }),
                                                             };
                                                             let event_message = EventMessage {
                                                                 event: AppEvent::Message,
                                                                 data: client_message.clone(),
                                                             };

                                                             websocket_broadcaster
                                                                 .broadcast_event_message(&event_message)
                                                                 .await;
                                                            let _= database_service.save_subscribe_message(client_message).await;
                                                            let _= goal_handler(&database_service, &websocket_broadcaster, 1, entity::goal::GoalType::TwitchSubscription).await;
                                                         }

                                                    },
                                                    SubscriptionType::ChannelRaid => {
                                                         if let Event::Raid(event)=payload.event{
                                                              let created_at = Utc::now().timestamp();
                                                             let message_id=Uuid::new_v4().to_string();
                                                             let client_message=ClientMessage{
                                                                 id: message_id.clone(),
                                                                 r#type: MessageType::Raid,
                                                                 created_at: created_at.clone(),
                                                                 donation: None,
                                                                 follow: None,
                                                                 subscription:None,
                                                                 raid: Some(raid::Raid{
                                                                     id: Uuid::new_v4().to_string(),
                                                                     service_id: payload.subscription.id,
                                                                     message_id:message_id,
                                                                     played: false,
                                                                     service:ServiceType::Twitch,
                                                                     viewers: event.viewers,
                                                                     from_broadcaster_user_id: event.from_broadcaster_user_id,
                                                                     from_broadcaster_user_name: event.from_broadcaster_user_name,
                                                                    created_at,
                                                                 }),
                                                             };
                                                             let event_message = EventMessage {
                                                                 event: AppEvent::Message,
                                                                 data: client_message.clone(),
                                                             };

                                                             websocket_broadcaster
                                                                 .broadcast_event_message(&event_message)
                                                                 .await;
                                                            let _= database_service.save_raid_message(client_message).await;
                                                         }
                                                       

                                                    },
                                                     _ => {}
                                                }
                                            }
                                        }

                                        WebSocketInstruction::Revocation => {
                                            log::error!(
                                                "Fatal instruction received. Exiting connection loop."
                                            );
                                            break 'connection_loop;
                                        }
                                        WebSocketInstruction::Reconnect(new_url) => {
                                            log::warn!("Twitch requested reconnect. Swapping URL.");
                                            current_url = new_url;
                                            break;
                                        }
                                        WebSocketInstruction::Continue => {}
                                    }
                                }

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

    pub async fn add_custom_reward(
        &self,
        reqwest_client: State<'_, reqwest::Client>,
        access_token: &String,
        user_id: &String,
        title: &String,
        reward: TwitchIntegrationReward,
        session_id: Option<String>,
    ) -> Result<Option<TwitchIntegrationReward>, String> {
        if let Some(session_id) = session_id {
            let twitch_reward_body = AddTwitchRewardBody {
                title: title.clone(),
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
                .query(&[("broadcaster_id", user_id.clone())])
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
            let reward_id = json["data"][0]["id"].as_str().map(|s| s.to_string());
            if let Some(reward_id) = reward_id {
                let subscription = self
                    .create_subscription(
                        &access_token.to_string(),
                        SubscriptionRequestBody {
                            r#type: SubscriptionType::to_string(
                                SubscriptionType::ChannelPointsCustomRewardRedemptionAdd,
                            ),
                            version: "1".to_string(),
                            condition: Condition::ChannelPointsCustomRewardRedemptionAdd(
                                ChannelPointsCustomRewardRedemptionAddCondition {
                                    broadcaster_user_id: user_id.to_string(),
                                    reward_id: reward_id.clone(),
                                },
                            ),
                            transport: Transport {
                                method: "websocket".to_string(),
                                session_id: session_id.clone(),
                            },
                        },
                    )
                    .await;
                if let Ok(subscription_id) = subscription {
                    return Ok(Some(TwitchIntegrationReward {
                        id: reward.id,
                        cost: reward.cost,
                        color: reward.color,
                        reward_id: Some(reward_id),
                        subscription_id,
                    }));
                }
                return Ok(None);
            }
        }
        Ok(None)
    }

    pub async fn remove_custom_reward(
        &self,
        reqwest_client: State<'_, reqwest::Client>,
        access_token: &String,
        user_id: &String,
        reward: TwitchIntegrationReward,
    ) -> Result<(), String> {
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
            if let Some(subscription_id) = reward.subscription_id {
                self.delete_subscription(access_token, subscription_id)
                    .await?;
            }
        }
        Ok(())
    }

    async fn handle_text_message(&self, text: &str) -> WebSocketInstruction {
        let event_msg: NotificationMessage = match serde_json::from_str(text) {
            Ok(m) => m,
            Err(e) => {
                log::error!("Failed to parse message: {}", e);
                return WebSocketInstruction::Continue;
            }
        };

        match event_msg.metadata.message_type.as_str() {
            "session_welcome" => {
                if let Payload::Welcome(payload) = event_msg.payload {
                    let session_id = payload.session.id;
                    log::info!("Session Welcome: ID {}", session_id);
                    return WebSocketInstruction::SessionWelcome(session_id);
                }
                WebSocketInstruction::Continue
            }
            "session_keepalive" => {
                log::debug!("Keepalive received");
                WebSocketInstruction::Continue
            }
            "notification" => WebSocketInstruction::Notification(event_msg),
            "session_reconnect" => {
                if let Payload::Reconnect(payload) = event_msg.payload {
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

    async fn create_subscriptions(
        &self,
        session_id: &String,
        access_token: &String,
        user_id: &String,
    )  {
        let transport = Transport {
            method: "websocket".to_string(),
            session_id: session_id.clone(),
        };
        let subscribes_types = vec![
            "channel.subscribe",
            "channel.subscription.gift",
            "channel.subscription.message",
        ];
        for subscribe_type in subscribes_types {
          let _=  self.create_subscription(
                &access_token,
                SubscriptionRequestBody {
                    r#type: subscribe_type.to_string(),
                    version: "1".to_string(),
                    condition: Condition::Subscription({
                        SubscriptionCondition {
                            broadcaster_user_id: user_id.clone(),
                        }
                    }),
                    transport: transport.clone(),
                },
            )
            .await;
        }
     let _=  self.create_subscription(
            &access_token,
            SubscriptionRequestBody {
                r#type: "channel.follow".to_string(),
                version: "2".to_string(),
                condition: Condition::Follow({
                    FollowCondition {
                        broadcaster_user_id: user_id.clone(),
                        moderator_user_id: user_id.clone(),
                    }
                }),
                transport: transport.clone(),
            },
        )
        .await;
     let _=   self.create_subscription(
            &access_token,
            SubscriptionRequestBody {
                r#type: "channel.raid".to_string(),
                version: "1".to_string(),
                condition: Condition::Raid({
                    RaidCondition {
                        to_broadcaster_user_id: user_id.clone(),
                    }
                }),
                transport: transport.clone(),
            },
        )
        .await;
      let _=  self.create_subscription(
            &access_token,
            SubscriptionRequestBody {
                r#type: "channel.cheer".to_string(),
                version: "1".to_string(),
                condition: Condition::Cheer({
                    CheerCondition {
                        broadcaster_user_id: user_id.clone(),
                    }
                }),
                transport: transport.clone(),
            },
        )
        .await;

       
    }

    async fn create_subscription(
        &self,
        token: &String,
        body: SubscriptionRequestBody,
    ) -> Result<Option<String>, String> {
        let response = self
            .http_client
            .post(format!("{}/eventsub/subscriptions", self.eventsub_endpoint))
            .header("Authorization", format!("Bearer {}", token))
            .header("Client-Id", self.client_id.clone())
            .json(&body)
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
            log::error!("Twitch create subscription error response: {}", err_text);
            return Err(err_text);
        }

        let json: serde_json::Value = response.json().await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })?;
        let subscription_id = json["data"][0]["id"].as_str().map(|s| s.to_string());

        Ok(subscription_id)
    }
    async fn delete_subscription(
        &self,
        token: &String,
        subscription_id: String,
    ) -> Result<(), String> {
        let response = self
            .http_client
            .delete(format!("{}/eventsub/subscriptions", self.eventsub_endpoint))
            .header("Authorization", format!("Bearer {}", token))
            .header("Client-Id", self.client_id.clone())
            .query(&[("id", subscription_id)])
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
            log::error!("Twitch delete subscription error response: {}", err_text);
            return Err(err_text);
        }

        Ok(())
    }

    pub async fn set_authorized(&self, database_service: &DatabaseService,auth:Option<ServiceAuth>, authorized: bool,is_close_connection:bool) -> Result<(), String> {
        let mut is_close_connection_guard = self.is_close_connection.lock().await;
        *is_close_connection_guard = is_close_connection;
        drop(is_close_connection_guard);
        database_service
            .update_service_auth(ServiceType::Twitch, auth, authorized)
            .await
    }

    pub async fn sign_out(&self, app: &AppHandle) -> Result<(), String> {
        let database_service=app.state::<DatabaseService>();
        self.set_authorized(&database_service, None,false,true).await?;
        Ok(())
    }

}
