import { Box } from "@mui/material";
import InfiniteMessages from "../../../shared/components/InfiniteMessages";
import { useGetMessagesInfiniteQuery } from "../../api/messagesApi";

const ObsDockMessages = () => {
	return (
		<Box
			sx={{
				background: (theme) => theme.palette.background.default,
				padding: "5px",
			}}
		>
			<InfiniteMessages
				useGetMessagesInfiniteQuery={useGetMessagesInfiniteQuery}
			></InfiniteMessages>
		</Box>
	);
};
export default ObsDockMessages;
