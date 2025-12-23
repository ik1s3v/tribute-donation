import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch } from "react-redux";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import { useGetGoalsInfiniteQuery } from "../../../../../api/goalsApi";
import GoalCard from "./GoalCard";

const InfiniteGoals = () => {
	const { t } = useTranslation();

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
		useGetGoalsInfiniteQuery();
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
							page.map((goal) => <GoalCard key={goal.id} goal={goal} />),
						)}
					</div>
				</InfiniteScroll>
			)}
		</>
	);
};
export default InfiniteGoals;
