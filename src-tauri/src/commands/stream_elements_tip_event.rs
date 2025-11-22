use tauri::{AppHandle, State};

use crate::services::{StreamElementsEvent, StreamElementsService, StreamElementsTip};

#[tauri::command]
pub async fn stream_elements_tip_event(
    app: AppHandle,
    stream_elements_service: State<'_, StreamElementsService>,
    event: StreamElementsEvent<StreamElementsTip>,
) -> Result<(), String> {
    stream_elements_service
        .tip_event(app.clone(), event)
        .await?;
    Ok(())
}
