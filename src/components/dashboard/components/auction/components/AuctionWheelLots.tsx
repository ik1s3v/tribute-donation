import { Card, Divider } from "@mui/material";
import type { ILot } from "../../../../../../shared/types";
import { AutoSizer, List } from "react-virtualized";

const AuctionWheelLots = ({
	lots,
	wheelDataIds,
}: { lots: ILot[]; wheelDataIds: number[] }) => {
	return (
		<div style={{ height: "calc(100vh - 150px)", width: "100%" }}>
			<AutoSizer>
				{({ height, width }) => (
					<List
						style={{ paddingRight: 10 }}
						width={width}
						height={height}
						rowCount={lots.length}
						rowHeight={58}
						rowRenderer={({ key, index, style }) => {
							return (
								<div key={key} style={style}>
									<Card
										sx={{
											display: "flex",
											placeItems: "center",
											justifyContent: "space-between",
											marginBottom: 1,
											maxWidth: 725,

											height: 40,
											padding: "10px",
											background: (theme) =>
												wheelDataIds.includes(lots[index].fastId)
													? `linear-gradient(60deg,${theme.palette.background.paper} 30%,  ${lots[index].color} 100%)`
													: undefined,

											textDecoration: wheelDataIds.includes(lots[index].fastId)
												? undefined
												: "line-through",
										}}
									>
										<div style={{ width: "30px", overflow: "hidden" }}>
											#{lots[index].fastId}
										</div>
										<div
											style={{
												width: "70%",
												overflow: "hidden",
												whiteSpace: "nowrap",
											}}
										>
											<span>{lots[index].name}</span>
										</div>
										<span style={{ overflow: "hidden" }}>
											{lots[index].amount}
										</span>
										<Divider orientation="vertical" />
										<div>
											<span>{lots[index].winChancePercent}%</span>
										</div>
									</Card>
								</div>
							);
						}}
					/>
				)}
			</AutoSizer>
		</div>
	);
};
export default AuctionWheelLots;
