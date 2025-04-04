import type { IAlert, IMessage } from "../../shared/types";

const getAlertByMessage = ({
	alerts,
	message,
}: { alerts: IAlert[]; message: IMessage }) => {
	console.log(message);
	return alerts[0];
};
export default getAlertByMessage;
