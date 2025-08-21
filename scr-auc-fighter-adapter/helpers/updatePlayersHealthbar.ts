import { IAucFighterMatch } from "../../shared/types";
import calculateHealthDelta from "./calculateHealthDelta";

const updatePlayersHealthbar = ({
	match,
	oldMatch,
}: {
	match: IAucFighterMatch;
	oldMatch?: IAucFighterMatch;
}) => {
	const gameMatch = game_.getMatch();
	if (!gameMatch) return;
	const teamA = match.teams[0];
	const teamB = match.teams[1];

	gameMatch
		.getTeamA()
		.getHealthbar()
		.change(
			calculateHealthDelta({
				amount: teamA.amount,
				match,
				oldMatch,
				oldAmount: oldMatch?.teams[0].amount,
			}),
		);
	gameMatch
		.getTeamB()
		.getHealthbar()
		.change(
			calculateHealthDelta({
				amount: teamB.amount,
				match,
				oldMatch,
				oldAmount: oldMatch?.teams[1].amount,
			}),
		);
};
export default updatePlayersHealthbar;
