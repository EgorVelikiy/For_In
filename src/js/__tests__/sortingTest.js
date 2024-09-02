import sorting from '../sort'


test('Проверка сортировки', () => {
	const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
	const sorted_keys = ["attack", "level"];

	const res = sorting(obj, sorted_keys);

	const result = [
		{ key: 'attack', value: 80 },
		{ key: 'level', value: 2 },
		{ key: 'defence', value: 40 },
		{ key: 'health', value: 10 },
		{ key: 'name', value: 'мечник' }
	]
	
	expect(res).toEqual(result);
});


test('Проверка несуществующего ключа', () => {
	const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
	const sorted_keys = ["age", "level"];

	expect(() => {sorting(obj, sorted_keys)}).toThrow()
});

