const computePXSize = ({
	percent,
	width,
	coefficient = 1,
}: { percent: number; width: number; coefficient?: number }) => {
	return `${(width / 100) * (percent / 100) * coefficient}px`;
};
export default computePXSize;
