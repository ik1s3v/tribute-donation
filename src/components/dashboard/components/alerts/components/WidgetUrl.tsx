import { Box, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const WidgetUrl = ({ widgetUrl }: { widgetUrl: string }) => {
	const { t } = useTranslation();

	return (
		<>
			<div
				style={{
					display: "flex",
					gap: 10,

					placeItems: "center",
				}}
			>
				<span>{t("widget.url")}:</span>
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
		</>
	);
};
export default WidgetUrl;
