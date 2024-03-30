import countryList from './assets/country.json';
import { compare, findEntryByCode } from './utils';
import { ICountry, CountryFields } from './interface';

// Get a country by isoCode.
function getCountryByCode(isoCode: string): ICountry | undefined {
	if (!isoCode) return undefined;

	return findEntryByCode(countryList, isoCode);
}

// Get a list of all countries.
function getAllCountries(fields?: CountryFields[]): ICountry[] | Partial<ICountry>[] {
  if (fields && fields.length > 0) {
    return countryList.filter(country => {
      return fields.every(field => country.hasOwnProperty(field));
    }).map(country => 
       Object.fromEntries(
        Object.entries(country)
        .filter(([key]) => fields.includes(key as keyof ICountry)) 
      )
    );
  }
	return countryList;
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
};
