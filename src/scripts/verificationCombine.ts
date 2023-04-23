/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

/**
 * verification
 */
const allCoutriesNew = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../', 'assets/allCountryNew.json'), 'utf-8'),
).map((item: { name: any }) => {
	return item.name;
});
const allStatesNew = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'assets/allStatesNew.json'), 'utf-8')).map(
	(item: { name: any }) => {
		return item.name;
	},
);
const allCitiesNew = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'assets/allCitiesNew.json'), 'utf-8')).map(
	(item: { name: any }) => {
		return item.name;
	},
);

const allCoutriesOld = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'assets/country.json'), 'utf-8')).map(
	(item: { name: any }) => {
		return item.name;
	},
);
const allStatesOld = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'assets/state.json'), 'utf-8')).map(
	(item: { name: any }) => {
		return item.name;
	},
);
const allCitiesOld = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'assets/city.json'), 'utf-8')).map(
	(item: { name: any }) => {
		return item.name;
	},
);

// Data verification
console.log('country check');
console.log(allCoutriesNew.sort().join() === allCoutriesOld.sort().join());

console.log('state check');
console.log(allStatesNew.sort().join() === allStatesOld.sort().join());

console.log('city check');
console.log(allCitiesNew.sort().join() === allCitiesOld.sort().join());
