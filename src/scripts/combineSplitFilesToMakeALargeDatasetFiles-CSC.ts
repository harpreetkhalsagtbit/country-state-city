// Combine all the split files to one Country, State, City file
/* eslint-disable no-console */
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { deflate } from 'zlib';
import { ICountry, IState, ICity } from '../interface';
import { State, City } from '../index';

const PATH_TO_DATA_FOLDER = '../../data';

/**
 * Country
 */
const allCountries: ICountry[] = [];

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

const countryMetas: { [Property: string]: { countryPath: string } } = allCountries.reduce((accumulator, country) => {
	accumulator[country.isoCode] = { countryPath: `${country.name.replace(/\W/g, '_')}-${country.isoCode}` };
	return accumulator;
}, {} as { [Property: string]: { countryPath: string } });

/**
 * State
 */
const allStates: IState[] = [];
allCountries.forEach((country) => {
	process.stdout.write(`Combining ${country.name}-${country.isoCode}...`);
	const allStatesLite = new Map<string, IState>();
	const allStatesGeo = new Map<string, IState>();
	try {
		const { countryPath } = countryMetas[country.isoCode]; // `${country.name.replace(/\W/g, '_')}-${country.isoCode}`;
		(
			JSON.parse(
				fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, countryPath, 'allStates.lite.json'), 'utf-8'),
			) as IState[]
		).reduce((accumulator, item) => {
			accumulator.set(item.isoCode, item);
			return accumulator;
		}, allStatesLite);

		(
			JSON.parse(
				fs.readFileSync(path.join(__dirname, PATH_TO_DATA_FOLDER, countryPath, 'allStates.geo.json'), 'utf-8'),
			) as IState[]
		).reduce((accumulator, item) => {
			accumulator.set(item.isoCode, item);
			return accumulator;
		}, allStatesGeo);

		[...allStatesLite.keys()].forEach((key) => {
			assert(allStatesGeo.get(key));
			const combine: IState = { ...allStatesLite.get(key)!, ...allStatesGeo.get(key)! };
			allStates.push(combine);
		});
	} catch (error) {
		if (error instanceof Error) {
			// ✅ TypeScript knows err is Error console.log(error.message);
			process.stderr.write(` ${error.message}\n`);
		} else {
			console.log('Unexpected error', error);
		}
	} finally {
		process.stdout.write(`\rCombined ${country.name}-${country.isoCode}: ${allStatesLite.size} Cities\n`);
	}
});

fs.writeFileSync(
	path.join(__dirname, '../', 'assets/state.json'),
	JSON.stringify(State.sortByIsoCode(allStates), null, 3),
);

const stateMetas: { [Property: string]: { stateSubPath: string } } = allStates.reduce((accumulator, state) => {
	accumulator[`${state.countryCode}-${state.isoCode}`] = {
		stateSubPath: `${state.name.replace(/\W/g, '_')}-${state.isoCode}`,
	};
	return accumulator;
}, {} as { [Property: string]: { stateSubPath: string } });

/**
 * City
 */
const allCities: ICity[] = [];
allStates.forEach((state) => {
	process.stdout.write(`Combining ${state.countryCode}-${state.isoCode}...`);
	const { countryPath } = countryMetas[state.countryCode]; // `${country.name.replace(/\W/g, '_')}-${country.isoCode}`;
	const { stateSubPath } = stateMetas[`${state.countryCode}-${state.isoCode}`]; // `${country.name.replace(/\W/g, '_')}-${country.isoCode}`;

	const allCitiesLite: Map<string, ICity> = new Map();
	const allCitiesGeo: Map<string, ICity> = new Map();
	try {
		(
			JSON.parse(
				fs.readFileSync(
					path.join(__dirname, PATH_TO_DATA_FOLDER, countryPath, stateSubPath, 'allCities.lite.json'),
					'utf-8',
				),
			) as ICity[]
		).reduce((accumulator, item) => {
			accumulator.set(item.name, item);
			return accumulator;
		}, allCitiesLite);

		(
			JSON.parse(
				fs.readFileSync(
					path.join(__dirname, PATH_TO_DATA_FOLDER, countryPath, stateSubPath, 'allCities.geo.json'),
					'utf-8',
				),
			) as ICity[]
		).reduce((accumulator, item) => {
			accumulator.set(item.name, item);
			return accumulator;
		}, allCitiesGeo);

		[...allCitiesLite.keys()].forEach((key) => {
			assert(allCitiesGeo.get(key));
			const combine: ICity = { ...allCitiesLite.get(key)!, ...allCitiesGeo.get(key)! };
			allCities.push(combine);
		});
	} catch (error) {
		if (error instanceof Error) {
			// ✅ TypeScript knows err is Error console.log(error.message);
			process.stderr.write(` ${error.message}\n`);
		} else {
			console.log('Unexpected error', error);
		}
	} finally {
		process.stdout.write(`\rCombined ${state.countryCode}-${state.isoCode}: ${allCitiesLite.size} States\n`);
	}
});
fs.writeFileSync(
	path.join(__dirname, '../', 'assets/city.json'),
	JSON.stringify(City.sortByStateAndName(allCities), null, 3),
);

if (process.env.gz === 'true') {
	const deflatePromise = promisify(deflate);
	deflatePromise(JSON.stringify(allCountries, null, 3)).then((zipped) => {
		fs.writeFileSync(path.join(__dirname, '../', 'assets/country.gz'), zipped);
	});

	deflatePromise(JSON.stringify(allStates, null, 3)).then((zipped) => {
		fs.writeFileSync(path.join(__dirname, '../', 'assets/states.gz'), zipped);
	});

	deflatePromise(JSON.stringify(allCities, null, 3)).then((zipped) => {
		fs.writeFileSync(path.join(__dirname, '../', 'assets/cities.gz'), zipped);
	});
}
