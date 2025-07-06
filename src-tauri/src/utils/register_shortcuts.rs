use crate::{
    enums::AppEvent,
    services::{EventMessage, WebSocketService},
};
use tauri::App;

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
                .with_handler(move |app_handle, shortcut, event| {
                    let app_handle = app_handle.clone();
                    if shortcut == &ctrl_f1_shortcut {
                        match event.state() {
                            ShortcutState::Pressed => {
                                tauri::async_runtime::spawn(async move {
                                    WebSocketService::broadcast_event_message(
                                        &EventMessage {
                                            event: AppEvent::SkipPlayingAlert,
                                            data: None::<String>,
                                        },
                                        app_handle.clone(),
                                    )
                                    .await;
                                });
                            }
                            _ => {}
                        }
                    } else if shortcut == &ctrl_f2_shortcut {
                        match event.state() {
                            ShortcutState::Pressed => {
                                tauri::async_runtime::spawn(async move {
                                    WebSocketService::broadcast_event_message(
                                        &EventMessage {
                                            event: AppEvent::SkipPlayingMedia,
                                            data: None::<String>,
                                        },
                                        app_handle.clone(),
                                    )
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
