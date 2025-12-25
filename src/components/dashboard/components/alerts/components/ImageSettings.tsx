import { convertFileSrc } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { BaseDirectory, readFile, writeFile } from "@tauri-apps/plugin-fs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../../../../../shared/slices/alertsSlice";
import type { AppState } from "../../../../../store";
import getFilenameFromPath from "../../../../../utils/getFilenameFromPath";
import OnOffSwitch from "../../../../OnOffSwitch";

const ImageSettings = () => {
	const { alert } = useSelector((state: AppState) => state.alertsState);
	console.log("alert:", alert);
	const dispatch = useDispatch();
	const { appDataDir } = useSelector((state: AppState) => state.mainState);
	const { t } = useTranslation();

	return (
		alert && (
			<div
				style={{
					display: "flex",
					placeContent: "center",
					placeItems: "center",
					gap: 10,
					flexDirection: "column",
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
				<div>
					<div>
						<span>{t("image.show")}:</span>
					</div>

					<OnOffSwitch
						checked={alert.show_image}
						onChange={() => {
							dispatch(setAlert({ ...alert, show_image: !alert.show_image }));
						}}
					/>
				</div>
			</div>
		)
	);
};
export default ImageSettings;
