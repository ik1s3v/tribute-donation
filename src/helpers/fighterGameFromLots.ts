import type {
	IAucFighterGame,
	IAucFighterMatch,
	ILot,
} from "../../shared/types";
import getRandomFighterCharacter from "./getRandomFighterCharacter";

const fighterGameFromLots = (lots: ILot[]): IAucFighterGame => {
	const matches: IAucFighterMatch[] = [];
	const len = lots.length - 1;
	let prevAmount = 0;
	for (let index = len; index > 0; --index) {
		if (index === len) {
			const teamAAmount = lots[len].amount ?? 0;
			const teamBAmount = lots[len - 1].amount ?? 0;
			matches.push({
				id: crypto.randomUUID(),
				is_final: len === 1,
				is_ended: false,
				teams: [
					{
						id: lots[len].fastId,
						name: lots[len].name,
						color: lots[len].color,
						amount: teamAAmount,
						character: getRandomFighterCharacter(),
						is_winner: false,
					},
					{
						id: lots[len - 1].fastId,
						name: lots[len - 1].name,
						color: lots[len - 1].color,
						amount: teamBAmount,
						character: getRandomFighterCharacter(),
						is_winner: false,
					},
				],
			});
			prevAmount = teamAAmount + teamBAmount;
		} else {
			const teamAAmount = lots[index - 1].amount ?? 0;
			matches.push({
				id: crypto.randomUUID(),
				is_final: index === 1,
				is_ended: false,
				teams: [
					{
						id: lots[index - 1].fastId,
						name: lots[index - 1].name,
						color: lots[index - 1].color,
						amount: teamAAmount,
						character: getRandomFighterCharacter(),
						is_winner: false,
					},
					{
						id: undefined,
						name: "",
						color: "",
						amount: prevAmount,
						is_winner: false,
						character: undefined,
					},
				],
			});
			prevAmount = prevAmount + teamAAmount;
		}
	}
	return {
		id: crypto.randomUUID(),
		matches,
	};
};
export default fighterGameFromLots;
