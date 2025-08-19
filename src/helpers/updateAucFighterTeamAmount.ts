import { IMessage } from "../../shared/types";
import { aucFighterApi } from "../api/aucFighterApi";
import { AppState, store } from "../store";
import { updateMatches } from "../store/slices/aucFighterSlice";

const updateAucFighterTeamAmount = (message: IMessage) => {
	const state = store.getState() as AppState;
	const ids = message.text?.split("#");

	const { game, playingMatchId } = state.aucFighterState;
	if (game && ids) {
		let isFoundTeam = false;
		const updatedMatches = game.matches.map((match) => {
			if (isFoundTeam) {
				const teamB = match.teams[1];
				const updatedMatch = {
					...match,
					teams: [
						match.teams[0],
						{
							...teamB,
							amount: teamB.amount + message.amount,
						},
					],
				};
				return updatedMatch;
			}
			for (let teamIndex = 0; teamIndex < match.teams.length; teamIndex++) {
				const team = match.teams[teamIndex];
				if (team.id && team.id === Number(ids[1])) {
					isFoundTeam = true;
					const updatedTeam = {
						...team,
						amount: team.amount + message.amount,
					};

					const updatedTeams = [...match.teams];
					updatedTeams[teamIndex] = updatedTeam;

					const updatedMatch = {
						...match,
						teams: updatedTeams,
					};

					return updatedMatch;
				}
			}

			return match;
		});

		store.dispatch(updateMatches(updatedMatches));
		if (isFoundTeam) {
			const state = store.getState() as AppState;
			const { game } = state.aucFighterState;

			const updatedMatch = game?.matches.find(
				(match) => match.id === playingMatchId,
			);
			if (updatedMatch) {
				store.dispatch(
					aucFighterApi.endpoints.updateAucFighterMatch.initiate({
						data: updatedMatch,
					}),
				);
			}
		}
	}
};

export default updateAucFighterTeamAmount;
