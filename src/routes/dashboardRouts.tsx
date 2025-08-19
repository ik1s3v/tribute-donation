import CampaignIcon from "@mui/icons-material/Campaign";
import MapIcon from "@mui/icons-material/Map";
import MessageIcon from "@mui/icons-material/Message";
import MovieIcon from "@mui/icons-material/Movie";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import Alerts from "../components/dashboard/components/alerts/Alerts";
import Auction from "../components/dashboard/components/auction/Auction";
import AuctionIcon from "../components/dashboard/components/auction/components/AuctionIcon";
import AucFighter from "../components/dashboard/components/fighter/AucFighter";
import Maption from "../components/dashboard/components/maption/Maption";
import Media from "../components/dashboard/components/media/Media";
import Messages from "../components/dashboard/components/messages/Messages";
import Settings from "../components/dashboard/components/settings/Settings";

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
	{
		path: "fighter",
		element: <AucFighter />,
		icon: <SportsMartialArtsIcon />,
		name: "fighter",
	},
	{
		path: "maption",
		element: <Maption />,
		icon: <MapIcon />,
		name: "maption",
	},
];
