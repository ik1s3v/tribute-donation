import { CHARACTERS } from "../constants";

const getRandomFighterCharacter = () => {
	const values = Object.values(CHARACTERS);
	const randomIndex = Math.floor(Math.random() * values.length);
	return values[randomIndex];
};

export default getRandomFighterCharacter;
