import { compare } from './utils';
import { ICity } from './interface';
import { fetchAsset } from './utils/fetch-asset';

// Get a list of all cities.
async function getAllCities(): Promise<ICity[]> {
	return await fetchAsset<ICity>('city');
}

// Get a list of cities belonging to a specific state and country.
async function getCitiesOfState(countryCode: string, stateCode: string): Promise<ICity[]> {
	if (!stateCode) return [];
	if (!countryCode) return [];

	const cityList = await fetchAsset<ICity>('city');
	const cities = cityList.filter((value: { countryCode: string; stateCode: string }) => {
		return value.countryCode === countryCode && value.stateCode === stateCode;
	});
	return cities.sort(compare);
}

// Get a list of cities belonging to a specific country.
async function getCitiesOfCountry(countryCode: string): Promise<ICity[] | undefined> {
	if (!countryCode) return [];

	const cityList = await fetchAsset<ICity>('city');
	const cities = cityList.filter((value: { countryCode: string }) => {
		return value.countryCode === countryCode;
	});
	return cities.sort(compare);
}

export default {
	getAllCities,
	getCitiesOfState,
	getCitiesOfCountry,
};
