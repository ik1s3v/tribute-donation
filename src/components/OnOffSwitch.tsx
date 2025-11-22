import { Switch, useTheme } from "@mui/material";
import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import type { AppTheme } from "../theme/default";

const OnOffSwitch = ({
	checked,
	onChange,
}: {
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}) => {
	const { t } = useTranslation();
	const theme = useTheme<AppTheme>();
	return (
		<div>
			<span
				style={{ color: !checked ? undefined : theme.palette.switchOff.text }}
			>
				{t("off")}
			</span>
			<Switch checked={checked} onChange={onChange} />
			<span
				style={{ color: checked ? undefined : theme.palette.switchOff.text }}
			>
				{t("on")}
			</span>
		</div>
	);
};
export default OnOffSwitch;
