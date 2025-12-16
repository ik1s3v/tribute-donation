import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
	Tooltip,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router";
import { MENU_WIDTH, MENU_WIDTH_MD } from "../../constants";
import { dashboardRouts } from "../../routes/dashboardRouts";
import type { AppTheme } from "../../theme/default";

const SideBar = styled("div")(({ theme }: { theme?: AppTheme }) => ({
	top: 0,
	left: 0,
	bottom: 0,
	position: "fixed",
	zIndex: 10,
	backgroundColor: theme?.palette.background.section,
	textWrap: "wrap",
	textOverflow: "ellipsis",
	width: MENU_WIDTH,
	[theme?.breakpoints.down("md") as string]: {
		width: MENU_WIDTH_MD,
	},
}));

export default function DashboardSidebar() {
	const location = useLocation();
	const currentPath = location.pathname;
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const { t } = useTranslation();
	const isSelected = useCallback(
		(path: string) => {
			return currentPath.startsWith(`/dashboard/${path}`);
		},
		[currentPath],
	);
	return (
		<SideBar>
			<List sx={{ paddingTop: 0 }}>
				{dashboardRouts.map((navItem) => (
					<Tooltip
						disableHoverListener={!matches}
						title={t(`dashboard.${navItem.path}`)}
						key={navItem.path}
						placement="right"
					>
						<NavLink
							to={`/dashboard/${navItem.path}`}
							style={{ textDecoration: "none" }}
						>
							<ListItemButton
								sx={{
									height: 50,
									padding: "16px 0",
									"&:hover": { backgroundColor: "rgba(0,0,0,0.3)" },
								}}
								component="div"
								selected={isSelected(navItem.path)}
							>
								<ListItemIcon
									sx={{
										padding: "0 20px",
										minWidth: 24,
										color: isSelected(navItem.path)
											? theme.palette.primary.main
											: theme.palette.primary.contrastText,
									}}
								>
									{navItem.icon}
								</ListItemIcon>
								<ListItemText
									sx={{
										color: isSelected(navItem.path)
											? theme.palette.primary.main
											: theme.palette.primary.contrastText,
										display: { xs: "none", md: "flex" },
									}}
								>
									{t(`dashboard.${navItem.name}`)}
								</ListItemText>
							</ListItemButton>
						</NavLink>
					</Tooltip>
				))}
			</List>
		</SideBar>
	);
}
