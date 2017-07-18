var countryList = require("./lib/country.json")
var stateList = require("./lib/state.json")
var cityList = require("./lib/city.json")

console.log(countryList)
module.exports = {
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
		var states = statelist.filter(function(value, index) {
			return value.country_id == countryId
		})
		return states
	},
	getCitiesOfState: function(stateId) {
		var cities = citylist.filter(function(value, index) {
			return value.state_id == stateId
		})
		return cities
	},
	getAllCountries: function(stateId) {
		return countryList;
	}

}