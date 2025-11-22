import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import type { AppState } from "../../src/store";
import { AppEvent } from "../enums";
import useWebSocket from "../hooks/useWebSocket";
import type { IClientDonation } from "../types";
import getColorByMediaType from "../utils/getColorByMediaType";
import MessageDate from "./MessageDate";

const MediaTile = ({ donation }: { donation: IClientDonation }) => {
	const { pausedMediaId } = useSelector((state: AppState) => state.mediaState);
	const websocketService = useWebSocket();

	return (
		<>
			{donation.media && (
				<div
					style={{
						height: "100%",
						width: "100%",
						position: "absolute",
						display: "grid",
						placeItems: "center",
						zIndex: 1,
						top: 0,
						left: 0,
						background: getColorByMediaType(donation.media.media_type),
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 15,
							right: 15,
						}}
					>
						<MessageDate donation={donation} />
					</div>
					<div
						style={{
							position: "absolute",
							top: 15,
							left: 15,
						}}
					>
						{donation.user_name}
					</div>
					<div style={{ position: "relative", display: "grid" }}>
						<IconButton
							onClick={() => {
								if (pausedMediaId === donation.id) {
									websocketService.send({
										event: AppEvent.PlayMedia,
										data: donation.id,
									});
								} else {
									websocketService.send({
										event: AppEvent.PauseMedia,
										data: donation.id,
									});
								}
							}}
						>
							{pausedMediaId === donation.id ? (
								<PlayArrowIcon sx={{ height: 50, width: 50 }} />
							) : (
								<PauseIcon sx={{ height: 50, width: 50 }} />
							)}
						</IconButton>

						<IconButton
							style={{
								position: "absolute",
								justifySelf: "center",
								alignSelf: "center",
								left: 70,
							}}
							onClick={() => {
								websocketService.send({
									event: AppEvent.SkipMedia,
									data: donation.id,
								});
							}}
						>
							<SkipNextIcon />
						</IconButton>
					</div>
				</div>
			)}
		</>
	);
};
export default MediaTile;
