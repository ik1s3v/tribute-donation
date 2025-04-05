import { check, type Update } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";
import { useCallback, useEffect, useState } from "react";

const useUpdater = () => {
	const [update, setUpdate] = useState<Update | null>(null);
	const [isUpdating, setIsUpdating] = useState(false);
	useEffect(() => {
		if (!update) {
			check().then((update) => {
				setUpdate(update);
			});
		}
	}, [update]);

	const updateApp = useCallback(async () => {
		if (update && !isUpdating) {
			setIsUpdating(true);
			await update.downloadAndInstall();
			await relaunch();
			setIsUpdating(false);
		}
	}, [update, isUpdating]);

	return { updateApp, update, isUpdating };
};
export default useUpdater;
