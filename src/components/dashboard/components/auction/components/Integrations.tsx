import { Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { setIsShowTributeMessages } from "../../../../../store/slices/auctionSlice";

const Integrations = () => {
	const { isShowTributeMessages } = useSelector(
		(state: AppState) => state.auctionState,
	);
	const dispatch = useDispatch();
	const { t } = useTranslation();

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-evenly",
				alignItems: "center",
				placeContent: "center",
			}}
		>
			<span>{t("integration.tribute")}:</span>
			<Switch
				checked={isShowTributeMessages}
				onChange={(_, value) => dispatch(setIsShowTributeMessages(value))}
			/>
		</div>
	);
};
export default Integrations;
