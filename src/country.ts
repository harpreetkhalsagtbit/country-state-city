import countryList from './assets/country.json';
import { ICountry } from './interface';

// Get a list of all countries.
export default function getAllCountries(): ICountry[] {
	return countryList;
}