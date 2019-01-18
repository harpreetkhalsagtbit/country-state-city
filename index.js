var countryList = require("./lib/country.json")
var stateList = require("./lib/state.json")
var cityList = require("./lib/city.json")

var country_state_city = {
	getCountryById: function (id) {
		return _findEntry(countryList, id);
	},
	getStateById: function (id) {
		return _findEntry(stateList, id);
	},
	getCityById: function (id) {
		return _findEntry(cityList, id);
	},
	getStatesOfCountry: function (countryId) {
		var states = stateList.filter(function (value, index) {
			return value.country_id == countryId
		})
		return states.sort(compare)
	},
	getCitiesOfState: function (stateId) {
		var cities = cityList.filter(function (value, index) {
			return value.state_id == stateId
		})
		return cities.sort(compare)
	},
	getAllCountries: function () {
		return countryList;
	}

}

let _findEntry = (source, id) => {
	if (!isNaN(id) && source != null) {
		let idx = source.findIndex((c, i) => c.id === id);
		return (idx !== -1) ? source[idx] : "";
	}
	else return "";
}

function compare(a, b) {
	if (a.name < b.name)
		return -1;
	if (a.name > b.name)
		return 1;
	return 0;
}

module.exports = country_state_city;