/* eslint-disable prettier/prettier */
const range = (from, to, step) => {
	const result = [];

	for (let i = from; i <= to; i += step)
		result.push(i);

	return result;
};

export default range;
