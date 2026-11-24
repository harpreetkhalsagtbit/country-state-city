/**
 * Lazy, per-country access to the same data as Country, State and City.
 *
 *   import { getCountries, loadStatesOfCountry, loadCitiesOfState } from 'country-state-city/lib/lazy';
 *
 * Importing this module costs only the country names and codes (about 2 KB gzipped).
 * States and cities are loaded one country at a time, through dynamic import(), so bundlers
 * split them into separate chunks. City rows have no coordinates; use `lib/lazy-geo` for those.
 */
import countryList from './assets/lite/country.json';
import { stateLoaders, cityLoaders } from './generated/loaders';
import { loadCountryFile, citiesOfState, citiesOfCountry, CityFile } from './lazyLoader';
import { ICity, IState } from './interface';

export interface ICountryLite {
	name: string;
	isoCode: string;
}

const toCity = (name: string, countryCode: string, stateCode: string): ICity => {
	return { name, countryCode, stateCode };
};

// All countries (names and ISO codes), in the same order as Country.getAllCountries().
export function getCountries(): ICountryLite[] {
	return (countryList as string[][]).map(([isoCode, name]) => {
		return { name, isoCode };
	});
}

// States of one country, sorted by name. Resolves to [] for an unknown country code.
export async function loadStatesOfCountry(countryCode: string): Promise<IState[]> {
	const rows = (await loadCountryFile<string[][]>('states', stateLoaders, countryCode)) || [];
	return rows.map(([isoCode, name]) => {
		return { name, isoCode, countryCode };
	});
}

// Cities of one state, sorted by name. Loads only that country's file.
export async function loadCitiesOfState(countryCode: string, stateCode: string): Promise<ICity[]> {
	if (!stateCode) return [];
	const file = await loadCountryFile<CityFile<string>>('cities', cityLoaders, countryCode);
	return citiesOfState(file, countryCode, stateCode, toCity);
}

// Cities of one country, sorted by name.
export async function loadCitiesOfCountry(countryCode: string): Promise<ICity[]> {
	const file = await loadCountryFile<CityFile<string>>('cities', cityLoaders, countryCode);
	return citiesOfCountry(file, countryCode, toCity);
}
