import { IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import PauseIcon from "@mui/icons-material/Pause";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import type { AppState } from "../../../../../store";
import { DEFAULT_TIME, DEFAULT_TIMER_DURATION } from "../../../../../constants";
import dayjs from "../../../../../dayjs";
import { useCallback } from "react";
import type { TimerSlice } from "../../../../../store/slices/timerSlice";

const Timer = ({
	timerSlice,
	timerStateName,
}: {
	timerSlice: TimerSlice;
	timerStateName: "auctionTimerState";
}) => {
	const { t } = useTranslation();
	const timerState = useSelector((state: AppState) => state[timerStateName]);
	const dispatch = useDispatch();
	const { addTime, subtractTime, setCurrentIntervalId, setTime, setIsStopped } =
		timerSlice.actions;

	const clearCurrentInterval = useCallback(() => {
		if (timerState.currentIntervalId) {
			clearInterval(timerState.currentIntervalId);
		}
	}, [timerState.currentIntervalId]);

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
		<div>
			<Typography sx={{ fontSize: 80 }}>
				{formatTime(timerState.time)}
			</Typography>
			<div>
				{timerState.isStopped ? (
					<IconButton
						onClick={handleStartTimer}
						title={t("timer.continue")}
						size="large"
					>
						<PlayArrowIcon fontSize="large" />
					</IconButton>
				) : (
					<IconButton
						onClick={handleStopTimer}
						title={t("timer.pause")}
						size="large"
					>
						<PauseIcon fontSize="large" />
					</IconButton>
				)}
				<IconButton
					onClick={handleResetTimer}
					title={t("timer.reset")}
					size="large"
				>
					<ReplayIcon fontSize="large" />
				</IconButton>
				<IconButton
					onClick={handleAddTime}
					title={t("timer.addTime")}
					size="large"
				>
					<ExpandLessIcon fontSize="large" />
				</IconButton>
				<IconButton
					onClick={handleReduceTime}
					title={t("timer.reduceTime")}
					size="large"
				>
					<ExpandMoreIcon fontSize="large" />
				</IconButton>
				<IconButton
					onClick={handleAddTimeX2}
					title={t("timer.addTimex2")}
					size="large"
				>
					<KeyboardCapslockIcon fontSize="large" />
				</IconButton>
			</div>
		</div>
	);
};

export default Timer;
