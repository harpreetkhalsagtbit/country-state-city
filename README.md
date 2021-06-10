country-state-city
==============================
Basic library for Country, State and City

Data Source:<br>
https://github.com/dr5hn/countries-states-cities-database<br>
For any data related issue, you can raise a Issue [here](https://github.com/dr5hn/countries-states-cities-database/issues/new).

# Install
`npm i country-state-city`

# Usage

## Release : `v2.0.0` (Major Version Release - Not backward compatible)
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


## For versions `v0.1.8 and below`

  - ES6 Module usage
   
     ```js
     import csc from 'country-state-city'
     ```

  - AMD Module usage
  
    ```js
    let csc = require('country-state-city')
    ```

# Docs

getCountryByCode(countryCode)
---------------

It accepts a valid `CountryCode` eg: `'AS'` and   returns *Country Details*

type: **json | ICountry**

```js
{
	"isoCode": "IN",
	"name": "India",
	"phonecode": "91",
	"flag": "🇮🇳",
	"currency": "INR",
	"latitude": "20.00000000",
	"longitude": "77.00000000",
	"timezones": [
		{
			"zoneName": "Asia\/Kolkata",
			"gmtOffset": 19800,
			"gmtOffsetName": "UTC+05:30",
			"abbreviation": "IST",
			"tzName": "Indian Standard Time"
		}
	]
}
```

getStateByCodeAndCountry(stateCode, countryCode)
---------------

It accepts a valid `StateCode` eg: `'TG'` `CountryCode` eg: `'IN'` and   returns *State Details*

type: **json | ICountry**

```js
{
	"name": "Telangana",
	"isoCode": "TG",
	"countryCode": "IN",
	"latitude": "18.11243720",
	"longitude": "79.01929970"
}
```

getStatesOfCountry(countryCode)
---------------

It accepts a valid `CountryCode` and returns *all States* as Array of JSON

type: **array of json | IState**

```js
[
	{
		"name": "Delhi",
		"isoCode": "DL",
		"countryCode": "IN",
		"latitude": "28.70405920",
		"longitude": "77.10249020"
	}
]

```
getCitiesOfState(countryCode, stateCode)
---------------

It accepts a valid `CountryCode`, `StateCode` and returns *all Cities* as Array of JSON

type: **array of json | ICity**

```js
[
	{
		"name": "New Delhi",
		"countryCode": "IN",
		"stateCode": "DL",
		"latitude": "28.63576000",
		"longitude": "77.22445000"
	}
]

```

getCitiesOfCountry(countryCode)
---------------

It accepts a valid `CountryCode` and returns *all Cities* as Array of JSON

type: **array of json | ICity**

```js
[
	{
		"name": "New Delhi",
		"countryCode": "IN",
		"stateCode": "DL",
		"latitude": "28.63576000",
		"longitude": "77.22445000"
	}
]

```

getAllCountries
---------------
It returns **all Countries**

type: **array of json | ICountry**

```js
[
	{
		"isoCode": "IN",
		"name": "India",
		"phonecode": "91",
		"flag": "🇮🇳",
		"currency": "INR",
		"latitude": "20.00000000",
		"longitude": "77.00000000",
		"timezones": [
			{
				"zoneName": "Asia\/Kolkata",
				"gmtOffset": 19800,
				"gmtOffsetName": "UTC+05:30",
				"abbreviation": "IST",
				"tzName": "Indian Standard Time"
			}
		]
	}
]
```

getAllStates
---------------
It returns **all States**

type: **array of json | IState**

```js
[
	{
		"name": "Delhi",
		"isoCode": "DL",
		"countryCode": "IN",
		"latitude": "28.70405920",
		"longitude": "77.10249020"

	}
]
```

getAllCities
---------------
It returns **all Cities**

type: **array of json | ICity**

```js
[
	{
		"name": "Delhi",
		"isoCode": "DL",
		"countryCode": "IN",
		"latitude": "28.70405920",
		"longitude": "77.10249020"
	}
]
```

Special Thanks
---------------

[@baywet](https://github.com/baywet) - For mentoring Javascript to Typescript Conversion

[@dr5hn](https://github.com/dr5hn) - For updated World Data Dictionary

Change Logs
---------------
**v2.2.0** :: 

1. State, City Database update by (dr5hn)](https://github.com/dr5hn/countries-states-cities-database)

**v2.1.0** :: 

1. Fix [#53](https://github.com/harpreetkhalsagtbit/country-state-city/issues/53): returns wrong state as state codes can ne duplicate for different countries.
2. **Deprecate warning**: `getStateByCode`
3. New function - `getStateByCodeAndCountry`

**v2.0.0 (Backward Incompatible)** :: [Data Source (dr5hn)](https://github.com/dr5hn/countries-states-cities-database)

1. Not backward compatible with previous versions.
2. New and updated API functions.
3. Removed proprietor Indexed Id's for uniquely identifying Country, State, City. Instead now using standard isoCodes.
4. Data taken from more robust and accurate database.
5. Countries with their respective flags, isoCode, currencies, latitude, longitude & timezones.
6. States & cities with their latitude & longitude.

**v1.0.0** :: [Data Source (hiiamrohit)](https://github.com/hiiamrohit/Countries-States-Cities-database)
1. `export = {}` changed to `export default` in index.ts.
2. `Interface` type `re-exported` from `index.ts`.
3. `Compatible` with `ES6` module syntax.
4. `Compatible` with `AMD` module - using `require('../index').default`.
5. Add tests for Interface Re-Exports.
6. Test cases for both AMD modules and ES6 modules usage.
7. Common Test Cases are being shared between AMD and ES6 modules test files.

**v0.1.8** :: [Data Source (hiiamrohit)](https://github.com/hiiamrohit/Countries-States-Cities-database)
1. Development code - Javascript to Typescript conversion: [#12](https://github.com/harpreetkhalsagtbit/country-state-city/pull/12)

**v0.1.0**
1. Fix: [#2](https://github.com/harpreetkhalsagtbit/country-state-city/issues/2)
2. Fix: [#3](https://github.com/harpreetkhalsagtbit/country-state-city/issues/3)
3. Added some missing states and cities for Canada and US
