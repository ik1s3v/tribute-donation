import { useCallback, useEffect, useRef, useState } from "react";
import { AppEvent } from "../../shared/enums";
import useWebSocket from "../../shared/hooks/useWebSocket";
import type {
	IClientDonation,
	IMediaSettings,
	ISettings,
} from "../../shared/types";

const usePlayMedia = () => {
	const websocketService = useWebSocket();
	const mediaSettingsRef = useRef<IMediaSettings | null>(null);
	const settingsRef = useRef<ISettings | null>(null);
	const donationsRef = useRef<IClientDonation[]>([]);
	const [currentDonation, setCurrentDonation] = useState<IClientDonation>();

	const handleMediaEnd = useCallback(
		({ donation }: { donation: IClientDonation | undefined }) => {
			if (!donation) return;
			websocketService.send({
				event: AppEvent.MediaPlayed,
				data: donation.id,
			});

			donationsRef.current = donationsRef.current.filter(
				(d) => d.id !== donation.id,
			);

			const newCurrentDonation = donationsRef.current.at(0);
			setCurrentDonation(undefined);
			setTimeout(() => {
				if (newCurrentDonation) {
					playMedia({ donation: newCurrentDonation });
				}
			}, 0);
		},
		[],
	);
	const playMedia = useCallback(
		({ donation }: { donation: IClientDonation }) => {
			if (settingsRef.current && !settingsRef.current.alert_paused) {
				setCurrentDonation(donation);
			}
		},
		[],
	);

	const skipMedia = useCallback(
		(id: string) => {
			if (currentDonation?.id === id) {
				handleMediaEnd({ donation: currentDonation });
			} else {
				donationsRef.current = donationsRef.current.filter(
					(donation) => donation.id !== id,
				);
			}
		},
		[handleMediaEnd, currentDonation],
	);

	const skipPlayingMedia = useCallback(() => {
		if (currentDonation) {
			handleMediaEnd({ donation: currentDonation });
		}
	}, [handleMediaEnd, currentDonation]);

	const handleNewDonate = useCallback((donation: IClientDonation) => {
		if (donation.media) {
			donationsRef.current = [...donationsRef.current, donation];
		}
	}, []);

	const handleReplayMedia = useCallback(
		(donation: IClientDonation) => {
			donationsRef.current = [donation, ...donationsRef.current];

			if (!currentDonation) {
				playMedia({ donation: donation });
			}
		},
		[playMedia, currentDonation],
	);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IClientDonation>(
			AppEvent.MediaMessage,
			handleNewDonate,
		);

		return () => unsubscribe();
	}, [handleNewDonate]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IClientDonation>(
			AppEvent.ReplayMedia,
			handleReplayMedia,
		);

		return () => unsubscribe();
	}, [handleReplayMedia]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IMediaSettings>(
			AppEvent.MediaSettings,
			(mediaSettings) => {
				mediaSettingsRef.current = mediaSettings;
			},
		);

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<ISettings>(
			AppEvent.Settings,
			(settings) => {
				if (settingsRef.current?.alert_paused && !settings.alert_paused) {
					settingsRef.current = settings;
					const donation = donationsRef.current.at(0);
					if (donation) {
						playMedia({ donation: donation });
					}
					return;
				}
				settingsRef.current = settings;
			},
		);

		return () => unsubscribe();
	}, [playMedia]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.SkipMedia,
			skipMedia,
		);

		return () => unsubscribe();
	}, [skipMedia]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<null>(
			AppEvent.SkipPlayingMedia,
			skipPlayingMedia,
		);

		return () => unsubscribe();
	}, [skipPlayingMedia]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.MediaEnd,
			(id) => {
				const donation = donationsRef.current.find(
					(donation) => donation.id === id,
				);
				handleMediaEnd({ donation: donation });
			},
		);

		return () => unsubscribe();
	}, [handleMediaEnd]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.MediaError,
			(id) => {
				const donation = donationsRef.current.find(
					(donation) => donation.id === id,
				);
				handleMediaEnd({ donation: donation });
			},
		);

		return () => unsubscribe();
	}, [handleMediaEnd]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.AlertPlayed,
			(id) => {
				const donation = donationsRef.current.find(
					(donation) => donation.id === id,
				);
				if (!currentDonation && donation) {
					playMedia({ donation: donation });
				}
			},
		);

		return () => unsubscribe();
	}, [playMedia, currentDonation]);

	return {
		currentDonation: currentDonation,
		mediaSettings: mediaSettingsRef.current,
	};
};
export default usePlayMedia;
