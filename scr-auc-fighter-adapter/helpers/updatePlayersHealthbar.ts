import { IAucFighterMatch } from "../../shared/types";
import calculateHealthDelta from "./calculateHealthDelta";

const updatePlayersHealthbar = ({
	match,
	oldMatch,
}: {
	match: IAucFighterMatch;
	oldMatch?: IAucFighterMatch;
}) => {
	const teamA = match.teams[0];
	const teamB = match.teams[1];

	game_
		.getMatch()
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
	game_
		.getMatch()
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
