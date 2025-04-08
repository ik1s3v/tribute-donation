import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import type { IMessage } from "../../../../../../shared/types";
import getColorByMediaType from "../../../../../utils/getColorByMediaType";
import { IconButton } from "@mui/material";
import MessageDate from "./MessageDate";
import { useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { invoke } from "@tauri-apps/api/core";
const MediaTile = ({ message }: { message: IMessage }) => {
	const pausedMediaId = useSelector(
		(state: AppState) => state.mediaState.pausedMediaId,
	);
	const playingMediaId = useSelector(
		(state: AppState) => state.mediaState.playingMediaId,
	);
	return (
		<>
			{message.media && (
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
						background: getColorByMediaType(message.media.media_type),
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 15,
							right: 15,
						}}
					>
						<MessageDate message={message} />
					</div>
					<div
						style={{
							position: "absolute",
							top: 15,
							left: 15,
						}}
					>
						{message.user_name}
					</div>
					<div style={{ position: "relative", display: "grid" }}>
						<IconButton
							onClick={() => {
								invoke(
									pausedMediaId === message.id ? "play_media" : "pause_media",
									{ id: message.id },
								);
							}}
						>
							{pausedMediaId === message.id ? (
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
								invoke("skip_media", { id: message.id });
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
