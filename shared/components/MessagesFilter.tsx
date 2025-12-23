import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Checkbox, FormGroup, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../src/store";
import { setFilter } from "../slices/messagesSlice";
import type { IMessagesFilter } from "../types";

const MessagesFilter = () => {
	const { filter } = useSelector((state: AppState) => state.messagesState);
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const { t } = useTranslation();

	return (
		<>
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<IconButton onClick={handleClick}>
					<FilterAltIcon></FilterAltIcon>
				</IconButton>
			</div>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<FormGroup>
					{Object.entries(filter).map(([key]) => (
						<MenuItem
							key={key}
							onClick={() =>
								dispatch(
									setFilter({
										...filter,
										[key]: !filter[key as keyof IMessagesFilter],
									}),
								)
							}
						>
							<div>
								<Checkbox checked={filter[key as keyof IMessagesFilter]} />
								<span>{t(`filter.${key}`)}</span>
							</div>
						</MenuItem>
					))}
				</FormGroup>
			</Menu>
		</>
	);
};
export default MessagesFilter;
