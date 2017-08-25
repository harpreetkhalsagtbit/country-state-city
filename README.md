country-state-city
==============================
Basic library for Country, State and City

Data taken from:

https://github.com/hiiamrohit/Countries-States-Cities-database

# Docs

getCountryById(id)
---------------

It accepts a valid `CountryId` and   returns *Country Details*

type: *json*

getStateById(id)
---------------

It accepts a valid `StateId` and   returns *State Details*

type: *json*

getCityById(id)
---------------

It accepts a valid `CityId` and   returns *City Details*

type: *json*

getStatesOfCountry(countryId)
---------------

It accepts a valid `CountryId` and   returns *all States* as Array of JSON

type: *array of json*

getCitiesOfState(stateId)
---------------

It accepts a valid `CityId` and   returns *all Cities* as Array of JSON

type: *array of json*

getAllCountries
---------------
It returns *all Countries*

type: *array of json*
