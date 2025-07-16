import type { IAuctionSettings } from "../../shared/types";

const isAuctionAddTime = (auctionSettings: IAuctionSettings, time: number) => {
	if (
		auctionSettings.is_greater_timer_adding_time &&
		time > auctionSettings.timer_adding_time
	) {
		return true;
	}
	if (
		!auctionSettings.is_greater_timer_adding_time &&
		time < auctionSettings.timer_adding_time
	) {
		return true;
	}
	return false;
};
export default isAuctionAddTime;
