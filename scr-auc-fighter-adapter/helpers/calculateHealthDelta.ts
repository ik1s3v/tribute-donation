import { IAucFighterMatch } from "../../shared/types";

const calculateHealthDelta = ({
	amount,
	match,
	oldAmount,
	oldMatch,
}: {
	amount: number;
	match: IAucFighterMatch;
	oldMatch?: IAucFighterMatch;
	oldAmount?: number;
}) => {
	const winChancePercent =
		amount / (match.teams[0].amount + match.teams[1].amount);
	const delta = HEALTHBAR.MAX - HEALTHBAR.MAX * winChancePercent;
	if (oldAmount && oldMatch) {
		const oldWinChancePercent =
			oldAmount / (oldMatch.teams[0].amount + oldMatch.teams[1].amount);
		const oldDelta = HEALTHBAR.MAX - HEALTHBAR.MAX * oldWinChancePercent;
		const diff = delta - oldDelta;

		return diff;
	}
	return delta;
};
export default calculateHealthDelta;
