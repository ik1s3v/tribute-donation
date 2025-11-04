import type { CSSProperties } from "react";
import { useSelector } from "react-redux";
import type { AppState } from "../store";

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
						width: "100%",
						height: "100%",
						position: "absolute",
						fontSize: 43,
						color: "red",
						fontWeight: "bold",
						fontStyle: "italic",
						display: "flex",
						placeItems: "center",
						placeContent: "center",
						flexDirection: "column",
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
