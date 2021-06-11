import Country from '../src/country';

const executeAllTests = () => {
	describe('constructor', () => {
		test('constructs a country', () => {
			const country = new Country('Foo', '1', 'XX', 'FLAGEMOJI', '$', null, null, []);

			expect(country).not.toBeNull();
		});
	});

	describe('byIsoCode', () => {
		test('it finds Canada', () => {
			const lookupResult = Country.byIsoCode('CA');

			expect(lookupResult).not.toBeNull();
			expect(lookupResult!.name).toEqual('Canada');
			expect(lookupResult!.isoCode).toEqual('CA');
		});

		test('it finds the USA', () => {
			const lookupResult = Country.byIsoCode('US');

			expect(lookupResult).not.toBeNull();
			expect(lookupResult!.name).toEqual('United States');
			expect(lookupResult!.isoCode).toEqual('US');
		});

		test('it returns null when not found', () => {
			expect(Country.byIsoCode('XX')).toBeNull();
		});
	});

	describe('all', () => {
		test('it gets all countries', () => {
			const result = Country.all();

			expect(result).not.toBeNull();
			expect(result[0]).not.toEqual([]);
		});
	});
};

export default executeAllTests;
executeAllTests();
