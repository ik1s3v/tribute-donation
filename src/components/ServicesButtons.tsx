import { Box } from "@mui/material";
import StreamelementsServiceButton from "./StreamelementsServiceButton";
import TributeBotServiceButton from "./TributeBotServiceButton";

const ServicesButtons = () => {
	return (
		<Box sx={{ display: "grid", gap: 1 }}>
			<TributeBotServiceButton />
			<StreamelementsServiceButton />
		</Box>
	);
};
export default ServicesButtons;
