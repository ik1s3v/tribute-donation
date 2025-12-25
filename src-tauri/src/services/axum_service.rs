use crate::constants::HTTP_WIDGET_PORT;
use crate::enums::AppEvent;
use crate::repositories::{
    AlertsRepository, AucFighterSettingsRepository, GoalsRepository, MediaSettingsRepository,
    MessagesRepository, SettingsRepository,
};
use crate::services::{DatabaseService, EventMessage, WebSocketBroadcaster};
use axum::extract::ws::{Message, WebSocket};
use axum::extract::Query;
use axum::http::HeaderValue;
use axum::Json;
use axum::{
    extract::{State, WebSocketUpgrade},
    response::Response,
    routing::get,
    Router,
};
use entity::goal::GoalType;
use entity::message::ClientMessage;
use futures::{sink::SinkExt, stream::StreamExt};
use reqwest::StatusCode;
use serde::Deserialize;
use std::path::PathBuf;
use tauri::{AppHandle, Manager};
use tokio::sync::mpsc;
use tower_http::cors::CorsLayer;
use tower_http::services::{ServeDir, ServeFile};
type Tx = mpsc::UnboundedSender<Message>;

#[derive(Debug, Deserialize)]
pub struct DonationsQuery {
    pub limit: u64,
    pub offset: u64,
    pub exclude_donations: bool,
    pub exclude_subscriptions: bool,
    pub exclude_follows: bool,
    pub exclude_raids: bool,
}
#[derive(Debug, Deserialize)]
pub struct GoalsQuery {
    pub r#type: GoalType,
}

#[derive(Clone)]
struct AxumState {
    app: AppHandle,
}

#[derive(Clone, Debug)]
pub struct AxumService {
    widget_path: PathBuf,
    static_path: PathBuf,
    auc_fighter_path: PathBuf,
}

impl AxumService {
    pub fn new(widget_path: PathBuf, static_path: PathBuf, auc_fighter_path: PathBuf) -> Self {
        Self {
            widget_path,
            static_path,
            auc_fighter_path,
        }
    }

    pub async fn run(&self, app: AppHandle) -> Result<(), String> {
        let widget_path = self.widget_path.clone();
        let static_path = self.static_path.clone();
        let auc_fighter_path = self.auc_fighter_path.clone();
        let cors =
            CorsLayer::new().allow_origin(HeaderValue::from_static("http://localhost:12553"));

        let axum_router: Router = Router::new()
            .route("/ws", get(AxumService::websocket_handler))
            .route("/api/messages", get(AxumService::get_messages))
            .route("/api/goals", get(AxumService::get_not_ended_goal))
            .nest_service("/static", ServeDir::new(&static_path))
            .nest_service(
                "/auc-fighter",
                ServeDir::new(&auc_fighter_path)
                    .fallback(ServeFile::new(auc_fighter_path.join("default.htm"))),
            )
            .fallback_service(
                ServeDir::new(&widget_path)
                    .fallback(ServeFile::new(widget_path.join("index.html"))),
            )
            .layer(cors)
            .with_state(AxumState { app: app.clone() });

        let listener = match tokio::net::TcpListener::bind(("127.0.0.1", HTTP_WIDGET_PORT)).await {
            Ok(listener) => listener,
            Err(e) => {
                log::error!("{}", e.to_string());
                return Err(e.to_string());
            }
        };

        let server = axum::serve(listener, axum_router);

        tauri::async_runtime::spawn(async move {
            if let Err(e) = server.await {
                log::error!("Server error: {}", e);
            }
        });

        Ok(())
    }

    async fn get_messages(
        Query(params): Query<DonationsQuery>,
        State(state): State<AxumState>,
    ) -> Result<Json<Vec<ClientMessage>>, StatusCode> {
        let database_service = state.app.state::<DatabaseService>();
        let client_messages = database_service
            .get_messages(
                &params.limit,
                &params.offset,
                &params.exclude_donations,
                &params.exclude_subscriptions,
                &params.exclude_follows,
                &params.exclude_raids,
            )
            .await
            .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

        Ok(Json(client_messages))
    }

