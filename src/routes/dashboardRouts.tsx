import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import CampaignIcon from "@mui/icons-material/Campaign";
import Alerts from "../components/dashboard/components/alerts/Alerts";
import Messages from "../components/dashboard/components/messages/Messages";
import Settings from "../components/dashboard/components/settings/Settings";
import MovieIcon from "@mui/icons-material/Movie";
import Media from "../components/dashboard/components/media/Media";
import Auction from "../components/dashboard/components/auction/Auction";
import AuctionIcon from "../components/dashboard/components/auction/components/AuctionIcon";
export const dashboardRouts = [
	{
		path: "messages",
		element: <Messages />,
		icon: <MessageIcon />,
		name: "messages",
	},

	{
		path: "settings",
		element: <Settings />,
		icon: <SettingsIcon />,
		name: "settings",
	},
	{
		path: "alerts",
		element: <Alerts />,
		icon: <CampaignIcon />,
		name: "alerts",
	},
	{
		path: "media",
		element: <Media />,
		icon: <MovieIcon />,
		name: "media",
	},
	{
		path: "auction",
		element: <Auction />,
		icon: <AuctionIcon />,
		name: "auction",
	},
];
