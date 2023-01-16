// To make it easy for debugging and get proper contribution support from community
// split the files as it makes it easy to changes and review.
import fs from 'fs';
import path from 'path';

import countryJSON from '../assets/country.json';
import stateJSON from '../assets/state.json';
import cityJSON from '../assets/city.json';

import { ICountry, IState, ICity } from '../interface';

const PATH_TO_DATA_FOLDER = '../../data';
/**
 * Write single file for each country in a designated country folder
 */

const countryListLite: any[] = [];
const countryList: any[] = [];
const countryListGeo: any[] = [];
const countryListTimeZones: any[] = [];
const countryMeta: any = {};

countryJSON.forEach((country: ICountry) => {
	const countryFolderName: String = `${country.name.replace(/\W/g, '_')}-${country.isoCode}`;
	const countryFolderPath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/${countryFolderName}`);
	const { name, isoCode, flag, phonecode, currency, latitude, longitude, timezones } = country;
	countryListLite.push({ name, isoCode });
	countryList.push({ name, isoCode, flag, phonecode, currency });
	countryListGeo.push({ name, isoCode, latitude, longitude });
	countryListTimeZones.push({ name, isoCode, timezones });
	countryMeta[isoCode] = countryFolderName;

	if (!fs.existsSync(countryFolderPath)) {
		fs.mkdirSync(countryFolderPath);
	}
});

const countryPlainJSONFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allCountries.lite.json`);
const countryListJSONFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allCountries.json`);
const countryListGeoJSONFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allCountries.geo.json`);
const countryListTimeZonesJSONFilePath: any = path.join(
	`${__dirname}/${PATH_TO_DATA_FOLDER}/allCountries.timezones.json`,
);
const countryMetaFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allCountries.meta.json`);
fs.writeFileSync(countryPlainJSONFilePath, JSON.stringify(countryListLite, null, 3), 'utf-8');
fs.writeFileSync(countryListJSONFilePath, JSON.stringify(countryList, null, 3), 'utf-8');
fs.writeFileSync(countryListGeoJSONFilePath, JSON.stringify(countryListGeo, null, 3), 'utf-8');
fs.writeFileSync(countryListTimeZonesJSONFilePath, JSON.stringify(countryListTimeZones, null, 3), 'utf-8');
fs.writeFileSync(countryMetaFilePath, JSON.stringify(countryMeta, null, 3), 'utf-8');

/**
 * States
 */
const stateListLite: any = {};
const stateListGeo: any = {};
const stateMeta: any = {};

stateJSON.forEach((state: IState) => {
	const stateFolderName: String = `${state.name.replace(/\W/g, '_')}-${state.isoCode}`;
	const stateParent = countryMeta[state.countryCode];
	const { name, countryCode, latitude, longitude } = state;
	const { isoCode } = state;
	const stateFolderPath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/${stateParent}/${stateFolderName}`);
	if (!stateListLite[stateParent]) {
		stateListLite[stateParent] = [];
	}
	if (!stateListGeo[stateParent]) {
		stateListGeo[stateParent] = [];
	}
	if (!stateMeta[stateParent]) {
		stateMeta[stateParent] = {};
	}

	stateListLite[stateParent].push({ name, isoCode, countryCode });
	stateListGeo[stateParent].push({ name, isoCode, countryCode, latitude, longitude });
	stateMeta[stateParent][isoCode] = stateFolderName;

	if (!fs.existsSync(stateFolderPath)) {
		fs.mkdirSync(stateFolderPath);
	}

	const stateListLiteJSONFilePath: any = path.join(
		`${__dirname}/${PATH_TO_DATA_FOLDER}/${stateParent}/allStates.lite.json`,
	);
	const stateListGeoJSONFilePath: any = path.join(
		`${__dirname}/${PATH_TO_DATA_FOLDER}/${stateParent}/allStates.geo.json`,
	);
	const stateMetaFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/${stateParent}/allStates.meta.json`);

	fs.writeFileSync(stateListLiteJSONFilePath, JSON.stringify(stateListLite[stateParent], null, 3), 'utf-8');
	fs.writeFileSync(stateListGeoJSONFilePath, JSON.stringify(stateListGeo[stateParent], null, 3), 'utf-8');
	fs.writeFileSync(stateMetaFilePath, JSON.stringify(stateMeta[stateParent], null, 3), 'utf-8');
});

const stateListLiteNestedJSONFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allStatesNested.lite.json`);
const stateListGeoNestedJSONFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allStatesNested.geo.json`);
const stateMetaFileJestedJSONPath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allStatesNested.meta.json`);

