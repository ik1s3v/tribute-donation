import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { ViewType } from "../../../../../../shared/enums";
import View from "./View";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../../../../store";
import { setAlert } from "../../../../../store/slices/alertsSlice";
const ViewSettings = () => {
	const alert = useSelector((state: AppState) => state.alertsState.alert);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const imageOptions = [
		{
			value: ViewType.Top,
			element: (
				<View
					gridTemplateAreas={`"Image"
                                       "Text"`}
					description={t("view.top")}
				/>
			),
		},
		{
			value: ViewType.Bottom,
			element: (
				<View
					gridTemplateAreas={`"Text"
                                       "Image"`}
					description={t("view.bottom")}
				/>
			),
		},
		{
			value: ViewType.Left,
			element: (
				<View gridTemplateAreas={`"Image Text"`} description={t("view.left")} />
			),
		},
		{
			value: ViewType.Right,
			element: (
				<View
					gridTemplateAreas={`"Text Image"`}
					description={t("view.right")}
				/>
			),
		},
		{
			value: ViewType.Overlay,
			element: (
				<View gridTemplateAreas={`""`} description={t("view.overlay")} />
			),
		},
	];

	return (
		alert && (
			<RadioGroup
				row
				name="image-selection"
				value={alert.view_type}
				onChange={(event) => {
					dispatch(
						setAlert({ ...alert, view_type: event.target.value as ViewType }),
					);
				}}
				style={{ justifyContent: "center" }}
			>
				{imageOptions.map((option) => (
					<FormControlLabel
						key={option.value}
						value={option.value}
						control={<Radio sx={{ display: "none" }} />}
						label={
							<Box
								sx={(theme) => ({
									border: 4,
									borderRadius: 1,
									borderColor:
										alert.view_type === option.value
											? theme.palette.primary.main
											: "transparent",
									padding: "4px",
									margin: "8px",
									cursor: "pointer",
									"&:hover": {
										opacity: 0.8,
									},
								})}
							>
								{option.element}
							</Box>
						}
					/>
				))}
			</RadioGroup>
		)
	);
};
export default ViewSettings;
