import { IconButton, type InputBaseProps, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import type { AppState } from "../../../../../store";
import { setSearchPattern } from "../../../../../store/slices/lotsSlice";

const LotSearch = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const { searchPattern } = useSelector((state: AppState) => state.lotsState);

	const onSearchPatternChange: InputBaseProps["onChange"] = (event) => {
		dispatch(setSearchPattern(event.target.value));
	};

	const clearSearch = () => {
		dispatch(setSearchPattern(""));
	};

	return (
		<TextField
			placeholder={t("lots.search")}
			value={searchPattern}
			onChange={onSearchPatternChange}
			slotProps={{
				input: {
					endAdornment: (
						<IconButton onClick={clearSearch} size="large">
							<CloseIcon />
						</IconButton>
					),
					startAdornment: <SearchIcon />,
				},
			}}
		/>
	);
};

export default LotSearch;
