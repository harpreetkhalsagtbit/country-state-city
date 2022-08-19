// Combine all the split files to one Country, State, City file
import fs from 'fs';
import path from 'path';

const PATH_TO_DATA_FOLDER = '../../data';

/**
 * Country
 */
const allCountries: any[] = [];

const main = JSON.parse(fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, '/allCountries.json'), 'utf-8'));
const lite = JSON.parse(fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, '/allCountries.lite.json'), 'utf-8'));
const geo = JSON.parse(fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, '/allCountries.geo.json'), 'utf-8'));
const tz = JSON.parse(
	fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, '/allCountries.timezones.json'), 'utf-8'),
);

main.map((item: any, index: number) => {
	const combine = { ...item, ...lite[index], ...geo[index], ...tz[index] };
	allCountries.push(combine);
	return item;
});

fs.writeFileSync(path.join(__dirname, '../', 'assets/country.json'), JSON.stringify(allCountries, null, 3));

/**
 * State
 */
const allStates: any[] = [];
const alStatesNestedLite = JSON.parse(
	fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, '/allStatesNested.lite.json'), 'utf-8'),
);
const alStatesNestedGeo = JSON.parse(
	fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, '/allStatesNested.geo.json'), 'utf-8'),
);

Object.keys(alStatesNestedLite).map((key) => {
	alStatesNestedLite[key].map((item: any, index: number) => {
		const combine = { ...item, ...alStatesNestedGeo[key][index] };
		allStates.push(combine);
		return item;
	});
	return key;
});

fs.writeFileSync(path.join(__dirname, '../', 'assets/state.json'), JSON.stringify(allStates, null, 3));

// "Andorra-AD": {
// 	"Andorra_la_Vella-07": [
// 	   {
// 		  "name": "Andorra la Vella",
// 		  "countryCode": "AD",
// 		  "stateCode": "07"
// 	   }
// 	],

/**
 * City
 */
const allCitiesNestedLite = JSON.parse(
	fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, '/allCitiesNested.lite.json'), 'utf-8'),
);
const allCitiesNestedGeo = JSON.parse(
	fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, '/allCitiesNested.geo.json'), 'utf-8'),
);

const allCities: any[] = [];
Object.keys(allCitiesNestedLite).map((stateKey) => {
	Object.keys(allCitiesNestedLite[stateKey]).map((cityKey) => {
		allCitiesNestedLite[stateKey][cityKey].map((item: any, index: number) => {
			const combine = { ...item, ...allCitiesNestedGeo[stateKey][cityKey][index] };
			allCities.push(combine);
			return item;
		});
		return cityKey;
	});
	return stateKey;
});

fs.writeFileSync(path.join(__dirname, '../', 'assets/city.json'), JSON.stringify(allCities, null, 3));
