
import { findEntryByCode } from './utils';
import { ICountry } from './interface';
import { fetchAsset } from './utils/fetch-asset';

// Get a country by isoCode.
async function getCountryByCode(isoCode: string): Promise<ICountry | undefined> {
	if (!isoCode) return undefined;

	const countryList = await fetchAsset<ICountry>('country');

	return findEntryByCode(countryList, isoCode);
}

// Get a list of all countries.
async function getAllCountries(): Promise<ICountry[]> {
	return await fetchAsset<ICountry>('country');
}

export default {
	getCountryByCode,
	getAllCountries,
};
