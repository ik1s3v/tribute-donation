use serde::Serialize;

#[derive(Serialize, Clone, Debug)]
pub enum AlertEvent {
    SkipAlert,
    ReplayAlert,
    AlertPlaying,
    AlertPlayed,
    AlertConnected,
}
impl AlertEvent {
    pub fn as_str(e: AlertEvent) -> &'static str {
        match e {
            AlertEvent::SkipAlert => "SkipAlert",
            AlertEvent::AlertPlaying => "AlertPlaying",
            AlertEvent::AlertPlayed => "AlertPlayed",
            AlertEvent::ReplayAlert => "AlertsSettings",
            AlertEvent::AlertConnected => "AlertConnected",
        }
    }
}
