import {Car} from "../types/Types";

const compareFunction = (a: Car, b: Car) => {
	if (!a.year || !b.year) console.error('в какой-то машине отсутствует год выпуска')
	if (a.year > b.year) return 1
	if (a.year < b.year) return -1
	return 0
}

export default compareFunction