const getRandomWinnerIndex = (weights: number[]) => {
	if (!weights.length) return 0;
	const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

	const random = Math.random() * totalWeight;

	let cumulativeWeight = 0;
	for (let i = 0; i < weights.length; i++) {
		cumulativeWeight += weights[i];
		if (random < cumulativeWeight) {
			return i;
		}
	}

	return weights.length - 1;
};
export default getRandomWinnerIndex;
