import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackBar } from "../../shared/slices/snackBarSlice";
import type { AppDispatch, AppState } from "../store";

export const AppSnackBar = () => {
	const { isShowSnackBar, alertSeverity, snackBarMessage } = useSelector(
		(state: AppState) => state.snackBarState,
	);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<>
			<Snackbar
				open={isShowSnackBar}
				autoHideDuration={6000}
				onClose={() => dispatch(hideSnackBar())}
				sx={{ zIndex: 999 }}
			>
				<Alert
					variant="filled"
					severity={alertSeverity}
					sx={{
						width: "100%",
						fontSize: "14px",
						fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
					}}
				>
					{snackBarMessage}
				</Alert>
			</Snackbar>
		</>
	);
};
