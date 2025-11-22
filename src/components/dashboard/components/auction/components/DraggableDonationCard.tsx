import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { IClientDonation } from "../../../../../../shared/types";
import AuctionDonationCard from "./AuctionDonationCard";

const DraggableDonationCard = ({ donation }: { donation: IClientDonation }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: donation.id,
		data: donation,
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
			<AuctionDonationCard donation={donation} />
		</div>
	);
};
export default DraggableDonationCard;
