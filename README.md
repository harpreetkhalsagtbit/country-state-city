country-state-city
==============================
Basic library for Country, State and City

Data Source:<br>
https://github.com/dr5hn/countries-states-cities-database<br>
For any data related issue, you can raise a Issue [here](https://github.com/dr5hn/countries-states-cities-database/issues/new).

# Install
`npm i country-state-city`

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

getCountryByCode(code)
---------------

It accepts a valid `CountryCode` eg: `'AS'` and   returns *Country Details*

type: **json | ICountry**

```js
{ 
  "name": "India",
  "isoCode": "IN",
  "phonecode": "+91",
  "flag": "🇮🇳"
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
    "countryCode": "IN"
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
    "stateCode": "DL"
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
    "stateCode": "DL"
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
    "name": "India",
    "isoCode": "IN",
    "phonecode": "+91",
    "flag": "🇮🇳"
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
    "countryCode": "IN"
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
    "name": "New Delhi",
    "countryCode": "IN",
    "stateCode": "DL"
  }
]
```

Special Thanks
---------------

[@baywet](https://github.com/baywet) - For mentoring Javascript to Typescript Conversion

Change Logs
---------------
**v2.0.0 (Backward Incompatible)** :: [Data Source (dr5hn)](https://github.com/dr5hn/countries-states-cities-database)

1. ``
2. ``
3. ``
4. ``

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
