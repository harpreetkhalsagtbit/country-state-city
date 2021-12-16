import cityList from '../assets/city.json';
import { compare } from '../utils';
// Get a list of all cities.
function getAllCities() {
    return cityList;
}
// Get a list of cities belonging to a specific state and country.
function getCitiesOfState(countryCode, stateCode) {
    if (!stateCode)
        return [];
    if (!countryCode)
        return [];
    var cities = cityList.filter(function (value) {
        return value.countryCode === countryCode && value.stateCode === stateCode;
    });
    return cities.sort(compare);
}
// Get a list of cities belonging to a specific country.
function getCitiesOfCountry(countryCode) {
    if (!countryCode)
        return [];
    var cities = cityList.filter(function (value) {
        return value.countryCode === countryCode;
    });
    return cities.sort(compare);
}
export default {
    getAllCities: getAllCities,
    getCitiesOfState: getCitiesOfState,
    getCitiesOfCountry: getCitiesOfCountry,
};
