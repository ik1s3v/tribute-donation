use std::sync::Arc;

use tauri::{App, Manager};

use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};

pub fn register_shortcuts(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    #[cfg(desktop)]
    {
        use tauri_plugin_global_shortcut::{
            Code, GlobalShortcutExt, Modifiers, Shortcut, ShortcutState,
        };

        let ctrl_f1_shortcut = Shortcut::new(Some(Modifiers::CONTROL), Code::F1);
        let ctrl_f2_shortcut = Shortcut::new(Some(Modifiers::CONTROL), Code::F2);
        app.handle().plugin(
            tauri_plugin_global_shortcut::Builder::new()
                .with_handler(move |_app, shortcut, event| {
                    let websocket_service = Arc::clone(&_app.state::<Arc<WebSocketService>>());
                    if shortcut == &ctrl_f1_shortcut {
                        match event.state() {
                            ShortcutState::Pressed => {
                                tauri::async_runtime::spawn(async move {
                                    websocket_service
                                        .broadcast_event_message(&EventMessage {
                                            event: AppEvent::SkipPlayingAlert,
                                            data: None::<String>,
                                        })
                                        .await;
                                });
                            }
                            _ => {}
                        }
                    } else if shortcut == &ctrl_f2_shortcut {
                        match event.state() {
                            ShortcutState::Pressed => {
                                tauri::async_runtime::spawn(async move {
                                    websocket_service
                                        .broadcast_event_message(&EventMessage {
                                            event: AppEvent::SkipPlayingMedia,
                                            data: None::<String>,
                                        })
                                        .await;
                                });
                            }
                            _ => {}
                        }
                    }
                })
                .build(),
        )?;

        app.global_shortcut()
            .register(ctrl_f1_shortcut)
            .map_err(|e| {
                log::error!("{}", e.to_string());
            })
            .unwrap();
        app.global_shortcut()
            .register(ctrl_f2_shortcut)
            .map_err(|e| {
                log::error!("{}", e.to_string());
            })
            .unwrap();
        Ok(())
    }
}
