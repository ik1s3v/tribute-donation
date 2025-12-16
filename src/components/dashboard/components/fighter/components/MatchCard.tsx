import { Button, Card } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppEvent } from "../../../../../../shared/enums";
import useWebSocket from "../../../../../../shared/hooks/useWebSocket";
import type { IAucFighterMatch } from "../../../../../../shared/types";
import TeamTile from "../../auction/components/TeamTile";

const MatchCard = ({
	match,
	matchNumber,
	isAucFighterPlaying,
}: {
	match: IAucFighterMatch;
	matchNumber: number;
	isAucFighterPlaying: boolean;
}) => {
	const websocketService = useWebSocket();
	const { t } = useTranslation();
	return (
		<Card
			sx={(theme) => ({
				border: "2px solid",
				borderRadius: 3,
				width: 600,
				height: 152,
				padding: "10px",
				boxSizing: "border-box",
				borderColor: isAucFighterPlaying
					? theme.palette.primary.main
					: theme.palette.background.default,
			})}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				{!match.is_final ? (
					<span>
						{t("fighter.match")} {matchNumber}
					</span>
				) : (
					<span>{t("fighter.final")}</span>
				)}
				{match.is_ended && (
					<Button
						size="small"
						onClick={() => {
							websocketService.send<IAucFighterMatch>({
								event: AppEvent.StartAucFighterMatch,
								data: match,
							});
						}}
					>
						{t("fighter.rematch")}
					</Button>
				)}
			</div>
			<Card>
				<TeamTile team={match.teams[0]}></TeamTile>
				<TeamTile team={match.teams[1]}></TeamTile>
			</Card>
		</Card>
	);
};
export default MatchCard;
