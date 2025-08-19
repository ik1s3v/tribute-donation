import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";

const style: CSSProperties = {
	overflow: "hidden",
	whiteSpace: "nowrap",
	width: "90%",
	textAlign: "center",
};

const Announcer = () => {
	const { isShowAnnouncer, match } = useSelector(
		(state: AppState) => state.mainState,
	);
	return (
		<>
			{isShowAnnouncer && match && (
				<div
					style={{
						fontSize: 43,
						color: "red",
						fontWeight: "bold",
						fontStyle: "italic",
						display: "grid",
						placeItems: "center",
					}}
				>
					<div style={style}>
						#{match.teams[0].id} {match.teams[0].name}
					</div>
					<span> VS </span>
					<div style={style}>
						#{match.teams[1].id} {match.teams[1].name}
					</div>
				</div>
			)}
		</>
	);
};
export default Announcer;
