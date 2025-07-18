import LotCard from "./LotCard";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import Timer from "./Timer";
import LotSearch from "./LotSearch";
import {
	DndContext,
	DragOverlay,
	MouseSensor,
	type UniqueIdentifier,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import type { IMessage } from "../../../../../../shared/types";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import DraggableMessageCard from "./DraggableMessageCard";
import AuctionMessageCard from "./AuctionMessageCard";
import NewLotForm from "./NewLotForm";
import { auctionTimerSlice } from "../../../../../store/slices/timerSlice";
import { auctionMessagesSlice } from "../../../../../store/slices/messagesSlice";
import { updateLot } from "../../../../../store/slices/lotsSlice";
import {
	List,
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache,
} from "react-virtualized";
import "react-virtualized/styles.css";
import { useMemo, useRef, useState } from "react";
import { showSnackBar } from "../../../../../store/slices/snackBarSlice";
import { AlertSeverity } from "../../../../../../shared/enums";
import ResizeObserver from "rc-resize-observer";

const Lots = () => {
	const { lots, searchPattern } = useSelector(
		(state: AppState) => state.lotsState,
	);
	const [activeMessageId, setActiveMessageId] = useState<UniqueIdentifier>();
	const { messages } = useSelector(
		(state: AppState) => state.auctionMessagesState,
	);
	const cacheRef = useRef(
		new CellMeasurerCache({ fixedWidth: true, defaultHeight: 110 }),
	);

	const auctionSettings = useSelector(
		(state: AppState) => state.auctionState.auctionSettings,
	);

	const dispatch = useDispatch();
	const { removeMessage } = auctionMessagesSlice.actions;

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
				lot.name?.toLowerCase().includes(searchPattern.toLowerCase()),
			),
		[searchPattern, lots],
	);
	return (
		<DndContext
			modifiers={[restrictToWindowEdges]}
			sensors={sensors}
			onDragStart={({ active }) => {
				setActiveMessageId(active.id);
			}}
			onDragEnd={({ over, active }) => {
				if (over) {
					dispatch(removeMessage(active.data.current as IMessage));

					const selectedLot = lots.find((lot) => lot.fastId === over?.id);

					if (selectedLot) {
						const messageAmount = (active.data.current as { amount: number })
							.amount;
						dispatch(
							updateLot({
								...selectedLot,
								amount: messageAmount + (selectedLot.amount ?? 0),
							}),
						);
						dispatch(
							showSnackBar({
								message: `+${messageAmount}      #${selectedLot.fastId}`,
								alertSeverity: AlertSeverity.success,
							}),
						);
					}
				}
				setActiveMessageId(undefined);
			}}
		>
			<div
				style={{
					display: "grid",
					gap: 20,
					gridAutoFlow: "column",
					gridTemplateColumns: "1fr auto",
				}}
			>
				<div style={{ display: "flex", gap: 20, flexDirection: "column" }}>
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
							height: `calc(100vh - ${15 + 73 + 20 + 56 + 20}px - 20px)`,
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
				<div>
					<Timer
						timerSlice={auctionTimerSlice}
						timerStateName="auctionTimerState"
					/>
					<div
						style={{
							height: `calc(100vh - ${15 + 73 + 20 + 56 + 20}px - 120px)`,
						}}
					>
						<AutoSizer>
							{({ height, width }) => (
								<List
									style={{ overflow: activeMessageId ? "hidden" : "auto" }}
									width={width}
									height={height}
									rowCount={messages.length}
									rowHeight={cacheRef.current.rowHeight}
									rowRenderer={({ key, index, style, parent }) => {
										return (
											<CellMeasurer
												key={key}
												cache={cacheRef.current}
												parent={parent}
												columnIndex={0}
												rowIndex={index}
											>
												{({ measure }) => (
													<div style={style}>
														<ResizeObserver.Collection onBatchResize={measure}>
															<DraggableMessageCard message={messages[index]} />
														</ResizeObserver.Collection>
													</div>
												)}
											</CellMeasurer>
										);
									}}
								/>
							)}
						</AutoSizer>

						<DragOverlay>
							{activeMessageId ? (
								<AuctionMessageCard
									message={
										messages.find(
											(message) => message.id === activeMessageId,
										) as IMessage
									}
								/>
							) : null}
						</DragOverlay>
					</div>
				</div>
			</div>
		</DndContext>
	);
};
export default Lots;
