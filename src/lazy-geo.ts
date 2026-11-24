/**
 * Like `lib/lazy`, but city rows include latitude and longitude, the same as
 * City.getCitiesOfState and City.getCitiesOfCountry. Each country file is about 3 times larger.
 *
 *   import { loadCitiesOfState } from 'country-state-city/lib/lazy-geo';
 */
import { cityGeoLoaders } from './generated/geoLoaders';
import { loadCountryFile, citiesOfState, citiesOfCountry, CityFile } from './lazyLoader';
import { ICity } from './interface';

const toCity = ([name, latitude, longitude]: string[], countryCode: string, stateCode: string): ICity => {
	return { name, countryCode, stateCode, latitude, longitude };
};

// Cities of one state with coordinates, sorted by name. Loads only that country's file.
export async function loadCitiesOfState(countryCode: string, stateCode: string): Promise<ICity[]> {
	if (!stateCode) return [];
	const file = await loadCountryFile<CityFile<string[]>>('cities-geo', cityGeoLoaders, countryCode);
	return citiesOfState(file, countryCode, stateCode, toCity);
}

// Cities of one country with coordinates, sorted by name.
export async function loadCitiesOfCountry(countryCode: string): Promise<ICity[]> {
	const file = await loadCountryFile<CityFile<string[]>>('cities-geo', cityGeoLoaders, countryCode);
	return citiesOfCountry(file, countryCode, toCity);
}
