import { useTranslation } from "react-i18next";
import type { IAucFighterTeam } from "../../../../../../shared/types";

const GameWinner = ({ gameWinner }: { gameWinner: IAucFighterTeam | null }) => {
	const { t } = useTranslation();
	return (
		<div style={{ height: 50 }}>
			{gameWinner && (
				<span style={{ fontSize: 30 }}>
					{t("fighter.winner")} #{gameWinner.id}
				</span>
			)}
		</div>
	);
};
export default GameWinner;
