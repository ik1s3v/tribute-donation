import type { PaletteMode, Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();

export type AppTheme = typeof dark & Theme;

export const dark = {
	palette: {
		mode: "dark" as PaletteMode,
		primary: palette.augmentColor({
			color: {
				main: "#1976d2",
				contrastText: "#ffffff",
			},
		}),
		switchOff: {
			text: "#838383",
		},

		background: {
			default: "#0e1621",
			paper: "#182533",
			section: "#17212b",
		},
	},
};
