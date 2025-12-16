import {
	DndContext,
	DragOverlay,
	MouseSensor,
	type UniqueIdentifier,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { useDispatch, useSelector } from "react-redux";
import {
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache,
	List,
} from "react-virtualized";
import type { IDonation } from "../../../../../../shared/types";
import type { AppState } from "../../../../../store";
import { auctionDonationsSlice } from "../../../../../store/slices/donationsSlice.ts";
import { updateLot } from "../../../../../store/slices/lotsSlice";
import AuctionDonationCard from "./AuctionDonationCard";
import DraggableDonationCard from "./DraggableDonationCard";
import LotCard from "./LotCard";
import LotSearch from "./LotSearch";
import NewLotForm from "./NewLotForm";
import Timer from "./Timer";
import "react-virtualized/styles.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { AlertSeverity } from "../../../../../../shared/enums";
import { showSnackBar } from "../../../../../../shared/slices/snackBarSlice";
import { auctionTimerSlice } from "../../../../../../shared/slices/timerSlice";
import { useGetAuctionSettingsQuery } from "../../../../../api/auctionApi.ts";
import Integrations from "./Integrations";
import LotsOptionsMenu from "./LotsOptionsMenu";
import LotsTotal from "./LotsTotal.tsx";

const Lots = () => {
	const { lots, searchPattern } = useSelector(
		(state: AppState) => state.lotsState,
	);
	const [activeDonationId, setActiveDonationId] = useState<UniqueIdentifier>();
	const { donations } = useSelector(
		(state: AppState) => state.auctionDonationsState,
	);
	const cacheRef = useRef(
		new CellMeasurerCache({ fixedWidth: true, defaultHeight: 110 }),
	);
	const { data: auctionSettings } = useGetAuctionSettingsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});

	const dispatch = useDispatch();
	const { removeDonation } = auctionDonationsSlice.actions;

	const touchSensor = useSensor(MouseSensor, {
		activationConstraint: {
			delay: 250,
			tolerance: 0,
		},
	});
	const sensors = useSensors(touchSensor);

	const filteredLots = useMemo(
		() =>
			lots.filter((lot) =>
				lot.name.toLowerCase().includes(searchPattern.toLowerCase()),
			),
		[searchPattern, lots],
	);

	//donations need to clear cache when changed
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		cacheRef.current.clearAll();
	}, [donations]);

	return (
		<>
			<DndContext
				modifiers={[restrictToWindowEdges]}
				sensors={sensors}
				onDragStart={({ active }) => {
					setActiveDonationId(active.id);
				}}
				onDragEnd={({ over, active }) => {
					if (over) {
						dispatch(removeDonation(active.data.current as IDonation));

						const selectedLot = lots.find((lot) => lot.fastId === over?.id);

						if (selectedLot) {
							const exchanged_amount = (
								active.data.current as { exchanged_amount: number }
							).exchanged_amount;
							dispatch(
								updateLot({
									...selectedLot,
									amount: exchanged_amount + (selectedLot.amount ?? 0),
								}),
							);
							dispatch(
								showSnackBar({
									message: `+${exchanged_amount.toFixed(2)}      #${selectedLot.fastId}`,
									alertSeverity: AlertSeverity.success,
								}),
							);
						}
					}
					setActiveDonationId(undefined);
				}}
			>
				<div
					style={{
						display: "grid",
						gap: 20,
						gridAutoFlow: "column",
						gridTemplateColumns: "1fr auto",
						height: `calc(100dvh - ${15 + 110}px - 50px)`,
					}}
				>
					<div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
						<div>
							<div
								style={{
									display: "flex",
									gap: 20,
								}}
							>
								<NewLotForm />
								<LotSearch />
							</div>
						</div>
						<div
							style={{
								flex: 1,
							}}
						>
							<AutoSizer>
								{({ height, width }) => (
									<List
										style={{ paddingRight: "10px" }}
										width={width}
										height={height}
										rowCount={filteredLots.length}
										rowHeight={58}
										rowRenderer={({ key, index, style }) => {
											return (
												<div key={key} style={style}>
													<LotCard
														lot={filteredLots[index]}
														index={index + 1}
														isShowOdds={auctionSettings?.is_show_odds}
													/>
												</div>
											);
										}}
									/>
								)}
							</AutoSizer>
						</div>
					</div>
					<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
						<Timer
							timerSlice={auctionTimerSlice}
							timerStateName="auctionTimerState"
						/>
						<Integrations />
						<div
							style={{
								flex: 1,
							}}
						>
							<AutoSizer>
								{({ height, width }) => (
									<List
										style={{
											overflowY: activeDonationId ? "hidden" : "auto",
											overflowX: "hidden",
										}}
										width={width}
										height={height}
										rowCount={donations.length}
										rowHeight={cacheRef.current.rowHeight}
										deferredMeasurementCache={cacheRef.current}
										rowRenderer={({ key, index, style, parent }) => {
											return (
												<CellMeasurer
													key={key}
													cache={cacheRef.current}
													parent={parent}
													columnIndex={0}
													rowIndex={index}
												>
													<div style={style}>
														<DraggableDonationCard
															donation={donations[index]}
														/>
													</div>
												</CellMeasurer>
											);
										}}
									/>
								)}
							</AutoSizer>

							<DragOverlay>
								{activeDonationId ? (
									<AuctionDonationCard
										donation={
											donations.find(
												(donation) => donation.id === activeDonationId,
											) as IDonation
										}
									/>
								) : null}
							</DragOverlay>
						</div>
					</div>
				</div>
			</DndContext>
			<div
				style={{
					display: "flex",
					placeContent: "center",
					marginTop: 10,
					position: "relative",
				}}
			>
				<div style={{ position: "absolute", top: 0, left: 0 }}>
					{auctionSettings?.is_show_total_sum && <LotsTotal lots={lots} />}
				</div>
				<LotsOptionsMenu />
			</div>
		</>
	);
};
export default Lots;
