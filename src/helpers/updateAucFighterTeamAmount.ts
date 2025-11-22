import { AppEvent } from "../../shared/enums";
import { IClientDonation } from "../../shared/types";
import { WebSocketService } from "../services/websocketService";
import { AppState, store } from "../store";
import { updateMatches } from "../store/slices/aucFighterSlice";

const updateAucFighterTeamAmount = (
	donation: IClientDonation,
	websocketService: WebSocketService,
) => {
	const state = store.getState() as AppState;
	const ids = donation.text?.split("#");

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
							amount: teamB.amount + donation.amount,
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
						amount: team.amount + donation.amount,
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
				websocketService.send({
					event: AppEvent.UpdateAucFighterMatch,
					data: updatedMatch,
				});
			}
		}
	}
};

export default updateAucFighterTeamAmount;
