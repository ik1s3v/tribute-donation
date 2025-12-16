import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
	AlertType,
	AlertVariationConditions,
	ViewType,
} from "../../../../../../shared/enums";
import { setAlert } from "../../../../../../shared/slices/alertsSlice";
import { TEXT_STYLE } from "../../../../../constants";

const AddNewAlertVariantButton = ({ group_id }: { group_id: string }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<Button
			sx={{ minHeight: "5.3rem" }}
			startIcon={<AddIcon />}
			onClick={() => {
				dispatch(
					setAlert({
						id: crypto.randomUUID(),
						audio: "alert.mp3",
						audio_volume: 50,
						view_type: ViewType.Top,
						image: "image.gif",
						group_id,
						name: t("alert.new_variant"),
						title_style: TEXT_STYLE,
						message_style: TEXT_STYLE,
						variation_conditions: AlertVariationConditions.Random,
						status: true,
						type: AlertType.Donation,
						amount: 100,
					}),
				);
				navigate("/dashboard/alerts/new/alert");
			}}
		>
			{t("alert.add_new_variant")}
		</Button>
	);
};
export default AddNewAlertVariantButton;
