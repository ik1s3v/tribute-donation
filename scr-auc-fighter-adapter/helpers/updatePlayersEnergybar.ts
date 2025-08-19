import { IAucFighterMatch } from "../../shared/types";

const updatePlayersEnergybar = ({
	match,
	oldMatch,
}: {
	match: IAucFighterMatch;
	oldMatch: IAucFighterMatch;
}) => {
	const gameMatch = game_.getMatch();
	if (!gameMatch) return;
	const teamA = match.teams[0];
	const teamB = match.teams[1];
	const oldTeamA = oldMatch.teams[0];
	const oldTeamB = oldMatch.teams[1];
	gameMatch
		.getTeamA()
		.getEnergybar()
		.change(teamA.amount > oldTeamA.amount ? 1000 : -1000);
	gameMatch
		.getTeamB()
		.getEnergybar()
		.change(teamB.amount > oldTeamB.amount ? 1000 : -1000);
};
export default updatePlayersEnergybar;
