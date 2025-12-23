use axum::extract::ws::{Message, Utf8Bytes};
use std::collections::HashMap;
use tokio::sync::{mpsc, Mutex};
use uuid::Uuid;

use crate::services::EventMessage;

type Tx = mpsc::UnboundedSender<Message>;

pub struct WebSocketBroadcaster {
    websocket_clients: Mutex<HashMap<Uuid, Tx>>,
}

impl WebSocketBroadcaster {
    pub fn new() -> Self {
        Self {
            websocket_clients: Mutex::new(HashMap::new()),
        }
    }

    pub async fn add_connection(&self, tx: Tx) -> Uuid {
        let connection_id = Uuid::new_v4();
        let mut websocket_clients = self.websocket_clients.lock().await;
        websocket_clients.insert(connection_id, tx);
        log::info!("WebSocket connection added: {}", connection_id);
        connection_id
    }

    pub async fn remove_connection(&self, id: Uuid) {
        let mut websocket_clients = self.websocket_clients.lock().await;
        websocket_clients.remove(&id);
        log::info!("WebSocket connection removed: {}", id);
    }

    pub async fn broadcast_text(&self, text: Utf8Bytes) {
        let websocket_clients = self.websocket_clients.lock().await;

        let mut failed_connections = Vec::new();

        for (id, sender) in websocket_clients.iter() {
            if let Err(_) = sender.send(Message::Text(text.clone())) {
                log::error!("Send websocket message failed WebSocket connection: {}", id);
                failed_connections.push(*id);
            }
        }

        drop(websocket_clients);
        if !failed_connections.is_empty() {
            let mut websocket_clients = self.websocket_clients.lock().await;
            for id in failed_connections {
                websocket_clients.remove(&id);
                log::warn!("Removed failed WebSocket connection: {}", id);
            }
        }
    }

    pub async fn broadcast_event_message<T>(&self, message: &EventMessage<T>)
    where
        T: serde::Serialize,
    {
        let text = serde_json::to_string(message).map_err(|e| {
            log::error!("serde error: {}", e.to_string());
        });
        if let Ok(text) = text {
            self.broadcast_text(text.into()).await;
        }
    }

    pub async fn send_to_client(
        &self,
        connection_id: Uuid,
        message: Message,
    ) -> Result<(), String> {
        let websocket_clients = self.websocket_clients.lock().await;

        if let Some(sender) = websocket_clients.get(&connection_id) {
            sender.send(message).map_err(|e| e.to_string())?;
            Ok(())
        } else {
            Err(format!("Client {} not found", connection_id))
        }
    }
}
