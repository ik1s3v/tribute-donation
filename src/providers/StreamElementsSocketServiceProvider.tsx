import type { Context, ReactNode } from "react";
import type StreamElementsSocketService from "../services/streamElementsSocketService";

const StreamElementsSocketServiceProvider = ({
	children,
	context,
	streamElementsSocketService,
}: {
	children: ReactNode;
	context: Context<StreamElementsSocketService | null>;
	streamElementsSocketService: StreamElementsSocketService;
}) => {
	return (
		<context.Provider value={streamElementsSocketService}>
			{children}
		</context.Provider>
	);
};

export default StreamElementsSocketServiceProvider;
