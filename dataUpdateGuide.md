# City data
1. To add a new city, add the city to the `allCities.geo.json` and `allCities.lite.json` in the respective state and country folder.
2. To remove a city, remove it from the `allCities.geo.json` and `allCities.lite.json` in the respective state and country folder.
3. To update a city, update it in the `allCities.geo.json` and `allCities.lite.json` in the respective state and country folder.

# State data
1. To add a new state, add the state data to the `allStates.geo.json` and `allStates.lite.json` in the respective country folder. Also, you need to add a new folder with name in the format `<stateName>-<stateIsoCode>` in the country folder and add cities respectively as mentioned above.
2. To remove a state, remove the state data from `allStates.geo.json` and `allStates.lite.json` in the respective country folder and then remove the state folder.
3. To udpate a state, update the state data in the `allStates.geo.json` and `allStates.lite.json` in the respective country folder.
4. If the state name is updated then you also need to rename the state folder.
5. If the state isoCode is updated then you need to update it in all the cities of that state.

# Country data
1. To add a new country, add the country data to the `allCountries.geo.json`, `allCountries.lite.json`, `allCountries.timezones.json`. Also, you need to add a new folder with a name using the format `<countryName>-<countryIsoCode>` in the country folder and then add states and cities respectively as mentioned above.
2. To remove a country, remove the country data from `allCountries.geo.json`, `allCountries.lite.json`, `allCountries.timezones.json` and then remove the state folder.
3. To udpate a country, update the data in the `allCountries.geo.json`, `allCountries.lite.json`, `allCountries.timezones.json` in the respective country folder.
4. If the country name is updated then you also need to rename the country folder.
5. If the country isoCode is updated then you need to update it in all the states and cities of that country.
