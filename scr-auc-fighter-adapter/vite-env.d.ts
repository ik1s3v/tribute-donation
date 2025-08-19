/// <reference types="vite/client" />

import type { Announcer, Game, HitDetails } from "./types/types";

declare global {
	function startUpGame(): Game;
	function $$init(): void;
	let __noDamage: boolean;
	let user1_: any;
	let user2_: any;
	let user3_: any;
	const game_: Game;
	const announcer_: Announcer;
	class HitSystem {
		register(details: HitDetails);
	}
	const stages_: {
		readonly ryu: string;
		readonly ken: string;
		readonly guy: string;
		readonly chunli: string;
		readonly dramatic_battle: string;
		readonly dramatic_battle: string;
		readonly mbison: string;
		readonly akuma: string;
		readonly sodom: string;
		readonly sagat: string;
	};
	const CHARACTERS: {
		readonly RYU: 0;
		readonly KEN: 3;
		readonly SAGAT: 10;
		readonly MBISON: 14;
		readonly AKUMA: 13;
	};

	const HEALTHBAR: {
		readonly LIFE_OFFSETX: -292;
		readonly DAMAGE_OFFSETX: -288;
		readonly ANIMATION_RATE: 2;
		readonly MAX: 288;
	};
}
