import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, IconButton } from "@mui/material";

const WidgetUrl = ({
	widgetUrl,
	text,
}: {
	widgetUrl: string;
	text: string;
}) => {
	return (
		<div
			style={{
				display: "flex",
				gap: 10,

				placeItems: "center",
			}}
		>
			<span>{text}:</span>
			<Box
				sx={(theme) => ({
					color: theme.palette.primary.main,
				})}
			>
				{widgetUrl}
			</Box>
			<IconButton
				onClick={() => {
					navigator.clipboard.writeText(widgetUrl);
				}}
			>
				<ContentCopyIcon />
			</IconButton>
		</div>
	);
};
export default WidgetUrl;
