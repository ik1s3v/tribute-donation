const isValidLongitude = (value: number | undefined) => {
	if (!value) return false;
	return value >= -180 && value <= 180;
};
export default isValidLongitude;
