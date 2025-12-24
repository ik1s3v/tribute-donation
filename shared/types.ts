import type {
	AlertVariationConditions,
	AppEvent,
	Currency,
	GoalProgressLayout,
	GoalTextPosition,
	MediaType,
	MessageType,
	ServiceType,
	StreamElementsEventType,
	ViewType,
} from "./enums";

export interface IClientMessage {
	id: string;
	type: MessageType;
	donation?: IDonation;
	follow?: IFollow;
	subscription?: ISubscription;
	raid?: IRaid;
	created_at: number;
}
export interface IDonation {
	id: string;
	service_id: string;
	message_id: string;
	amount: number;
	user_name: string;
	currency: Currency;
	text?: string;
	audio?: string;
	service: ServiceType;
	media?: IMedia;
	played: boolean;
	exchanged_amount: number;
	exchanged_currency: Currency;
	created_at: number;
}
export interface IFollow {
	id: string;
	service_id: string;
	message_id: string;
	user_name: string;
	user_id: string;
	service: ServiceType;
	played: boolean;
	followed_at: number;
}
export interface ISubscription {
	id: string;
	service_id: string;
	user_name: string;
	user_id: string;
	message_id: string;
	played: boolean;
	is_gift: boolean;
	is_anonymous: boolean;
	service: ServiceType;
	tier: string;
	cumulative_total: number;
	total: number;
	subscribed_at: number;
}
export interface IRaid {
	id: string;
	service_id: string;
	from_broadcaster_user_name: string;
	from_broadcaster_user_id: string;
	message_id: string;
	played: boolean;
	viewers: number;
	service: ServiceType;
	created_at: number;
}

export interface IPageParm {
	limit: number;
	offset: number;
}

export interface IMessagesFilter {
	exclude_donations: boolean;
	exclude_subscriptions: boolean;
	exclude_follows: boolean;
	exclude_raids: boolean;
}

export interface IEventMessage<T> {
	event: AppEvent;
	data: T;
}
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface ISubscriptions {
	subscribers: ISubscriber[];
	notifySubscribers: <T>(id: string, data: T) => void;
	subscribe: <T>(id: string, callback: EventCallback<T>) => () => void;
}
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
	type: MessageType;
	image: string;
	group_id: string;
	name: string;
	variation_conditions: AlertVariationConditions;
	status: boolean;
	amount: number;
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
	currency: Currency;
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
	min_amount: number;
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
	name: string;
	color: string;
	amount?: number;
	extra?: number;
	dropoutAmount?: number;
	dropoutOptionSize?: number;
	normalOptionSize?: number;
	winChancePercent?: string;
}

export interface IAucFighterGame {
	id: string;
	matches: IAucFighterMatch[];
}

export interface IAucFighterMatch {
	id: string;
	teams: IAucFighterTeam[];
	is_final: boolean;
	is_ended: boolean;
}

export interface IAucFighterTeam {
	id?: number;
	name?: string;
	color?: string;
	character?: number;
	is_winner: boolean;
	amount: number;
}

export interface IAucFighterMatchWinner {
	matchId: string;
	winnerIndex: number;
}

export interface IAucFighterSettings {
	id: number;
	round_duration: number;
	is_add_players: boolean;
}
export interface IImportedLot {
	fastId: number;
	id: string;
	extra: number | null;
	amount: number | null;
	name: string;
	investors: [];
}
export interface IWebsocketService extends ISubscriptions {
	connect: () => void;
	disconnect: () => void;
	send: <T>(message: IEventMessage<T>) => void;
}

export interface IGoal {
	id: string;
	title: string;
	amount_raise: number;
	start_raising: number;
	current_amount: number;
	end_date: number;
	start_date: number;
	ended: boolean;
	bar_height: number;
	rounding_radius: number;
	bar_stroke_thickness: number;
	background_bar_color: string;
	progress_bar_color: string;
	goal_title_type: GoalTextPosition;
	goal_progress_bar: GoalTextPosition;
	remaining_time: GoalTextPosition;
	progress_bar_layout: GoalProgressLayout;
	goal_amount_limits: boolean;
	widget_background: boolean;
	widget_background_color: string;
	title_style: ITextStyle;
	progress_style: ITextStyle;
	limits_style: ITextStyle;
}
export interface IService<T = undefined, S = undefined> {
	id: ServiceType;
	authorized: boolean;
	auth: T;
	settings: S;
}
export interface IStreamElementsAuth {
	jwt_token: string;
}
export interface IStreamElementsEvent<T> {
	channel: string;
	provider: string;
	type: StreamElementsEventType;
	createdAt: string;
	isMock: boolean;
	data: T;
	updatedAt: string;
	_id: string;
	activityId: string;
	sessionEventsCount: number;
}

export interface IStreamElementsTip {
	amount: number;
	avatar: string;
	displayName: string;
	username: string;
	providerId: string;
	gifted: boolean;
	currency?: string;
	message?: string;
}
export interface IStreamElementsAuthenticated {
	clientId: string;
	channelId: string;
	project: string;
	message: string;
}
export interface ITwitchDeviceCodeResponse {
	device_code: string;
	expires_in: number;
	interval: number;
	user_code: string;
	verification_uri: string;
}
export interface ITwitchReward {
	title: string;
	cost: number;
}
export interface ITwitchEventPayload<T> {
	subscription: ITwitchSubscription;
	event: T;
}
export interface ITwitchRedemptionEvent {
	user_id: string;
	id: string;
	user_login: string;
	user_name: string;
	user_input: string;
	status: string;
	broadcaster_user_id: string;
	broadcaster_user_login: string;
	broadcaster_user_name: string;
	followed_at: string;
	redeemed_at: string;
	reward: ITwitchReward;
}
export interface ITwitchReward {
	id: string;
	title: string;
	prompt: string;
	cost: number;
}
export interface ITwitchSubscription {
	id: string;
	status: string;
	type: string;
	version: string;
	cost: number;
	condition: { broadcaster_user_id: string; user_id?: string };
	transport: { method: string; session_id: string };
	created_at: string;
}

export interface ITwitchIntegrationSettings {
	points_currency_ratio: number;
	rewards_name: string;
	rewards: ITwitchIntegrationReward[];
}

export interface ITwitchIntegrationReward {
	id: string;
	reward_id: string | null;
	subscription_id: string | null;
	cost: number;
	color: string;
}

export type MatchId = string;
export type MessageId = string;
export type DonationId = string;
export type AlertId = string;
