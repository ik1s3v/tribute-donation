import { open } from "@tauri-apps/plugin-dialog";
import { readFile, writeFile, BaseDirectory } from "@tauri-apps/plugin-fs";
import getFilenameFromPath from "../../../../../utils/getFilenameFromPath";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { convertFileSrc } from "@tauri-apps/api/core";
import { setAlert } from "../../../../../store/slices/alertsSlice";
const ImageSettings = () => {
	const alert = useSelector((state: AppState) => state.alertsState.alert);
	const dispatch = useDispatch();
	const appDataDir = useSelector(
		(state: AppState) => state.mainState.appDataDir,
	);

	return (
		alert && (
			<div
				style={{
					display: "flex",
					placeContent: "center",
				}}
			>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					style={{ width: 300, cursor: "pointer" }}
					src={convertFileSrc(`${appDataDir}/static/${alert.image}`)}
					alt="MessageImage"
					onClick={() => {
						open({
							multiple: false,
							directory: false,
							filters: [
								{
									name: "Images",
									extensions: ["png", "jpg", "jpeg", "gif", "bmp"],
								},
							],
						}).then((path) => {
							if (!path) return;
							const fileName = getFilenameFromPath(path);
							if (!fileName) return;

							readFile(path).then((data) => {
								writeFile(`static/${getFilenameFromPath(fileName)}`, data, {
									baseDir: BaseDirectory.AppLocalData,
								}).then(() => {
									dispatch(setAlert({ ...alert, image: fileName }));
								});
							});
						});
					}}
				/>
			</div>
		)
	);
};
export default ImageSettings;
