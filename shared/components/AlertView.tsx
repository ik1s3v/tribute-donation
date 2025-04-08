import type { IAlert, IMessage } from "../types";
import getGridTemplateAreas from "../utils/getGridTemplateAreas";
import getGridAutoRows from "../utils/getGridAutoRows";
import getGridAutoColumns from "../utils/getGridAutoColumns";
import computePXSize from "../utils/computePXSize";
import { ViewType } from "../enums";
import getCurrencySymbol from "../utils/getCurrencySymbol";
import { useTranslation } from "react-i18next";

const AlertView = ({
	alert,
	message,
	imageSrc,
	width,
	height,
	backgroundColor,
}: {
	alert: IAlert;
	message: IMessage;
	imageSrc: string;
	width: number;
	height: number;
	backgroundColor?: string;
}) => {
	const { t } = useTranslation();
	return (
		<div
			style={{
				display: "grid",
				height,
				width,
				backgroundColor,
				gridTemplateAreas: getGridTemplateAreas(alert.view_type),
				gridAutoRows: getGridAutoRows(alert.view_type),
				gridAutoColumns: getGridAutoColumns(alert.view_type),
				placeItems: "center",
				gap: 5,
				color: "white",
				fontSize: 25,
			}}
		>
			<div
				style={{
					gridArea: "Image",
					height: alert.view_type === ViewType.Overlay ? height : "100%",
					width: alert.view_type === ViewType.Overlay ? width : "100%",
					position:
						alert.view_type === ViewType.Overlay ? "absolute" : undefined,
					backgroundImage: `url(${imageSrc})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}
			/>
			<div
				style={{
					gridArea: "Text",
					height: alert.view_type === ViewType.Overlay ? height : "100%",
					width: alert.view_type === ViewType.Overlay ? width : "100%",
					maxWidth: `${(width / 100) * 60}px`,
					display: "flex",
					flexDirection: "column",
					placeContent: "center",
					textAlign: "center",
					position:
						alert.view_type === ViewType.Overlay ? "absolute" : undefined,
				}}
			>
				<span
					style={{
						display: "block",
						fontSize: computePXSize({
							percent: alert.title_style.font_size,
							width,
							coefficient: 4,
						}),
						color: alert.title_style.text_color,
						fontWeight: alert.title_style.bold ? "bold" : undefined,
						fontStyle: alert.title_style.italics ? "italic" : undefined,
						textDecoration: alert.title_style.underline
							? "underline"
							: undefined,
						letterSpacing: computePXSize({
							percent: alert.title_style.letter_spacing,
							width,
						}),
						wordSpacing: computePXSize({
							percent: alert.title_style.word_spacing,
							width,
						}),
					}}
				>
					{message.user_name} {t("message.donate")}{" "}
					{getCurrencySymbol(message.currency)}
					{message.amount}
				</span>

				<span
					style={{
						display: "block",
						fontSize: computePXSize({
							percent: alert.message_style.font_size,
							width,
							coefficient: 4,
						}),
						color: alert.message_style.text_color,
						fontWeight: alert.message_style.bold ? "bold" : undefined,
						fontStyle: alert.message_style.italics ? "italic" : undefined,
						textDecoration: alert.message_style.underline
							? "underline"
							: undefined,
						letterSpacing: computePXSize({
							percent: alert.message_style.letter_spacing,
							width,
						}),
						wordSpacing: computePXSize({
							percent: alert.message_style.word_spacing,
							width,
						}),
					}}
				>
					{message.text}
				</span>
			</div>
		</div>
	);
};
export default AlertView;
