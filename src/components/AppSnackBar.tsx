import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackBar } from "../store/slices/snackBarSlice";
import type { AppState, AppDispatch } from "../store";

export const AppSnackBar = () => {
	const snackBarState = useSelector((state: AppState) => state.snackBarState);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<>
			<Snackbar
				open={snackBarState.isShowSnackBar}
				autoHideDuration={6000}
				onClose={() => dispatch(hideSnackBar())}
				sx={{ zIndex: 3 }}
			>
				<Alert
					variant="filled"
					severity={snackBarState.alertSeverity}
					sx={{
						width: "100%",
						fontSize: "14px",
						fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
					}}
				>
					{snackBarState.snackBarMessage}
				</Alert>
			</Snackbar>
		</>
	);
};
