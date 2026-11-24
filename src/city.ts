import cityList from './assets/city.json';
import { compare, convertArrayToObject } from './utils';
import { ICity } from './interface';

const KEYS = [
	"name",
	"countryCode",
	"stateCode",
	"latitude",
	"longitude"
]

// Cities converted with the default KEYS, built on first use.
let convertedCityList: ICity[] = [];

function getDefaultCityList(): ICity[] {
	if (!convertedCityList.length) {
		convertedCityList = convertArrayToObject(KEYS, cityList as string[][]);
	}
	return convertedCityList;
}

// Get a list of all cities.
// Returns a copy, so sorting or changing the list doesn't affect later calls.
// Custom `keys` are converted on every call and never replace the default list.
function getAllCities(keys: string[] = KEYS): ICity[] {
	if (keys && keys !== KEYS) {
		return convertArrayToObject(keys, cityList as string[][]);
	}
	return getDefaultCityList().slice();
}

// Get a list of cities belonging to a specific state and country.
function getCitiesOfState(countryCode: string, stateCode: string): ICity[] {
	if (!stateCode) return [];
	if (!countryCode) return [];

	const cities = getDefaultCityList().filter((value: { countryCode: string; stateCode: string }) => {
		return value.countryCode === countryCode && value.stateCode === stateCode;
	});

	return cities.sort(compare);
}

// Get a list of cities belonging to a specific country.
function getCitiesOfCountry(countryCode: string): ICity[] | undefined {
	if (!countryCode) return [];

	const cities = getDefaultCityList().filter((value: { countryCode: string }) => {
		return value.countryCode === countryCode;
	});
	return cities.sort(compare);
}

function sortByStateAndName(cities: ICity[]): ICity[] {
	return cities.sort((a, b) => {
		const result = compare<ICity>(a, b, (entity) => {
			return `${entity.countryCode}-${entity.stateCode}`;
		});
		if (result !== 0) return result;
		return compare(a, b);
	});
}

export default {
	getAllCities,
	getCitiesOfState,
	getCitiesOfCountry,
	sortByStateAndName,
};
