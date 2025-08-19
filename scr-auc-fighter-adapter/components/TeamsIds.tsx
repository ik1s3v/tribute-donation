import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";

const style: CSSProperties = {
	fontSize: 41,
	color: "red",
	fontStyle: "italic",
	fontWeight: "bold",
	position: "absolute",
	whiteSpace: "nowrap",
	overflow: "hidden",
};

const TeamsIds = () => {
	const { isNewRoundStart, match } = useSelector(
		(state: AppState) => state.mainState,
	);

	return (
		<>
			{match && isNewRoundStart && (
				<>
					<div style={{ ...style, transform: "translate(170px, 0px)" }}>
						#{match.teams[0].id}
					</div>
					<div style={{ ...style, transform: "translate(540px, 0px)" }}>
						#{match.teams[1].id}
					</div>
				</>
			)}
		</>
	);
};
export default TeamsIds;
