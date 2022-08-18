import fs from 'fs';
import path from 'path';
import { ICountry } from './interface';

// Array of Interface ICountry
let countryList: Array<ICountry> = [];

// Get a list of all countries.
const getAllCountries = (): ICountry[] => {
	if (countryList.length === 0) {
		const all: any = fs.readFileSync(path.join(__dirname, 'assets/country.json'), 'utf-8');
		countryList = JSON.parse(all);
	}

	return countryList;
};

// Get a country by isoCode.
const getCountryByCode = (code: string = ''): ICountry => {
	// get data from file or cache
	const country: any = getAllCountries().find((countryItem: any) => {
		return countryItem.isoCode === code;
	});
	return country;
};
// console.log(getAllCountries().length);
// console.log(getAllCountries().length);
export default {
	getCountryByCode,
	getAllCountries,
};
