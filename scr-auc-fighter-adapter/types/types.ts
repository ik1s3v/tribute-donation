export interface Game {
	pause: () => void;
	resume: () => void;
	onMatchEnd: () => void;
	getMatch: () => Match | undefined;
	end: () => Match;
	startMatch: (
		matchState: number,
		teamAIndexes: number[],
		teamBIndexes: number[],
		stage: string,
		callback: () => void,
	) => void;
}

export interface Announcer {
	onNewRoundAnnounced: () => void;
}

export interface Match {
	getTeamB: () => Team;
	getTeamA: () => Team;
}
export interface Team {
	getHealthbar: () => HealthBar;
	getPlayers: () => Player[];
	getEnergybar: () => EnergyBar;
	getPlayer: (value: number) => Player;
	addPlayer: (player: Player, doSetup: boolean, isAi: boolean) => EnergyBar;
}

export interface HealthBar {
	change: (delta: number) => number;
}
export interface User {
	getPlayer: () => Player;
}
export interface EnergyBar {
	change: (delta: number) => void;
}
export interface HitDetails {
	PlayerID: string;
}
export interface Ai {
	release: () => void;
}
export interface Player {
	Id: string;
	User: User;
	Ai: Ai;
	enableAI: () => void;
}
