use crate::utils::{get_currency_from_string, on_new_donation};
use serde::{Deserialize, Serialize};
use tauri::AppHandle;

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct StreamElementsEvent<T> {
    channel: String,
    provider: String,
    r#type: String,
    #[serde(rename = "createdAt")]
    created_at: String,
    #[serde(rename = "isMock")]
    is_mock: bool,
    data: T,
    #[serde(rename = "updatedAt")]
    updated_at: String,
    _id: String,
    #[serde(rename = "activityId")]
    activity_id: String,
    #[serde(rename = "sessionEventsCount")]
    session_events_count: u64,
}
#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct StreamElementsTip {
    amount: f64,
    avatar: String,
    #[serde(rename = "displayName")]
    display_name: String,
    username: String,
    #[serde(rename = "providerId")]
    provider_id: String,
    gifted: Option<bool>,
    currency: Option<String>,
    message: Option<String>,
}

#[derive(Clone, Debug)]
pub struct StreamElementsService {}

impl StreamElementsService {
    pub fn new() -> Self {
        Self {}
    }

    pub async fn tip_event(
        &self,
        app: AppHandle,
        event: StreamElementsEvent<StreamElementsTip>,
    ) -> Result<(), String> {
        on_new_donation(
            event._id,
            event.data.display_name,
            get_currency_from_string(event.data.currency),
            event.data.amount,
            event.data.message,
            app,
        )
        .await;
        Ok(())
    }
}
