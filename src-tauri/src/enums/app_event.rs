use serde::Serialize;

#[derive(Serialize, Clone, Debug)]
pub enum AppEvent {
    Message,
    SkipAlert,
    SkipPlayingAlert,
    SkipPlayingMedia,
    ReplayAlert,
    AlertPlaying,
    AlertPlayed,
    MediaPlaying,
    MediaPaused,
    PauseMedia,
    MediaPlayed,
    MediaEnd,
    PlayMedia,
    SkipMedia,
    ReplayMedia,
    Alerts,
    MakeAudioError,
    Settings,
    MediaSettings,
    AlertConnected,
}
impl AppEvent {
    pub fn as_str(e: AppEvent) -> &'static str {
        match e {
            AppEvent::Message => "Message",
            AppEvent::SkipAlert => "SkipAlert",
            AppEvent::SkipPlayingAlert => "SkipPlayingAlert",
            AppEvent::SkipMedia => "SkipMedia",
            AppEvent::SkipPlayingMedia => "SkipPlayingMedia",
            AppEvent::AlertPlaying => "AlertPlaying",
            AppEvent::MediaPlaying => "MediaPlaying",
            AppEvent::MediaPaused => "MediaPaused",
            AppEvent::PauseMedia => "PauseMedia",
            AppEvent::MediaEnd => "MediaEnd",
            AppEvent::ReplayMedia => "ReplayMedia",
            AppEvent::PlayMedia => "PlayMedia",
            AppEvent::MediaPlayed => "MediaPlayed",
            AppEvent::AlertPlayed => "AlertPlayed",
            AppEvent::MakeAudioError => "MakeAudioError",
            AppEvent::Alerts => "Alerts",
            AppEvent::ReplayAlert => "AlertsSettings",
            AppEvent::AlertConnected => "AlertConnected",
            AppEvent::Settings => "Settings",
            AppEvent::MediaSettings => "MediaSettings",
        }
    }
}
