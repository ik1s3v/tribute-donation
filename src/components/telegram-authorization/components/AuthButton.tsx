import { Button, CircularProgress } from "@mui/material";
import type { ReactNode } from "react";

const AuthButton = ({
	onClick,
	isPending = false,
	children,
}: {
	onClick?: () => void;
	isPending?: boolean;
	children: ReactNode;
}) => {
	return (
		<Button
			variant="contained"
			onClick={onClick}
			disabled={isPending}
			sx={{ height: 40 }}
		>
			{isPending ? (
				<CircularProgress size={25} sx={{ placeSelf: "center" }} />
			) : (
				children
			)}
		</Button>
	);
};
export default AuthButton;
