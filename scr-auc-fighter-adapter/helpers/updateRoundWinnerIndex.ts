import { IAucFighterMatch } from "../../shared/types";
import getRandomWinnerIndex from "../../shared/utils/getRandomWinnerIndex";
import { store } from "../store";
import { setWinnerIndex } from "../store/slices/mainSlice";

const updateRoundWinnerIndex = (match: IAucFighterMatch) => {
	const teamA = match.teams[0];
	const teamB = match.teams[1];
	const roundWinnerIndex = getRandomWinnerIndex([teamA.amount, teamB.amount]);
	store.dispatch(setWinnerIndex(roundWinnerIndex));
};
export default updateRoundWinnerIndex;
