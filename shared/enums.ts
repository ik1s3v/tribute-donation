export enum AlertSeverity {
	error = "error",
	info = "info",
	success = "success",
	warning = "warning",
}
export enum Language {
	en = "en",
	es = "es",
	de = "de",
	zh = "zh",
	fr = "fr",
	hi = "hi",
	ar = "ar",
	pt = "pt",
	ru = "ru",
	ua = "ua",
}

export enum AppEvent {
	Message = "Message",
	SkipAlert = "SkipAlert",
	ReplayAlert = "ReplayAlert",
	AlertPlaying = "AlertPlaying",
	AlertPlayed = "AlertPlayed",
	MediaPlaying = "MediaPlaying",
	SkipPlayingMedia = "SkipPlayingMedia",
	SkipPlayingAlert = "SkipPlayingAlert",
	MediaEnd = "MediaEnd",
	MediaError = "MediaError",
	MediaPaused = "MediaPaused",
	PauseMedia = "PauseMedia",
	MediaPlayed = "MediaPlayed",
	PlayMedia = "PlayMedia",
	SkipMedia = "SkipMedia",
	ReplayMedia = "ReplayMedia",
	Alerts = "Alerts",
	MakeAudioError = "MakeAudioError",
	Settings = "Settings",
	MediaSettings = "MediaSettings",
	AlertConnected = "AlertConnected",
}

export enum ViewType {
	Top = "Top",
	Bottom = "Bottom",
	Left = "Left",
	Right = "Right",
	Overlay = "Overlay",
}
export enum Currency {
	RUB = "RUB",
	EUR = "EUR",
	USD = "USD",
	NONE = "NONE",
}
export enum MediaType {
	Youtube = "Youtube",
	Twitch = "Twitch",
	TikTok = "TikTok",
}
export enum WheelVariant {
	normal = "normal",
	dropout = "dropout",
}
