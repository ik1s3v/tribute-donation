import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router";
import TwitchServiceSettings from "./components/TwitchServiceSettings";

const ServicesSettings = () => {
	const navigate = useNavigate();

	return (
		<div style={{ padding: 15 }}>
			<div style={{ position: "absolute", top: 10, left: 10 }}>
				<IconButton
					onClick={() => {
						navigate(-1);
					}}
				>
					<ArrowBackIosIcon />
				</IconButton>
			</div>
			<Routes>
				<Route path="twitch" element={<TwitchServiceSettings />} />
			</Routes>
		</div>
	);
};
export default ServicesSettings;
