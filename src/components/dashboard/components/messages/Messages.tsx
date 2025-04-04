import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroller";
import { useGetMessagesInfiniteQuery } from "../../../../api/messagesApi";

import { useSelector } from "react-redux";
import type { AppState } from "../../../../store";
import MessageTile from "./components/MessageTile";
import { Skeleton } from "@mui/material";

const Messages = () => {
	const { t } = useTranslation();
	const playingAlertId = useSelector(
		(state: AppState) => state.alertsState.playingAlertId,
	);
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useGetMessagesInfiniteQuery(undefined, {
			refetchOnFocus: false,
			refetchOnMountOrArgChange: false,
			refetchOnReconnect: false,
		});

	return (
		<>
			<h1>{t("messages.title")}</h1>

			{!data?.pages[0].length ? (
				<Skeleton
					variant="rectangular"
					sx={{
						display: "flex",
						borderRadius: 3,
						boxSizing: "border-box",
						marginBottom: "1rem",
						minHeight: "5.3rem",
						overflow: "hidden",
					}}
				/>
			) : (
				<InfiniteScroll
					loadMore={() => fetchNextPage()}
					hasMore={!isFetchingNextPage && hasNextPage}
					initialLoad={false}
					useWindow={true}
					threshold={50}
					loader={<div key="loader">{t("loading")}</div>}
				>
					<div>
						{data.pages.map((page) =>
							page.map((message) => (
								<MessageTile
									message={message}
									isPlaying={message.id === playingAlertId}
									key={message.id}
								/>
							)),
						)}
					</div>
				</InfiniteScroll>
			)}
		</>
	);
};
export default Messages;
