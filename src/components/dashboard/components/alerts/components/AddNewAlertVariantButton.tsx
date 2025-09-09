import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
	AlertVariationConditions,
	ViewType,
} from "../../../../../../shared/enums";
import { setAlert } from "../../../../../../shared/slices/alertsSlice";
import { ITextStyle } from "../../../../../../shared/types";

const TEXT_STYLE: ITextStyle = {
	font_size: 60,
	text_color: "rgb(255,255,255,1)",
	bold: true,
	italics: false,
	underline: false,
	letter_spacing: 0,
	word_spacing: 0,
};

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
						amount: 100,
					}),
				);
				navigate("/dashboard/new/alert");
			}}
		>
			{t("alert.add_new_variant")}
		</Button>
	);
};
export default AddNewAlertVariantButton;
