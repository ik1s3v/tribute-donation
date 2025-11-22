import { Box } from "@mui/material";
import InfiniteMessages from "../../../shared/components/InfiniteMessages";
import { useGetDonationsInfiniteQuery } from "../../api/donationsApi";

const ObsDockMessages = () => {
	return (
		<Box
			sx={{
				background: (theme) => theme.palette.background.default,
				padding: "5px",
				minHeight: "100vh",
			}}
		>
			<InfiniteMessages
				useGetDonationsInfiniteQuery={useGetDonationsInfiniteQuery}
			></InfiniteMessages>
		</Box>
	);
};
export default ObsDockMessages;
