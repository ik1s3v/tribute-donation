import { Button } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AutoSizer, List } from "react-virtualized";
import {
	useCancelAucFighterMatchMutation,
	usePauseAucFighterMatchMutation,
	useResumeAucFighterMatchMutation,
	useStartAucFighterMatchMutation,
} from "../../../../../api/aucFighterApi";
import fighterGameFromLots from "../../../../../helpers/fighterGameFromLots";
import type { AppState } from "../../../../../store";
import {
	setAucFighterGame,
	setGameWinner,
	setIsGameStarted,
} from "../../../../../store/slices/aucFighterSlice";
import GameWinner from "./GameWinner";
import MatchCard from "./MatchCard";

const AucFighter = () => {
	const { lots } = useSelector((state: AppState) => state.lotsState);
	const { game, pausedMatchId, playingMatchId, isGameStarted, gameWinner } =
		useSelector((state: AppState) => state.aucFighterState);
	const [startAucFighterMatch] = useStartAucFighterMatchMutation();
	const [pauseAucFighterMatch] = usePauseAucFighterMatchMutation();
	const [resumeAucFighterMatch] = useResumeAucFighterMatchMutation();
	const [cancelAucFighterMatch] = useCancelAucFighterMatchMutation();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const lostWithAmount = lots.filter((lot) => lot.amount);
	const playingMatchIndex = useMemo(() => {
		return game?.matches.findIndex((match) => match.id === playingMatchId);
	}, [game, playingMatchId]);

	return (
		<div
			style={{ display: "flex", placeItems: "center", flexDirection: "column" }}
		>
			<div>
				<Button
					disabled={isGameStarted || lostWithAmount.length < 2}
					onClick={() => {
						const game = fighterGameFromLots(lostWithAmount);
						dispatch(setAucFighterGame(game));
					}}
				>
					{t("fighter.create_game")}
				</Button>
				{game && !isGameStarted && (
					<Button
						onClick={() => {
							dispatch(setIsGameStarted(true));
							startAucFighterMatch({
								data: game.matches[0],
							});
						}}
					>
						{t("fighter.start")}
					</Button>
				)}
				{isGameStarted && (
					<Button
						onClick={() => {
							cancelAucFighterMatch({ id: playingMatchId });
							dispatch(setIsGameStarted(false));
							dispatch(setAucFighterGame(null));
							dispatch(setGameWinner(null));
						}}
					>
						{t("fighter.cancel")}
					</Button>
				)}
				<Button
					disabled={!isGameStarted}
					onClick={() => pauseAucFighterMatch({ id: playingMatchId })}
				>
					{t("fighter.pause")}
				</Button>

				<Button
					disabled={!isGameStarted}
					onClick={() => resumeAucFighterMatch({ id: pausedMatchId })}
				>
					{t("fighter.resume")}
				</Button>
			</div>
			<GameWinner gameWinner={gameWinner} />
			{game && (
				<div
					style={{
						height: `calc(100vh - 325px)`,
						width: "620px",
					}}
				>
					<AutoSizer>
						{({ height, width }) => (
							<List
								width={width}
								height={height}
								rowCount={game.matches.length}
								rowHeight={152}
								scrollToIndex={playingMatchIndex}
								rowRenderer={({ key, index, style }) => {
									return (
										<div key={key} style={style}>
											<MatchCard
												match={game.matches[index]}
												matchNumber={index + 1}
												isAucFighterPlaying={
													game.matches[index].id === playingMatchId
												}
											/>
										</div>
									);
								}}
							/>
						)}
					</AutoSizer>
				</div>
			)}
		</div>
	);
};
export default AucFighter;
