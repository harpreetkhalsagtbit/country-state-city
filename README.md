country-state-city
==============================
Basic library for Country, State and City

Data Source:<br>
https://github.com/dr5hn/countries-states-cities-database<br>
For any data related issue, you can also raise a Issue [here](https://github.com/dr5hn/countries-states-cities-database/issues/new).

# Install
`npm i country-state-city`

# Demos - Tree Shaking
1. Next.js
	- [Repo Link](https://github.com/harpreetkhalsagtbit/next-js-country-state-city-tree-shake-demo)
	- [Demo](https://next-js-country-state-city-tree-shake-demo.vercel.app) (production build)
3. React.js
	- [Repo Link](https://github.com/harpreetkhalsagtbit/react-js-country-state-city-tree-shake-demo)
	- [Demo](https://react-js-country-state-city-tree-shake-demo.vercel.app) (production build)

# Release Info & Documentation
1. [Release v3.2.0](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/reduced-city-json-file-size)
	1. To optimize bundle size, the data JSON files have undergone minification. For instance, the `city.json` file, which was originally around 25MB in an unminified state, has now been reduced to approximately 8MB through minification.
	2. The structure of the `city.json` file has been transformed from an Array of Objects to an Array of Arrays of Strings. Previously, the file contained duplicate property names for each object, resulting in a minified file size of 16MB due to JSON formatting requirements. To further minimize this, the file structure has been converted to an Array of Arrays, astonishingly reducing the size to 8MB.
	3. To accommodate this updated structure, modifications were made to the `city.ts` file. Importantly, these changes do not affect the functionality of existing code. All existing code will continue to work seamlessly without any breaking changes.
2. [Release v3.1.0](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/split-csc-data-for-better-debugging-and-fixing-data#release--v310)
    1. [Overview](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/split-csc-data-for-better-debugging-and-fixing-data#overview)
	2. [How to contribute to Country, State, City Database, request changes and report issue?
](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/split-csc-data-for-better-debugging-and-fixing-data#how-to-contribute-to-country-state-city-database-request-changes-and-report-issue)
	3. [How Data will be Released finally?
](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/split-csc-data-for-better-debugging-and-fixing-data#how-data-will-be-released-finally)
3. [Usage](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/split-csc-data-for-better-debugging-and-fixing-data#usage)
	1. [Release : v3.0.0 (Major Version Release - Not backward compatible)
](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/split-csc-data-for-better-debugging-and-fixing-data#release--v300-major-version-release---not-backward-compatible)
	2. [For versions below v2.2.0 and above v0.1.8
](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/split-csc-data-for-better-debugging-and-fixing-data#for-versions-below-v220-and-above-v018)
4. [Docs](https://github.com/harpreetkhalsagtbit/country-state-city/tree/hotfix/split-csc-data-for-better-debugging-and-fixing-data#docs)

## Release : `v3.1.0`

## Overview
1. The **data** folder in the root contains all the data of **Countries, their States and Cities**
2. The earlier **large big JSONs are split into smaller JSONs** and stored in separate files and folder
3. The advantage of doing so is to make it **easy to check, test and submit** the change. It's **easier to review** a small file than a large file. It's **easier to debug** any missing or wrong values in a small file.
4. This will help in future optimisation  
5. There is a separate folder for each country
    - Each **Country** folder contains **Country's** information and its **states as sub-child folders**
    - The **Country's** info is also split into - **Country Lite, Plain, Geo, TimeZone's.**
    - Inside each **Country** - there are **Sub-folder** of State
6. Each **State** folder contains **State's** information and its **Cities as sub-child** files
7. **State's** info is also split into - **State Lite, Geo**
8. Inside each **State** - there are JSON files of **City**
    1. Each **City** file contains information of all the Cities of that particular State 
    2. **Cities** info is split into two files - **City Lite, Geo**

## How to contribute to Country, State, City Database, request changes and report issue?
1. **Code change** - make the necessary change, raise the PR.
2. **Data changes** - Database is in `data` folder in the root. Please follow this [guidelines](/dataUpdateGuide.md).
3. **Update**: Add the necessary changes in the particular files with proper structure and format and then raise the PR.
4. **Add New - Country, State, City** - follow the proper folder structure and raise the P.R or simply share the JSONs in an issue with proper and up to date reference.  
6. **Deleting - Country, State, City** - remove the necessary files/folder - update the necessary files and raise the PR or simply share the updated JSONs in an issue with a proper and up to date reference.
7. Queries/Issues related to wrong data must be provided with some references.
8. For any **Geo-Political** related **queries, border conflicts** - things will be updated when multiple proper references has been provided.

## Data updation guide
Please follow this [guidelines](/dataUpdateGuide.md)

## How Data will be Released finally?
1. After the changes gets merged, a script will be run to combine all the data in a separate but single file for each Country, State, City as we have earlier without affecting out library functions and only those three files are passed to the build code and then it gets released.
2. In future we will be working on how to use these split files to optimise this library further.

# Usage

## Release : `v3.0.0` (Major Version Release - Not backward compatible)
  - ES6 Module usage
   
     ```js
	// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
	import { Country, State, City }  from 'country-state-city';
	console.log(Country.getAllCountries())
	console.log(State.getAllStates())

     // Import Interfaces`
	 import { ICountry, IState, ICity } from 'country-state-city'
	 
     ```
  - AMD Module usage
  
    ```js
	// Latest version - v3.0.0
	let Country = require('country-state-city').Country;
	let State = require('country-state-city').State;

	console.log(Country.getAllCountries())
	console.log(State.getAllStates())

    ```


## For versions `below v2.2.0 and above v0.1.8`

  - ES6 Module usage
   
     ```js
     import csc from 'country-state-city';
     ```

  - AMD Module usage
  
    ```js
    let csc = require('country-state-city').default;
    ```

# Docs

Country.getCountryByCode(countryCode)
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

State.getStateByCodeAndCountry(stateCode, countryCode)
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

State.getStatesOfCountry(countryCode)
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
City.getCitiesOfState(countryCode, stateCode)
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

City.getCitiesOfCountry(countryCode)
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

Country.getAllCountries
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

State.getAllStates
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

City.getAllCities
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

[taylorthurlow](https://github.com/taylorthurlow) - For pointing into right direction - Module Tree Shaking
