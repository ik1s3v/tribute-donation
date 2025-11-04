import { Skeleton } from "@mui/material";
import type { TypedUseInfiniteQuery } from "@reduxjs/toolkit/query/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../src/store";
import { AlertSeverity } from "../enums";
import { showSnackBar } from "../slices/snackBarSlice";
import type { IMessage } from "../types";
import MessageTile from "./MessageTile";

const InfiniteMessages = ({
	useGetMessagesInfiniteQuery,
}: {
	useGetMessagesInfiniteQuery: TypedUseInfiniteQuery<IMessage[], any, any, any>;
}) => {
	const { t } = useTranslation();
	const { playingAlertId } = useSelector(
		(state: AppState) => state.alertsState,
	);
	const { playingMediaId } = useSelector((state: AppState) => state.mediaState);
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
		useGetMessagesInfiniteQuery(undefined, {
			refetchOnFocus: false,
			refetchOnMountOrArgChange: false,
			refetchOnReconnect: false,
		});
	const dispatch = useDispatch();

	useEffect(() => {
		if (error) {
			dispatch(
				showSnackBar({
					message: error.message as string,
					alertSeverity: AlertSeverity.error,
				}),
			);
		}
	}, [error, dispatch]);
	return (
		<>
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
									isAlertPlaying={message.id === playingAlertId}
									isMediaPlaying={message.id === playingMediaId}
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
export default InfiniteMessages;
