use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketBroadcaster},
};
use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Manager};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct AucFighterMatch {
    pub id: String,
    pub teams: Vec<AucFighterTeam>,
    pub is_final: bool,
    pub is_ended: bool,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct AucFighterTeam {
    pub id: u64,
    pub name: String,
    pub color: String,
    pub amount: u64,
    pub character: u64,
    pub is_winner: bool,
}

#[tauri::command]
pub async fn start_auc_fighter_match(app: AppHandle, data: AucFighterMatch) -> Result<(), String> {
    let websocket_broadcaster: tauri::State<'_, WebSocketBroadcaster> =
        app.state::<WebSocketBroadcaster>();
    websocket_broadcaster
        .broadcast_event_message(
            &EventMessage {
                event: AppEvent::StartAucFighterMatch,
                data,
            },
            &app,
        )
        .await
}
