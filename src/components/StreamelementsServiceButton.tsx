import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const StreamelementsServiceButton = () => {
	const { t } = useTranslation();

	return (
		<Button variant="contained" sx={{ bgcolor: "#2701fb" }}>
			{t("services.streamelements")}
		</Button>
	);
};
export default StreamelementsServiceButton;
