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
	Donation = "Donation",
	MediaMessage = "MediaMessage",
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
	StartAucFighterMatch = "StartAucFighterMatch",
	AucFighterMatchEnd = "AucFighterMatchEnd",
	PauseAucFighterMatch = "PauseAucFighterMatch",
	ResumeAucFighterMatch = "ResumeAucFighterMatch",
	AucFighterMatchPlaying = "AucFighterMatchPlaying",
	AucFighterMatchPaused = "AucFighterMatchPaused",
	UpdateAucFighterMatch = "UpdateAucFighterMatch",
	CancelAucFighterMatch = "CancelAucFighterMatch",
	AucFighterSettings = "AucFighterSettings",
	TestAlert = "TestAlert",
	Goal = "Goal",
}
export enum StreamElementsEvent {
	Connect = "Connect",
	Authenticated = "Authenticated",
}

export enum ViewType {
	Top = "Top",
	Bottom = "Bottom",
	Left = "Left",
	Right = "Right",
	Overlay = "Overlay",
}
export enum Currency {
	UAH = "UAH",
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
export enum AlertVariationConditions {
	Random = "Random",
	AmountIsGreater = "AmountIsGreater",
	AmountIsEqual = "AmountIsEqual",
}
export enum GoalTextPosition {
	OnTop = "OnTop",
	Inside = "Inside",
	Below = "Below",
	DoNotDisplay = "DoNotDisplay",
}
export enum GoalProgressLayout {
	Percent = "Percent",
	CurrentAmount = "CurrentAmount",
	CurrentAmountPercent = "CurrentAmountPercent",
	CurrentAmountRemainingAmount = "CurrentAmountRemainingAmount",
	CurrentAmountRemainingAmountPercent = "CurrentAmountRemainingAmountPercent",
}
export enum ServiceType {
	TributeBot = "TributeBot",
	Streamelements = "Streamelements",
}

export enum StreamElementsEventType {
	tip = "tip",
}
