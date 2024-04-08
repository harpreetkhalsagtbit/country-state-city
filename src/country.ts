import countryList from './assets/country.json';
import { compare, findEntryByCode } from './utils';
import { ICountry } from './interface';
import africanCountries from './Continents/Continents';

// Get a country by isoCode.
function getCountryByCode(isoCode: string): ICountry | undefined {
	if (!isoCode) return undefined;

	return findEntryByCode(countryList, isoCode);
}

// Get a list of all countries.
function getAllCountries(): ICountry[] {
	return countryList;
}

// Get a list of all african countries.
function getAllAfricanCountries(): ICountry[] {
	const africanCountryNames = africanCountries.map((country) => {
		return country.name;
	});
	return countryList.filter((country) => {
		return africanCountryNames.includes(country.name);
	});
}

function sortByIsoCode(countries: ICountry[]): ICountry[] {
	return countries.sort((a, b) => {
		return compare<ICountry>(a, b, (entity) => {
			return entity.isoCode;
		});
	});
}

export default {
	getCountryByCode,
	getAllCountries,
	sortByIsoCode,
	getAllAfricanCountries,
};
