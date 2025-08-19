import { IAucFighterMatch } from "../../shared/types";

const updateTeamsPlayers = ({
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
	const teamAPlayers = gameMatch.getTeamA().getPlayers();
	const teamBPlayers = gameMatch.getTeamB().getPlayers();
	if (teamAPlayers.length < 3 && teamA.amount / oldTeamA.amount >= 2) {
		gameMatch
			.getTeamA()
			.addPlayer(
				gameMatch.getTeamA().getPlayer(0).User.getPlayer(),
				true,
				true,
			);
	}
	if (teamBPlayers.length < 3 && teamB.amount / oldTeamB.amount >= 2) {
		gameMatch
			.getTeamB()
			.addPlayer(
				gameMatch.getTeamB().getPlayer(0).User.getPlayer(),
				true,
				true,
			);
	}
};
export default updateTeamsPlayers;
