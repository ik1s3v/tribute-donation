import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import { IconButton, Typography } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "../../../../../../shared/dayjs";
import type { TimerSlice } from "../../../../../../shared/slices/timerSlice";
import { DEFAULT_TIME, DEFAULT_TIMER_DURATION } from "../../../../../constants";
import type { AppState } from "../../../../../store";

const Timer = ({
	timerSlice,
	timerStateName,
	iconSize = 40,
	size = 80,
}: {
	timerSlice: TimerSlice;
	timerStateName: "auctionTimerState" | "maptionTimerState";
	iconSize?: number;
	size?: number;
}) => {
	const { t } = useTranslation();
	const { currentIntervalId, time, isStopped } = useSelector(
		(state: AppState) => state[timerStateName],
	);
	const dispatch = useDispatch();
	const { addTime, subtractTime, setCurrentIntervalId, setTime, setIsStopped } =
		timerSlice.actions;
	const iconSx = { width: iconSize, height: iconSize };
	const clearCurrentInterval = useCallback(() => {
		if (currentIntervalId) {
			clearInterval(currentIntervalId);
		}
	}, [currentIntervalId]);

	const formatTime = (milliseconds: number) => {
		const duration = dayjs.duration(milliseconds);
		return duration.asHours() >= 1
			? duration.format("HH:mm:ss")
			: duration.format("mm:ss:SSS").slice(0, 8);
	};

	const handleStartTimer = useCallback(() => {
		const interval = setInterval(() => {
			dispatch(subtractTime(10));
		}, 10);
		dispatch(setIsStopped(false));
		dispatch(setCurrentIntervalId(interval));
	}, [dispatch, setCurrentIntervalId, setIsStopped, subtractTime]);

	const handleStopTimer = useCallback(() => {
		clearCurrentInterval();
		dispatch(setIsStopped(true));
	}, [clearCurrentInterval, dispatch, setIsStopped]);

	const handleResetTimer = useCallback(() => {
		clearCurrentInterval();
		dispatch(setIsStopped(true));
		dispatch(setTime(DEFAULT_TIMER_DURATION));
	}, [clearCurrentInterval, dispatch, setIsStopped, setTime]);

	const handleAddTime = useCallback(() => {
		dispatch(addTime(DEFAULT_TIME));
	}, [dispatch, addTime]);

	const handleReduceTime = useCallback(() => {
		dispatch(subtractTime(DEFAULT_TIME));
	}, [dispatch, subtractTime]);

	const handleAddTimeX2 = useCallback(() => {
		dispatch(addTime(DEFAULT_TIME * 2));
	}, [dispatch, addTime]);

	return (
		<div style={{ display: "grid", placeItems: "center" }}>
			<Typography sx={{ fontSize: size }}>{formatTime(time)}</Typography>
			<div>
				{isStopped ? (
					<IconButton onClick={handleStartTimer} title={t("timer.continue")}>
						<PlayArrowIcon sx={iconSx} />
					</IconButton>
				) : (
					<IconButton onClick={handleStopTimer} title={t("timer.pause")}>
						<PauseIcon sx={iconSx} />
					</IconButton>
				)}
				<IconButton onClick={handleResetTimer} title={t("timer.reset")}>
					<ReplayIcon sx={iconSx} />
				</IconButton>
				<IconButton onClick={handleAddTime} title={t("timer.add_time")}>
					<ExpandLessIcon sx={iconSx} />
				</IconButton>
				<IconButton onClick={handleReduceTime} title={t("timer.reduce_time")}>
					<ExpandMoreIcon sx={iconSx} />
				</IconButton>
				<IconButton onClick={handleAddTimeX2} title={t("timer.add_timex2")}>
					<KeyboardCapslockIcon sx={iconSx} />
				</IconButton>
			</div>
		</div>
	);
};

export default Timer;