fs.writeFileSync(stateListLiteNestedJSONFilePath, JSON.stringify(stateListLite, null, 3), 'utf-8');
fs.writeFileSync(stateListGeoNestedJSONFilePath, JSON.stringify(stateListGeo, null, 3), 'utf-8');
fs.writeFileSync(stateMetaFileJestedJSONPath, JSON.stringify(stateMeta, null, 3), 'utf-8');

/**
 * Cities
 */
const cityListLite: any = {};
const cityListGeo: any = {};
const cityMeta: any = {};
const cityUndefined: any = [];
(cityJSON as ICity[]).forEach((city: ICity) => {
	const { name, countryCode, stateCode, latitude, longitude } = city;
	const cityISOPropriterValue = name.replace(/\W/g, '_');
	const stateParent = countryMeta[countryCode];

	const cityParent = stateMeta[stateParent][stateCode];

	if (!cityListLite[stateParent]) {
		cityListLite[stateParent] = {};
	}
	if (!cityListLite[stateParent][cityParent]) {
		cityListLite[stateParent][cityParent] = [];
	}

	if (!cityListGeo[stateParent]) {
		cityListGeo[stateParent] = {};
	}
	if (!cityListGeo[stateParent][cityParent]) {
		cityListGeo[stateParent][cityParent] = [];
	}

	if (!cityMeta[stateParent]) {
		cityMeta[stateParent] = {};
	}
	if (!cityMeta[stateParent][cityParent]) {
		cityMeta[stateParent][cityParent] = {};
	}

	// console.log(JSON.stringify(cityListLite, null, 3), stateParent, cityParent);
	cityListLite[stateParent][cityParent].push({ name, countryCode, stateCode });
	cityListGeo[stateParent][cityParent].push({ name, countryCode, stateCode, latitude, longitude });
	cityMeta[stateParent][cityParent][cityISOPropriterValue] = cityISOPropriterValue;

	const cityListLiteJSONFilePath: any = path.join(
		`${__dirname}/${PATH_TO_DATA_FOLDER}/${stateParent}/${cityParent}/allCities.lite.json`,
	);
	const cityListGeoJSONFilePath: any = path.join(
		`${__dirname}/${PATH_TO_DATA_FOLDER}/${stateParent}/${cityParent}/allCities.geo.json`,
	);
	const cityeMetaFilePath: any = path.join(
		`${__dirname}/${PATH_TO_DATA_FOLDER}/${stateParent}/${cityParent}/allCities.meta.json`,
	);

	if (cityParent) {
		fs.writeFileSync(
			cityListLiteJSONFilePath,
			JSON.stringify(cityListLite[stateParent][cityParent], null, 3),
			'utf-8',
		);

		fs.writeFileSync(
			cityListGeoJSONFilePath,
			JSON.stringify(cityListGeo[stateParent][cityParent], null, 3),
			'utf-8',
		);
		fs.writeFileSync(cityeMetaFilePath, JSON.stringify(cityMeta[stateParent][cityParent], null, 3), 'utf-8');
	} else {
		cityUndefined.push(city);
		// console.log(city, 'cityParent undefined');
	}
});

const cityListLiteNestedJSONFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allCitiesNested.lite.json`);
const cityListGeoNestedJSONFilePath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allCitiesNested.geo.json`);
const cityMetaFileNestedJSONPath: any = path.join(`${__dirname}/${PATH_TO_DATA_FOLDER}/allCitiesNested.meta.json`);
// cities with missing/invalid state code
const undefinedCityFoundFileNestedJSONPath: any = path.join(
	`${__dirname}/${PATH_TO_DATA_FOLDER}/allUndefinedCitiesNested.meta.json`,
);

fs.writeFileSync(cityListLiteNestedJSONFilePath, JSON.stringify(cityListLite, null, 3), 'utf-8');
fs.writeFileSync(cityListGeoNestedJSONFilePath, JSON.stringify(cityListGeo, null, 3), 'utf-8');
fs.writeFileSync(cityMetaFileNestedJSONPath, JSON.stringify(cityMeta, null, 3), 'utf-8');
fs.writeFileSync(undefinedCityFoundFileNestedJSONPath, JSON.stringify(cityUndefined, null, 3), 'utf-8');
