const isValidLatitude = (value: number | undefined) => {
	if (!value) return false;
	return value >= -90 && value <= 90;
};
export default isValidLatitude;
