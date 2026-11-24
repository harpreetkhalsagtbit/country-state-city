/* eslint-disable global-require */
// Each test loads a fresh copy of the modules, so a test can't pass or fail
// because of state another test left behind.
const fresh = () => {
	let mod: any;
	jest.isolateModules(() => {
		mod = require('../index');
	});
	return mod;
};

describe('getAll* results do not share state with the library', () => {
	test('sorting the result of getAllCountries does not change later results', () => {
		const { Country } = fresh();
		const before = Country.getAllCountries().map((c: any) => {
			return c.isoCode;
		});
		Country.sortByIsoCode(Country.getAllCountries());
		const after = Country.getAllCountries().map((c: any) => {
			return c.isoCode;
		});
		expect(after).toEqual(before);
	});

	// state.json and city.json are already stored in sort order, so sorting them is a no-op;
	// reversing shows the shared array just as well.
	test('changing the result of getAllStates does not change later results', () => {
		const { State } = fresh();
		const before = State.getAllStates().map((s: any) => {
			return `${s.countryCode}-${s.isoCode}`;
		});
		State.getAllStates().reverse();
		const after = State.getAllStates().map((s: any) => {
			return `${s.countryCode}-${s.isoCode}`;
		});
		expect(after).toEqual(before);
	});

	test('sortByIsoCode still sorts the array it is given, in place', () => {
		const { Country } = fresh();
		const list = Country.getAllCountries();
		const returned = Country.sortByIsoCode(list);
		expect(returned).toBe(list);
		expect(list[0].isoCode).toBe('AD');
	});
});
