import type { AppEvent, Currency, MediaType, ViewType } from "./enums";

export interface IMessage {
	id: string;
	telegram_message_id: string;
	amount: number;
	user_name: string;
	text?: string;
	audio?: string;
	media?: IMedia;
	played: boolean;
	currency: Currency;
	created_at: number;
}

export interface IPageParm {
	limit: number;
	offset: number;
}

export interface IEventMessage<T> {
	event: AppEvent;
	data: T;
}
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface ISubscriber<T = any> {
	id: string;
	callback: EventCallback<T>;
}
export type EventCallback<T> = (data: T) => void;

export interface IAlert {
	id: string;
	audio: string;
	audio_volume: number;
	view_type: ViewType;
	image: string;
	group_id: string;
	name: string;
	title_style: ITextStyle;
	message_style: ITextStyle;
}
export interface ITextStyle {
	font_size: number;
	text_color: string;
	bold: boolean;
	italics: boolean;
	underline: boolean;
	letter_spacing: number;
	word_spacing: number;
}
export interface ISettings {
	id: number;
	moderation_duration: number;
	tts_volume: number;
	alert_paused: boolean;
	remove_links: boolean;
	black_list: string;
	language: string;
}

export interface IAuctionSettings {
	id: number;
	leader_change_adding_time: number;
	new_lot_adding_time: number;
	new_donation_adding_time: number;
	timer_adding_time: number;
	is_greater_timer_adding_time: boolean;
	is_show_odds: boolean;
	is_show_total_sum: boolean;
	is_new_lot_adding_time: boolean;
	is_leader_change_adding_time: boolean;
	is_new_donation_adding_time: boolean;
}

export interface IMaptionSettings {
	id: number;
	price_for_meter: string;
	latitude: string;
	longitude: string;
	new_donation_adding_time: number;
	timer_adding_time: number;
	is_greater_timer_adding_time: boolean;
	is_new_donation_adding_time: boolean;
}

export interface IAlertsGroup {
	group_id: string;
	items: IAlert[];
}

export interface IMediaSettings {
	youtube: IMediaPlatformSettings;
	twitch: IMediaPlatformSettings;
	tiktok: IMediaPlatformSettings;
}
export interface IMediaPlatformSettings {
	enabled: boolean;
	min_amount_eur: number;
	min_amount_rub: number;
	video_volume: number;
	min_views: number;
}
export interface IMedia {
	url: string;
	media_type: MediaType;
	expires?: number;
	temporary_src?: string;
}
export interface ILot {
	fastId: number;
	name?: string;
	color: string;
	amount?: number;
	extra?: number;
	eliminationAmount?: number;
	eliminationOptionSize?: number;
	normalOptionSize?: number;
	winChancePercent?: string;
}
