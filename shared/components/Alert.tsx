import type { ReactNode } from "react";
import { ViewType } from "../enums";
import type { IAlert } from "../types";
import computePXSize from "../utils/computePXSize";
import getGridAutoColumns from "../utils/getGridAutoColumns";
import getGridAutoRows from "../utils/getGridAutoRows";
import getGridTemplateAreas from "../utils/getGridTemplateAreas";

const Alert = ({
	alert,
	imageSrc,
	width,
	height,
	backgroundColor,
	text,
	children,
}: {
	alert: IAlert;
	imageSrc: string;
	width: number;
	height: number;
	backgroundColor?: string;
	text?: string;
	children: ReactNode;
}) => {
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
					{children}
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
					{text}
				</span>
			</div>
		</div>
	);
};
export default Alert;
