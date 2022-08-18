import fs from 'fs';
import path from 'path';

import { compare } from './utils';
import { ICity } from './interface';

// Array of Interface ICity
let cityList: Array<ICity> = [];

// Get a list of all states.
export const getAllCities = (): ICity[] => {
	if (cityList.length === 0) {
		const all: any = fs.readFileSync(path.join(__dirname, 'assets/city.json'), 'utf-8');
		cityList = JSON.parse(all);
	}

	return cityList;
};

// Get a list of cities belonging to a specific state and country.
function getCitiesOfState(countryCode: string, stateCode: string): ICity[] {
	if (!stateCode) return [];
	if (!countryCode) return [];

	const cities = getAllCities().filter((value: { countryCode: string; stateCode: string }) => {
		return value.countryCode === countryCode && value.stateCode === stateCode;
	});

	return cities.sort(compare);
}

// Get a list of cities belonging to a specific country.
function getCitiesOfCountry(countryCode: string): ICity[] | undefined {
	if (!countryCode) return [];

	const cities = getAllCities().filter((value: { countryCode: string }) => {
		return value.countryCode === countryCode;
	});
	return cities.sort(compare);
}

export default {
	getAllCities,
	getCitiesOfState,
	getCitiesOfCountry,
};
