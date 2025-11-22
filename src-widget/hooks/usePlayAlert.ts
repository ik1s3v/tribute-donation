import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	AlertVariationConditions,
	AppEvent,
	Currency,
	ServiceType,
} from "../../shared/enums";
import useWebSocket from "../../shared/hooks/useWebSocket";
import type { IAlert, IClientDonation, ISettings } from "../../shared/types";
import getAlertByDonation from "../utils/getAlertByDonation";

const usePlayAlert = () => {
	const { t } = useTranslation();
	const websocketService = useWebSocket();
	const alertAudioRef = useRef<HTMLAudioElement>(new Audio());
	const messageAudioRef = useRef<HTMLAudioElement>(new Audio());
	const alertsRef = useRef<IAlert[]>([]);
	const settingsRef = useRef<ISettings | null>(null);
	const donationsRef = useRef<IClientDonation[]>([]);

	const [currentDonation, setCurrentDonation] = useState<IClientDonation>();
	const [currentAlert, setCurrentAlert] = useState<IAlert>();

	const handleAudioEnd = useCallback(
		({
			donation,
			skip = false,
		}: {
			donation: IClientDonation | undefined;
			skip?: boolean;
		}) => {
			messageAudioRef.current.pause();
			alertAudioRef.current.pause();
			setTimeout(
				() => {
					if (!donation) return;
					websocketService.send({
						event: AppEvent.AlertPlayed,
						data: donation.id,
					});
					donationsRef.current = donationsRef.current.filter(
						(d) => d.id !== donation.id,
					);

					const newCurrentDonation = donationsRef.current.at(0);

					setCurrentDonation(undefined);
					setTimeout(() => {
						if (newCurrentDonation) {
							playMessage({ donation: newCurrentDonation });
						}
					}, 0);
				},
				skip ? 0 : 3000,
			);
		},
		[],
	);

	const playMessage = useCallback(
		({ donation }: { donation: IClientDonation }) => {
			if (settingsRef.current && !settingsRef.current.alert_paused) {
				setTimeout(() => {
					if (settingsRef.current && donationsRef.current.length) {
						const alert = getAlertByDonation({
							alerts: alertsRef.current,
							donation: donation,
						});

						if (!alert) return;
						websocketService.send({
							event: AppEvent.AlertPlaying,
							data: donation.id,
						});

						if (donation.audio) {
							messageAudioRef.current.src = `static/${donation.audio}`;
							messageAudioRef.current.volume =
								settingsRef.current.tts_volume / 100;
						}
						alertAudioRef.current.src = `static/${alert.audio}`;
						alertAudioRef.current.volume = alert.audio_volume / 100;
						alertAudioRef.current.play();
						setCurrentDonation(donation);
						setCurrentAlert(alert);
					}
				}, settingsRef.current.moderation_duration);
			}
		},
		[],
	);

	const testAlert = useCallback((id: string) => {
		const alert = alertsRef.current.find((alert) => alert.id === id);
		if (!alert) return;
		const donation: IClientDonation = {
			id: crypto.randomUUID(),
			service_id: crypto.randomUUID(),
			amount:
				alert.variation_conditions === AlertVariationConditions.AmountIsEqual
					? alert.amount
					: alert.amount + 1,
			user_name: t("alert.test_name"),
			played: false,
			text: t("alert.test_text"),
			currency: Currency.EUR,
			display_amount: 1,
			display_currency: Currency.EUR,
			created_at: Math.round(new Date().getTime() / 1000),
			service: ServiceType.TributeBot,
		};
		if (!donationsRef.current.length && settingsRef.current) {
			websocketService.send({
				event: AppEvent.AlertPlaying,
				data: donation.id,
			});

			if (donation.audio) {
				messageAudioRef.current.src = `static/${donation.audio}`;
				messageAudioRef.current.volume = settingsRef.current.tts_volume / 100;
			}
			alertAudioRef.current.src = `static/${alert.audio}`;
			alertAudioRef.current.volume = alert.audio_volume / 100;
			alertAudioRef.current.play();
			setCurrentDonation(donation);
			setCurrentAlert(alert);
		}
	}, []);

	const skipMessage = useCallback(
		(id: string) => {
			if (currentDonation?.id === id) {
				handleAudioEnd({ donation: currentDonation, skip: true });
			} else {
				donationsRef.current = donationsRef.current.filter(
					(donation) => donation.id !== id,
				);
			}
		},
		[handleAudioEnd, currentDonation],
	);
	const skipPlayingMessage = useCallback(() => {
		if (currentDonation) {
			handleAudioEnd({ donation: currentDonation, skip: true });
		}
	}, [handleAudioEnd, currentDonation]);

	const handleNewDonation = useCallback(
		(donation: IClientDonation) => {
			donationsRef.current = [...donationsRef.current, donation];
			if (donationsRef.current.length === 1) {
				playMessage({ donation: donation });
			}
		},
		[playMessage],
	);
	const handleReplayMessage = useCallback(
		(donation: IClientDonation) => {
			donationsRef.current = [donation, ...donationsRef.current];

			if (donationsRef.current.length === 1) {
				playMessage({ donation: donation });
			}
		},
		[playMessage],
	);

	const handleSoundEnd = useCallback(() => {
		if (currentDonation?.audio) {
			messageAudioRef.current.play();
		} else {
			handleAudioEnd({ donation: currentDonation });
		}
	}, [currentDonation, handleAudioEnd]);

	useEffect(() => {
		messageAudioRef.current.onended = () =>
			handleAudioEnd({ donation: currentDonation });
		messageAudioRef.current.onerror = () =>
			handleAudioEnd({ donation: currentDonation });

		return () => {
			messageAudioRef.current.onended = null;
			messageAudioRef.current.onerror = null;
		};
	}, [currentDonation, handleAudioEnd]);

	useEffect(() => {
		alertAudioRef.current.onended = handleSoundEnd;
		alertAudioRef.current.onerror = handleSoundEnd;

		return () => {
			alertAudioRef.current.onended = null;
			alertAudioRef.current.onerror = null;
		};
	}, [handleSoundEnd]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IClientDonation>(
			AppEvent.Donation,
			handleNewDonation,
		);

		return () => unsubscribe();
	}, [handleNewDonation]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IClientDonation>(
			AppEvent.ReplayAlert,
			handleReplayMessage,
		);

		return () => unsubscribe();
	}, [handleReplayMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.SkipAlert,
			(id) => {
				skipMessage(id);
			},
		);

		return () => unsubscribe();
	}, [skipMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<string>(
			AppEvent.TestAlert,
			(id) => {
				testAlert(id);
			},
		);

		return () => unsubscribe();
	}, [testAlert]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<null>(
			AppEvent.SkipPlayingAlert,
			skipPlayingMessage,
		);

		return () => unsubscribe();
	}, [skipPlayingMessage]);

	useEffect(() => {
		const unsubscribe = websocketService.subscribe<IAlert[]>(
			AppEvent.Alerts,
			(alerts) => {
				alertsRef.current = alerts;
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
						playMessage({ donation: donation });
					}
					return;
				}
				settingsRef.current = settings;
			},
		);

		return () => unsubscribe();
	}, [playMessage]);

	return {
		currentDonation,
		currentAlert,
		settings: settingsRef.current,
	};
};
export default usePlayAlert;
