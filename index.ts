import countryList from './lib/country.json';
import stateList from './lib/state.json';
import cityList from './lib/city.json';

 export default {
	getCountryById: function (id: string) {
		return _findEntry(countryList, id);
	},
	getStateById: function (id: string) {
		return _findEntry(stateList, id);
	},
	getCityById: function (id: string) {
		return _findEntry(cityList, id);
	},
	getStatesOfCountry: function (countryId: string) {
		var states = stateList.filter(function (value, index) {
			return value.country_id === countryId
		})
		return states.sort(compare)
	},
	getCitiesOfState: function (stateId: string) {
		var cities = cityList.filter(function (value, index) {
			return value.state_id === stateId
		})
		return cities.sort(compare)
	},
	getAllCountries: function () {
		return countryList;
	}
}

let _findEntry = (source: any, id: string) => {
	if (id && source != null) {
		let idx = source.findIndex((c:any) => c.id === id);
		return (idx !== -1) ? source[idx] : "";
	}
	else return "";
}

function compare(a:any, b:any) {
	if (a.name < b.name)
		return -1;
	if (a.name > b.name)
		return 1;
	return 0;
}
