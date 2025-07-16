const generateUniqueColors = (count: number) => {
	const colors = [];
	const usedColors = new Set();

	while (colors.length < count) {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);

		if (
			(r === 0 && g === 0 && b === 0) ||
			(r === 255 && g === 255 && b === 255)
		) {
			continue;
		}

		const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

		if (!usedColors.has(hex)) {
			usedColors.add(hex);
			colors.push(hex);
		}
	}

	return colors;
};
export default generateUniqueColors;
