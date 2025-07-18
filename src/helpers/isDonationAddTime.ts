const isDonationAddTime = ({
	is_greater_timer_adding_time,
	timer_adding_time,
	time,
}: {
	timer_adding_time: number;
	is_greater_timer_adding_time: boolean;
	time: number;
}) => {
	if (is_greater_timer_adding_time && time > timer_adding_time) {
		return true;
	}
	if (!is_greater_timer_adding_time && time < timer_adding_time) {
		return true;
	}
	return false;
};
export default isDonationAddTime;
