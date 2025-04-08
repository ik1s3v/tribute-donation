use futures::{SinkExt, StreamExt};
use std::collections::HashMap;
use std::sync::Arc;
use tauri::AppHandle;
use tauri::Emitter;
use tokio::net::TcpListener;
use tokio::net::TcpStream;
use tokio::sync::mpsc;
use tokio::sync::Mutex;
use tokio_tungstenite::accept_async;
use tokio_tungstenite::tungstenite::Message;
use uuid::Uuid;

use crate::enums::AppEvent;
use crate::repositories::AlertsRepository;
use crate::repositories::MediaSettingsRepository;
use crate::repositories::SettingsRepository;

use super::DatabaseService;
use super::EventMessage;

type Tx = mpsc::UnboundedSender<Message>;

#[derive(Clone)]
pub struct WebSocketService {
    clients: Arc<Mutex<HashMap<Uuid, Tx>>>,
    database_service: Arc<DatabaseService>,
    app: Arc<AppHandle>,
}

impl WebSocketService {
    pub fn new(database_service: Arc<DatabaseService>, app: Arc<AppHandle>) -> Self {
        Self {
            clients: Arc::new(Mutex::new(HashMap::new())),
            database_service,
            app,
        }
    }

    pub async fn start(&self, addr: &str) -> Result<(), String> {
        let listener: TcpListener = self.bind_listener(addr).await?;
        let websocket_service = Arc::new(self.clone());
        tauri::async_runtime::spawn(async move {
            loop {
                let (stream, _) = listener.accept().await.unwrap();
                let websocket_service = Arc::clone(&websocket_service);

                tauri::async_runtime::spawn(async move {
                    websocket_service.handle_connection(stream).await;
                });
            }
        });
        Ok(())
    }

    async fn handle_connection(&self, stream: TcpStream) {
        log::info!("Handling new connection...");
        if let Ok(ws_stream) = accept_async(stream).await {
            let id = Uuid::new_v4();
            let (mut ws_write, mut ws_read) = ws_stream.split();
            let (tx, mut rx) = mpsc::unbounded_channel();

            let server = self.clone();
            self.initialize_client(id, tx.clone()).await;

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
                    server.broadcast(msg).await;
                }
            };
            tokio::select! {
                _ = send_task => {},
                _ = recv_task => {},
            }
            server.remove_client(id).await;
        }
    }
    async fn initialize_client(&self, id: Uuid, tx: Tx) {
        log::info!("New client connected: {}", id);
        self.send_alerts_settings(tx.clone()).await;
        self.send_settings(tx.clone()).await;
        self.send_media_settings(tx.clone()).await;
        self.clients.lock().await.insert(id, tx);
    }
    async fn broadcast(&self, msg: Message) {
        self.app
            .emit("websocket", msg.clone().into_text().unwrap().to_string())
            .map_err(|e| {
                log::error!("Error sending websocket event: {}", e);
            })
            .unwrap();
        let clients = self.clients.lock().await;
        let senders: Vec<Tx> = clients.values().cloned().collect();
        drop(clients); // Release lock before await points

        for sender in senders {
            if let Err(e) = sender.send(msg.clone()) {
                log::error!("Broadcast error: {}", e);
            }
        }
    }

    async fn send_alerts_settings(&self, tx: Tx) {
        let alerts = self.database_service.get_alerts().await.unwrap();
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
    async fn send_settings(&self, tx: Tx) {
        let settings = self
            .database_service
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

    async fn send_media_settings(&self, tx: Tx) {
        let media_settings = self
            .database_service
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

    pub async fn broadcast_event_message<T>(&self, message: &EventMessage<T>)
    where
        T: serde::Serialize,
    {
        self.broadcast(Message::Text(
            (&serde_json::to_string(message).unwrap()).into(),
        ))
        .await;
    }
    async fn remove_client(&self, id: Uuid) {
        log::info!("Client disconnected: {}", id);
        self.clients.lock().await.remove(&id);
    }

    async fn bind_listener(&self, addr: &str) -> Result<TcpListener, String> {
        TcpListener::bind(addr).await.map_err(|e| {
            log::error!("{}", e.to_string());
            e.to_string()
        })
    }
}
