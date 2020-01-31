country-state-city
==============================
Basic library for Country, State and City forked from

https://github.com/harpreetkhalsagtbit/country-state-city

Data taken from:

https://github.com/hiiamrohit/Countries-States-Cities-database

# Install
`npm i country-state-city-plus`

# Usage

## Latest Release : `v1.0.0` (First Major Version Release - Not backward compatible)
  - ES6 Module usage

     ```js
     import csc from 'country-state-city'

     // Import Interfaces`
     import { ICountry, IState, ICity } from 'country-state-city'
     ```
  - AMD Module usage

    ```js
    let csc = require('country-state-city').default
    ```


# Docs

visit for the functions

https://github.com/harpreetkhalsagtbit/country-state-city/#readme



getCountryByName(name)
---------------

It accepts a valid `CountryName` and   returns *Country Details*

type: **json | ICountry**

```js
{
	"id": "4",
	"sortname": "AS",
	"name": "American Samoa",
	"phonecode": "1684"
}
```

getStateByName(name)
---------------

It accepts a valid `StateName` and   returns *State Details*

type: **json | ICountry**

```js
{
	"id": 4119,
	"name": "Midlands",
	"country_id": "246"
}
```

getCityByName(name)
---------------

It accepts a valid `CityName` and   returns *City Details*

type: **json | ICity**

```js
{
	"id": "3",
	"name": "Port Blair",
	"state_id": "1"
}
```