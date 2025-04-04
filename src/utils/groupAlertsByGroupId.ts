import type { IAlert, IAlertsGroup } from "../../shared/types";

const groupAlertsByGroupId = (alerts: IAlert[]): IAlertsGroup[] => {
	const groupsMap = alerts.reduce<Record<string, IAlert[]>>((acc, obj) => {
		if (obj.group_id != null) {
			const key = obj.group_id;
			if (!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(obj);
		}
		return acc;
	}, {});

	return Object.entries(groupsMap).map(([group_id, items]) => ({
		group_id,
		items,
	}));
};
export default groupAlertsByGroupId;
