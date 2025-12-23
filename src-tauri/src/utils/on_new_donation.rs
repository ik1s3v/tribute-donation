use chrono::Utc;
use entity::{
    donation::Donation,
    message::{ClientMessage, MessageType},
    service::ServiceType,
    settings::Currency,
};
use tauri::{AppHandle, Manager};
use tokio::sync::Mutex;
use uuid::Uuid;

use crate::{
    enums::AppEvent,
    repositories::{DonationsRepository, GoalsRepository, SettingsRepository},
    services::{
        DatabaseService, EventMessage, ExchangeRatesService, MediaService, TTSService,
        WebSocketBroadcaster,
    },
    utils::{remove_black_listed_words, remove_links},
};

pub async fn on_new_donation(
    service_id: String,
    service: ServiceType,
    user_name: String,
    target_currency: Currency,
    target_amount: f64,
    message: Option<String>,
    app: AppHandle,
) -> Result<(), String> {
    let media_service = app.state::<MediaService>();
    let database_service = app.state::<DatabaseService>();
    let tts_service = app.state::<TTSService>();
    let websocket_broadcaster = app.state::<WebSocketBroadcaster>();
    let exchange_rates_service_mutex = app.state::<Mutex<ExchangeRatesService>>();

    database_service
        .get_donation_by_service_id(service_id.clone())
        .await?;

    let settings = match database_service.get_settings().await? {
        Some(settings) => settings,
        None => {
            return Err("No settings found".to_string());
        }
    };

    let id = Uuid::new_v4().to_string();

    let mut exchange_rates_service = exchange_rates_service_mutex.lock().await;
    let exchanged_amount = exchange_rates_service
        .calculate_amount_by_currency(
            settings.currency.clone(),
            target_currency.clone(),
            target_amount,
        )
        .await;

    let media = media_service
        .get_media(message.clone(), exchanged_amount.clone(), app.clone())
        .await;

    let text = match message {
        Some(text) => {
            let text_without_black_listed_words =
                remove_black_listed_words(text.as_str(), settings.black_list.as_str());

            if settings.remove_links {
                Some(remove_links(text_without_black_listed_words.as_str()))
            } else {
                Some(text_without_black_listed_words)
            }
        }
        None => None,
    };

    let audio = if let Some(text) = text.clone() {
        match tts_service
            .make_audio(&remove_links(&text), id.clone(), app.clone())
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
                    .await;
                None
            }
        }
    } else {
        None
    };

    let created_at = Utc::now().timestamp();
    let message_id = Uuid::new_v4().to_string();

    let client_message = ClientMessage {
        id: message_id.clone(),
        r#type: MessageType::Donation,
        created_at: created_at.clone(),
        follow: None,
        subscription: None,
        donation: Some(Donation {
            id,
            user_name,
            message_id: message_id.clone(),
            amount: target_amount.clone(),
            text,
            audio,
            currency: target_currency.clone(),
            service,
            service_id,
            played: false,
            exchanged_amount: Some(exchanged_amount),
            exchanged_currency: Some(settings.currency.clone()),
            created_at,
            media: media.clone(),
        }),
    };

    database_service
        .update_goal_amount(exchanged_amount as u32)
        .await?;
    match database_service.get_not_ended_goal().await {
        Ok(goal) => {
            let event_message = EventMessage {
                event: AppEvent::Goal,
                data: goal,
            };
            websocket_broadcaster
                .broadcast_event_message(&event_message)
                .await;
        }
        _ => {}
    }

    database_service
        .save_donation_message(client_message.clone())
        .await?;

    let event_message = EventMessage {
        event: AppEvent::Message,
        data: client_message.clone(),
    };

    websocket_broadcaster
        .broadcast_event_message(&event_message)
        .await;

    if !media.is_none() {
        let event_message = EventMessage {
            event: AppEvent::MediaMessage,
            data: client_message,
        };

        websocket_broadcaster
            .broadcast_event_message(&event_message)
            .await;
    }
    Ok(())
}
