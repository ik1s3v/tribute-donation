use serde::Serialize;

#[derive(Serialize, Clone, Debug)]
pub enum AppEvent {
    Message,
    SkipAlert,
    ReplayAlert,
    AlertPlaying,
    AlertPlayed,
    Alerts,
    MakeAudioError,
    Settings,
    AlertConnected,
}
impl AppEvent {
    pub fn as_str(e: AppEvent) -> &'static str {
        match e {
            AppEvent::Message => "Message",
            AppEvent::SkipAlert => "SkipAlert",
            AppEvent::AlertPlaying => "AlertPlaying",
            AppEvent::AlertPlayed => "AlertPlayed",
            AppEvent::MakeAudioError => "MakeAudioError",
            AppEvent::Alerts => "Alerts",
            AppEvent::ReplayAlert => "AlertsSettings",
            AppEvent::AlertConnected => "AlertConnected",
            AppEvent::Settings => "Settings",
        }
    }
}
