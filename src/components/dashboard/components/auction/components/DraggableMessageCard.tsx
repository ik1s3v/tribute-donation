import { useDraggable } from "@dnd-kit/core";
import AuctionMessageCard from "./AuctionMessageCard";
import { CSS } from "@dnd-kit/utilities";
import type { IMessage } from "../../../../../../shared/types";

const DraggableMessageCard = ({ message }: { message: IMessage }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: message.id,
		data: message,
	});

	return (
		<div
			ref={setNodeRef}
			style={{
				transform: CSS.Translate.toString(transform),
			}}
			{...listeners}
			{...attributes}
		>
			<AuctionMessageCard message={message} />
		</div>
	);
};
export default DraggableMessageCard;
