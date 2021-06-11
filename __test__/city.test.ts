import City from '../src/city';

const executeAllTests = () => {
	describe('constructor', () => {
		test('constructs a city', () => {
			const city = new City('Foo', 'XX', 'XX', null, null);

			expect(city).not.toBeNull();
		});
	});

	describe('withinStateAndCountry', () => {
		test('it finds cities', () => {
			const lookupResult = City.withinStateAndCountry('DL', 'IN');
			const names = lookupResult.map((city) => city.name);

			expect(names).toEqual([
				'Alīpur',
				'Bawāna',
				'Central Delhi',
				'Delhi',
				'Deoli',
				'East Delhi',
				'Karol Bāgh',
				'Najafgarh',
				'Narela',
				'New Delhi',
				'North Delhi',
				'North East Delhi',
				'North West Delhi',
				'Nāngloi Jāt',
				'Pitampura',
				'Rohini',
				'South Delhi',
				'South West Delhi',
				'West Delhi',
			]);
		});
	});

	describe('withinCountry', () => {
		test('it finds cities', () => {
			const lookupResult = City.withinCountry('TV');
			const names = lookupResult.map((city) => city.name);

			expect(names).toEqual([
				'Alapi Village',
				'Asau Village',
				'Fakaifou Village',
				'Funafuti',
				'Kulia Village',
				'Niulakita',
				'Savave Village',
				'Tanrake Village',
				'Toga Village',
			]);
		});
	});

	describe('all', () => {
		test('it gets all cities', () => {
			const result = City.all();

			expect(result).not.toBeNull();
			expect(result[0]).not.toEqual([]);
		});
	});
};

export default executeAllTests;
executeAllTests();
