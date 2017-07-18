var countryList = require("./lib/country.json")
var stateList = require("./lib/state.json")
var cityList = require("./lib/city.json")

var country_state_city = {
	getCountryById: function(id) {
		if(!isNaN(+(id)))
			return countryList[+(id)]
		else
			return ""
	},
	getStateById: function(id) {
		if(!isNaN(+(id)))
			return stateList[+(id)];
		else
			return ""
	},
	getCityById: function(id) {
		if(!isNaN(+(id)))
			return cityList[+(id)];
		else
			return ""
	},
	getStatesOfCountry: function(countryId) {
		var states = stateList.filter(function(value, index) {
			return value.country_id == countryId
		})
		return states
	},
	getCitiesOfState: function(stateId) {
		var cities = cityList.filter(function(value, index) {
			return value.state_id == stateId
		})
		return cities
	},
	getAllCountries: function() {
		return countryList;
	}

}

module.exports = country_state_city;