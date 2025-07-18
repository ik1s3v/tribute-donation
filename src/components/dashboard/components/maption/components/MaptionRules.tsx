import { useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { useTranslation } from "react-i18next";

const MaptionRules = () => {
	const { t } = useTranslation();
	const { currentPosition } = useSelector(
		(state: AppState) => state.maptionState,
	);
	return (
		<div
			style={{
				display: "grid",
				placeContent: "center",
				left: 0,
				padding: 10,
				width: 200,
				zIndex: 444,
				position: "absolute",

				background: "rgba(0, 0, 0, 0.15)",
				backdropFilter: "blur(10px)",
				borderRadius: 20,
				border: "1px solid hsla(0, 0%, 100%, 0.18)",
				boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
				overflow: "hidden",
			}}
		>
			<div style={{ color: "green" }}>
				{t("maption.finish")}: {currentPosition.lat.toFixed(3)},
				{currentPosition.lng.toFixed(3)}
			</div>
			<div>
				{t("maption.rules")}{" "}
				<span style={{ color: "red" }}>up, down, left, right</span>
			</div>
		</div>
	);
};
export default MaptionRules;
