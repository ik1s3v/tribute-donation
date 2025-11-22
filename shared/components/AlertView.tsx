import { useTranslation } from "react-i18next";
import { ViewType } from "../enums";
import type { IAlert, IClientDonation } from "../types";
import computePXSize from "../utils/computePXSize";
import getCurrencySymbol from "../utils/getCurrencySymbol";
import getGridAutoColumns from "../utils/getGridAutoColumns";
import getGridAutoRows from "../utils/getGridAutoRows";
import getGridTemplateAreas from "../utils/getGridTemplateAreas";

const AlertView = ({
	alert,
	donation,
	imageSrc,
	width,
	height,
	backgroundColor,
}: {
	alert: IAlert;
	donation: IClientDonation;
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
					{donation.user_name} {t("message.donate")}{" "}
					{getCurrencySymbol(donation.currency)}
					{donation.amount}
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
					{donation.text}
				</span>
			</div>
		</div>
	);
};
export default AlertView;
