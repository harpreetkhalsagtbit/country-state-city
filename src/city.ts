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

let convertedCityList: ICity[] = [];
// Get a list of all cities.
function getAllCities(keys: string[] = KEYS): ICity[] {
	if (convertedCityList.length) {
		return convertedCityList;
	}

	const cityJSON: string[][] = cityList;
	convertedCityList = convertArrayToObject(keys ?? KEYS, cityJSON);
	return (convertedCityList as unknown as ICity[])
}

// Get a list of cities belonging to a specific state and country.
export default function getCitiesOfState(countryCode: string, stateCode: string): ICity[] {
	if (!stateCode) return [];
	if (!countryCode) return [];

	const cityList = getAllCities();
	const cities = (cityList as ICity[]).filter((value: { countryCode: string; stateCode: string }) => {
		return value.countryCode === countryCode && value.stateCode === stateCode;
	});

	return cities.sort(compare);
}
