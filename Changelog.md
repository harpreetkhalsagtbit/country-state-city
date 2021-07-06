Change Logs
---------------

**v3.0.1** :: 
1. Return `undefined` instead of empty string for invalid inputs for functions like -  `State.getStateByCodeAndCountry()`, `State.getStateByCode()`(to be deprecate soon), `Country.getCountryByCode()`
2. Return empty Array value - `[]` instead of undefined for invalid inputs for functions like - `City.getCitiesOfCountry()`, `City.getCitiesOfState()`, `State.getStatesOfCountry()`

**v3.0.0** :: 
1. Refactoring of complete package to make this package - Tree shakable [Fix:60](https://github.com/harpreetkhalsagtbit/country-state-city/issues/60).
2. Change in usage:

    - ES6 Module usage
    
        ```js
        // Latest version - v3.0.0
        import { Country, State, City }  from 'country-state-city';
        ```

    - AMD Module usage
    
        ```js
        // Latest version - v3.0.0
        let Country = require('country-state-city').Country;
        let State = require('country-state-city').State;

        console.log(Country.getAllCountries())
        console.log(State.getAllStates())
        ```

**v2.2.0** :: 

1. State, City Database update by [(dr5hn)](https://github.com/dr5hn/countries-states-cities-database)

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
