use super::DatabaseService;
use super::EventMessage;
use crate::enums::AppEvent;
use crate::repositories::AlertsRepository;
use crate::repositories::MediaSettingsRepository;
use crate::repositories::SettingsRepository;
use futures::{SinkExt, StreamExt};
use std::collections::HashMap;
use tauri::AppHandle;
use tauri::Emitter;
use tauri::Manager;
use tokio::net::TcpListener;
use tokio::net::TcpStream;
use tokio::sync::mpsc;
use tokio::sync::Mutex;
use tokio_tungstenite::accept_async;
use tokio_tungstenite::tungstenite::Message;
use uuid::Uuid;

type Tx = mpsc::UnboundedSender<Message>;

#[derive(Clone)]
pub struct WebSocketService {}

impl WebSocketService {
    pub fn new() -> Self {
        Self {}
    }

    pub async fn start(&self, addr: &str, app: AppHandle) -> Result<(), String> {
        let listener: TcpListener = self.bind_listener(addr).await?;
        tauri::async_runtime::spawn(async move {
            loop {
                let (stream, _) = listener.accept().await.unwrap();
                let app = app.clone();
                tauri::async_runtime::spawn(async move {
                    WebSocketService::handle_connection(stream, app).await;
                });
            }
        });
        Ok(())
    }

    async fn handle_connection(stream: TcpStream, app: AppHandle) {
        log::info!("Handling new connection...");
        if let Ok(ws_stream) = accept_async(stream).await {
            let id = Uuid::new_v4();
            let (mut ws_write, mut ws_read) = ws_stream.split();
            let (tx, mut rx) = mpsc::unbounded_channel();

            WebSocketService::initialize_client(id, tx.clone(), app.clone()).await;

            let recv_task = async {
                while let Some(msg) = rx.recv().await {
                    if let Err(e) = ws_write.send(msg).await {
                        log::error!("Error sending to client {}: {}", id, e);
                        break;
                    }
                }
            };
            let send_task = async {
                while let Some(Ok(msg)) = ws_read.next().await {
                    WebSocketService::broadcast(msg, app.clone()).await;
                }
            };
            tokio::select! {
                _ = send_task => {},
                _ = recv_task => {},
            }
            WebSocketService::remove_client(id, app).await;
        }
    }

    async fn initialize_client(id: Uuid, tx: Tx, app: AppHandle) {
        log::info!("New client connected: {}", id);
        WebSocketService::send_alerts_settings(tx.clone(), app.clone()).await;
        WebSocketService::send_settings(tx.clone(), app.clone()).await;
        WebSocketService::send_media_settings(tx.clone(), app.clone()).await;
        let websocket_clients = app.state::<Mutex<HashMap<Uuid, Tx>>>();
        websocket_clients.lock().await.insert(id, tx);
    }
    async fn broadcast(msg: Message, app: AppHandle) {
        app.emit("websocket", msg.clone().into_text().unwrap().to_string())
            .map_err(|e| {
                log::error!("Error sending websocket event: {}", e);
            })
            .unwrap();
        let websocket_clients = app.state::<Mutex<HashMap<Uuid, Tx>>>();

        let clients = websocket_clients.lock().await;
        let senders: Vec<Tx> = clients.values().cloned().collect();
        drop(clients); // Release lock before await points

        for sender in senders {
            if let Err(e) = sender.send(msg.clone()) {
                log::error!("Broadcast error: {}", e);
            }
        }
    }

    async fn send_alerts_settings(tx: Tx, app: AppHandle) {
        let database_service = app.state::<DatabaseService>();
        let alerts = database_service.get_alerts().await.unwrap();
        tx.send(Message::Text(
            (&serde_json::to_string(&EventMessage {
                event: AppEvent::Alerts,
                data: alerts,
            })
            .unwrap())
                .into(),
        ))
        .map_err(|e| {
            log::error!("Error sending alerts settings: {}", e);
        })
        .unwrap();
    }
    async fn send_settings(tx: Tx, app: AppHandle) {
        let database_service = app.state::<DatabaseService>();
        let settings = database_service
            .get_settings()
            .await
            .map_err(|e| {
                log::error!("Get settings error: {}", e);
            })
            .unwrap();
        tx.send(Message::Text(
            (&serde_json::to_string(&EventMessage {
                event: AppEvent::Settings,
                data: settings,
            })
            .unwrap())
                .into(),
        ))
        .map_err(|e| {
            log::error!("Error sending  settings: {}", e);
        })
        .unwrap();
    }

    async fn send_media_settings(tx: Tx, app: AppHandle) {
        let database_service = app.state::<DatabaseService>();
        let media_settings = database_service
            .get_media_settings()
            .await
            .map_err(|e| {
                log::error!("Get media settings error: {}", e);
            })
            .unwrap();
        tx.send(Message::Text(
            (&serde_json::to_string(&EventMessage {
                event: AppEvent::MediaSettings,
                data: media_settings,
            })
            .unwrap())
                .into(),
        ))
        .map_err(|e| {
            log::error!("Error sending media settings: {}", e);
        })
        .unwrap();
    }

    pub async fn broadcast_event_message<T>(message: &EventMessage<T>, app: AppHandle)
    where
        T: serde::Serialize,
    {
        WebSocketService::broadcast(
            Message::Text((&serde_json::to_string(message).unwrap()).into()),
            app,
        )
        .await;
    }
    async fn remove_client(id: Uuid, app: AppHandle) {
        log::info!("Client disconnected: {}", id);
        let websocket_clients = app.state::<Mutex<HashMap<Uuid, Tx>>>();
        websocket_clients.lock().await.remove(&id);
    }

    async fn bind_listener(&self, addr: &str) -> Result<TcpListener, String> {
        TcpListener::bind(addr).await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })
    }
}
