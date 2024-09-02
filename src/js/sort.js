export default function sorting(obj, sorted_keys) {
	const result = []

	for (let key of sorted_keys) {
		if (obj[key]) {
			result.push({key: key, value: obj[key]})
		delete obj[key]
		} else {
			throw new Error('Такого ключа не существует')
		}
	}

	const sorted = Object.keys(obj).sort((a, b) => a > b ? 1 : -1)

	for (let key in sorted) {
		result.push({key: sorted[key], value: obj[sorted[key]]})
	}

	return result
}
