import { Box, Chip } from "@mui/material";
import { IAucFighterTeam } from "../../../../../../shared/types";

const TeamTile = ({ team }: { team: IAucFighterTeam }) => {
	return (
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
					<div style={{ float: "right" }}>{team.amount}</div>
				</div>
			</div>
		</Box>
	);
};
export default TeamTile;
