import { useTranslation } from "react-i18next";
import InfiniteMessages from "../../../../../shared/components/InfiniteMessages";
import { useGetMessagesInfiniteQuery } from "../../../../api/messagesApi";
import WidgetUrl from "../alerts/components/WidgetUrl";

const Messages = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1>{t("messages.title")}</h1>
			<WidgetUrl
				widgetUrl={"http://localhost:12553/obs-dock-messages"}
				text={t("widget.obs_dock_url")}
			/>
			<div>{t("skip_alert")} - ctrl+F1</div>
			<div>{t("skip_media")} - ctrl+F2</div>

			<InfiniteMessages
				useGetMessagesInfiniteQuery={useGetMessagesInfiniteQuery}
			></InfiniteMessages>
		</>
	);
};
export default Messages;
