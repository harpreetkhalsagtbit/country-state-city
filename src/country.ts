import countryList from './assets/country.json';
import { findEntryByCode } from './utils';
import { ICountry } from './interface';

// Get a country by isoCode.
export function getCountryByCode(isoCode: string): ICountry | undefined {
	if (!isoCode) return undefined;

	return findEntryByCode(countryList, isoCode);
}

// Get a list of all countries.
export function getAllCountries(): ICountry[] {
	return countryList;
}

export default {
	getCountryByCode,
	getAllCountries,
};
