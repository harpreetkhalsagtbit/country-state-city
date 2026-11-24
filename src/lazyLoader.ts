/* Shared by lazy.ts and lazy-geo.ts: loads one generated per-country file, once. */
import { ICity } from './interface';

export type Loaders = Record<string, () => Promise<any>>;

// [stateCode, rows] pairs, in city.json order.
export type CityFile<T> = [string, T[]][];

// eslint-disable-next-line no-unused-vars
type ToCity<T> = (row: T, countryCode: string, stateCode: string) => ICity;

const cache = new Map<string, Promise<any>>();

export function loadCountryFile<T>(kind: string, loaders: Loaders, countryCode: string): Promise<T | undefined> {
	if (!countryCode || !Object.prototype.hasOwnProperty.call(loaders, countryCode)) {
		return Promise.resolve(undefined);
	}
	const key = `${kind}:${countryCode}`;
	let pending = cache.get(key);
	if (!pending) {
		pending = loaders[countryCode]().then((mod) => {
			return mod && mod.default !== undefined ? mod.default : mod;
		});
		// If loading fails (for example a chunk fails to download), let the next call try again.
		pending.catch(() => {
			cache.delete(key);
		});
		cache.set(key, pending);
	}
	return pending;
}

export function citiesOfState<T>(
	file: CityFile<T> | undefined,
	countryCode: string,
	stateCode: string,
	toCity: ToCity<T>,
): ICity[] {
	const entry = (file || []).find(([code]) => {
		return code === stateCode;
	});
	if (!entry) return [];
	return entry[1].map((row) => {
		return toCity(row, countryCode, stateCode);
	});
}

export function citiesOfCountry<T>(file: CityFile<T> | undefined, countryCode: string, toCity: ToCity<T>): ICity[] {
	const all: ICity[] = [];
	(file || []).forEach(([stateCode, rows]) => {
		rows.forEach((row) => {
			all.push(toCity(row, countryCode, stateCode));
		});
	});
	// Stable sort by name, the same as City.getCitiesOfCountry.
	return all.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});
}
