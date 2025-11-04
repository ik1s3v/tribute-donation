import ImageIcon from "@mui/icons-material/Image";
import NotesIcon from "@mui/icons-material/Notes";
import { Box } from "@mui/material";
import type { AppTheme } from "../../../../../theme/default";

const View = ({
	gridTemplateAreas,
	description,
}: {
	gridTemplateAreas: string;
	description: string;
}) => {
	return (
		<Box
			sx={{
				display: "grid",
				height: 200,
				width: 300,
				border: "2px solid",
				borderColor: (theme) => (theme as AppTheme).palette.background.section,
			}}
		>
			<Box
				sx={{
					display: "grid",
					gridTemplateAreas: { gridTemplateAreas },
					paddingTop: "20px",
					justifyContent: "center",
					height: 100,
				}}
			>
				<ImageIcon
					sx={{
						width: 50,
						height: 50,
						gridArea: "Image",
						opacity: 0.5,
						color: (theme) => (theme as AppTheme).palette.primary.main,
					}}
				/>
				<NotesIcon sx={{ width: 50, height: 50, gridArea: "Text" }} />
			</Box>
			<div style={{ height: "100%", padding: 10, textAlign: "center" }}>
				{description}
			</div>
		</Box>
	);
};
export default View;
