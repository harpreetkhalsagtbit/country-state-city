import countryList from '../assets/country.json';
import { findEntryByCode } from '../utils';
// Get a country by isoCode.
function getCountryByCode(isoCode) {
    if (!isoCode)
        return undefined;
    return findEntryByCode(countryList, isoCode);
}
// Get a list of all countries.
function getAllCountries() {
    return countryList;
}
export default {
    getCountryByCode: getCountryByCode,
    getAllCountries: getAllCountries,
};
