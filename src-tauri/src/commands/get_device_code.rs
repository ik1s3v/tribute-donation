use tauri::State;

use crate::services::{TwitchDeviceCodeResponse, TwitchService};

#[tauri::command]
pub async fn get_device_code(
    twitch_service: State<'_, TwitchService>,
) -> Result<TwitchDeviceCodeResponse, String> {
    let device_code_response = twitch_service.get_device_code().await?;

    Ok(device_code_response)
}
