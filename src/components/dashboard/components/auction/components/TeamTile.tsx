import { Box, Chip } from "@mui/material";
import type { IAucFighterTeam } from "../../../../../../shared/types";
import getCurrencySymbol from "../../../../../../shared/utils/getCurrencySymbol";
import { useGetSettingsQuery } from "../../../../../api/settingsApi";

const TeamTile = ({ team }: { team: IAucFighterTeam }) => {
	const { data: settings } = useGetSettingsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});

	return (
		<>
			{settings && (
				<Box
					sx={{
						display: "grid",
						gridAutoFlow: "column",
						alignItems: "center",
						padding: "10px",
						background: team.color,
						gridTemplateColumns: "60px auto 100px",
					}}
				>
					<div>
						{team.id && (
							<Chip
								sx={{
									backgroundColor: (theme) =>
										team.is_winner ? "red" : theme.palette.primary.main,
								}}
								label={`#${team.id}`}
							/>
						)}
					</div>
					<div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
						{team.name}
					</div>
					<div>
						<div>
							<div style={{ float: "right" }}>
								{team.amount.toFixed(2)} {getCurrencySymbol(settings.currency)}
							</div>
						</div>
					</div>
				</Box>
			)}
		</>
	);
};
export default TeamTile;
