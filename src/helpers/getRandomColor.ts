const getRandomColor = (colors: string[]) => {
	return colors[Math.floor(Math.random() * colors.length)];
};
export default getRandomColor;