    async fn get_not_ended_goal(
        Query(params): Query<GoalsQuery>,
        State(state): State<AxumState>,
    ) -> Result<Json<Option<entity::goal::Model>>, StatusCode> {
        let database_service = state.app.state::<DatabaseService>();
        let goal = database_service
            .get_not_ended_goal(params.r#type)
            .await
            .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

        Ok(Json(goal))
    }

    async fn websocket_handler(
        ws: WebSocketUpgrade,
        State(axum_state): State<AxumState>,
    ) -> Response {
        ws.on_upgrade(move |socket| AxumService::handle_socket(socket, axum_state))
    }

    async fn handle_socket(socket: WebSocket, axum_state: AxumState) {
        let (mut sender, mut receiver) = socket.split();

        let (tx, mut rx) = mpsc::unbounded_channel();

        let app_handle = axum_state.app;

        let websocket_broadcaster = app_handle.state::<WebSocketBroadcaster>();

        let connection_id = websocket_broadcaster.add_connection(tx.clone()).await;

        if let Err(e) = AxumService::send_settings(tx, app_handle.clone()).await {
            log::error!("WebSocket send error: {}", e);
            websocket_broadcaster.remove_connection(connection_id).await;
            return;
        }

        let app_handle_clone: AppHandle = app_handle.clone();
        let outgoing_task = tauri::async_runtime::spawn(async move {
            let websocket_broadcaster = app_handle_clone.state::<WebSocketBroadcaster>();

            while let Some(message) = rx.recv().await {
                if let Err(e) = sender.send(message).await {
                    log::error!("WebSocket send error: {}", e);
                    break;
                }
            }
            websocket_broadcaster.remove_connection(connection_id).await;
        });

        while let Some(msg) = receiver.next().await {
            match msg {
                Ok(Message::Text(text)) => websocket_broadcaster.broadcast_text(text).await,

                Ok(Message::Close(_)) => {
                    log::info!("WebSocket connection closed");
                    break;
                }
                Ok(Message::Ping(data)) => {
                    if let Err(e) = websocket_broadcaster
                        .send_to_client(connection_id, Message::Pong(data))
                        .await
                    {
                        log::error!("WebSocket pong error: {}", e);
                        websocket_broadcaster.remove_connection(connection_id).await;
                        break;
                    }
                }
                // Ok(Message::Pong(_)) => {
                // }
                Err(e) => {
                    log::error!("WebSocket error: {}", e);
                    break;
                }
                _ => {}
            }
        }

        outgoing_task.abort();
        websocket_broadcaster.remove_connection(connection_id).await;
        log::info!("WebSocket connection ended");
    }

    async fn send_settings(tx: Tx, app: AppHandle) -> Result<(), String> {
        let database_service = app.state::<DatabaseService>();

        let settings = database_service.get_settings().await?;
        if let Some(settings) = settings {
            let json = serde_json::to_string(&EventMessage {
                event: AppEvent::Settings,
                data: settings,
            })
            .map_err(|e| e.to_string())?;

            tx.send(Message::Text(json.into()))
                .map_err(|e| e.to_string())?;
        }

        let media_settings = database_service.get_media_settings().await?;
        if let Some(media_settings) = media_settings {
            let json = serde_json::to_string(&EventMessage {
                event: AppEvent::MediaSettings,
                data: media_settings,
            })
            .map_err(|e| e.to_string())?;

            tx.send(Message::Text(json.into()))
                .map_err(|e| e.to_string())?;
        }

        let alerts = database_service.get_alerts().await?;
        let json = serde_json::to_string(&EventMessage {
            event: AppEvent::Alerts,
            data: alerts,
        })
        .map_err(|e| e.to_string())?;

        tx.send(Message::Text(json.into()))
            .map_err(|e| e.to_string())?;

        let auc_fighter_settings = database_service.get_auc_fighter_settings().await?;
        if let Some(auc_fighter_settings) = auc_fighter_settings {
            let json = serde_json::to_string(&EventMessage {
                event: AppEvent::AucFighterSettings,
                data: auc_fighter_settings,
            })
            .map_err(|e| e.to_string())?;

            tx.send(Message::Text(json.into()))
                .map_err(|e| e.to_string())?;
        }

        Ok(())
    }
}
